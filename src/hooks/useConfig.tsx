import * as React from 'react';
import { useRecoilState } from "recoil";
import { DateHelper, DateInterval } from '@valo/cache';
import { ConfigState } from '../states/ConfigState';
import { CacheContext } from '..';
import isEqual from 'lodash.isequal';

export function useConfig(): void {
  const [config , setConfig ] = useRecoilState(ConfigState);
  const cache = React.useContext(CacheContext);

  const getData = async () => {
    try {
      const cacheKey = `Event:Config`;

      try {
        await cache.init();
        const eventConfig = await cache.get(cacheKey);
        if (eventConfig) {
          return eventConfig;
        }
      } catch (e) {
        // Probably cache empty
      }

      const data = await fetch(`/config.json`, { cache: "no-store" });
  
      if (data && data.ok) {
        const apiData = await data.json();

        try {
          await cache.put(cacheKey, apiData, DateHelper.dateAdd(Date(), DateInterval.second, 1));
        } catch (e) {
          console.log(`Error: ${e.message}`);
        }

        return apiData;
      }

      return [];
    } catch (e) {
      console.error(e.message);
      return [];
    }
  };

  const getConfig = async () => {
    const newConfig = await getData();
    if (!isEqual(config, newConfig)) {
      setConfig(newConfig);
    }

    if (newConfig) {
      setTimeout(() => {
        getConfig();
      }, ((newConfig.refreshData || 1) * 60 * 1000));
    }
  };

  const fetchData = () => {
    getConfig();
  }

  React.useEffect(() => {
    fetchData();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, ['']);

  return;
}