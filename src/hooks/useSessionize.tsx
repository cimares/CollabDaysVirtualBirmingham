import * as React from 'react';
import { CacheContext } from '..';
import { useRecoilState } from "recoil";
import { SpeakersState } from '../states/SpeakerState';
import { SessionsState } from '../states/SessionsState';
import { DateHelper, DateInterval } from '@valo/cache';
import { ConfigState } from '../states/ConfigState';

export function useSessionize(): void {
  const cache = React.useContext(CacheContext);
  const [ config ] = useRecoilState(ConfigState);
  const [ , setSpeakers ] = useRecoilState(SpeakersState);
  const [ , setSessions ] = useRecoilState(SessionsState);

  const getData = async (apiUrl: string) => {
    try {
      const cacheKey = `Event:Data:${apiUrl}`;

      try {
        await cache.init();
        const eventData = await cache.get(cacheKey);
        if (eventData) {
          return eventData;
        }
      } catch (e) {
        // Probably cache empty
      }

      let data;
      try {
        data = await fetch(`/api/sessionize`, {
          method: "POST",
          headers: {
            "content-type": "application/json"
          },
          body: JSON.stringify({
            apiUrl
          })
        });

        if (!data || !data.ok) {
          // eslint-disable-next-line
          throw "error";
        }
      } catch (e) {
        data = await fetch(apiUrl);
      }

      if (data && data.ok) {
        const apiData = await data.json();

        try {
          await cache.put(cacheKey, apiData, DateHelper.dateAdd(Date(), DateInterval.minute, 1));
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

  const getSpeakers = async () => {
    if (config) {
      const speakers = await getData(config.sessionize.speakers);
      setSpeakers(speakers);
    }
  };

  const getSessions = async () => {
    if (config) {
      const sessions = await getData(config && config.sessionize.sessions);
      setSessions(sessions);
    }
  };

  const fetchData = () => {
    getSpeakers();
    getSessions();

    if (config) {
      setTimeout(() => {
        fetchData();
      }, ((config.refreshData || 1) * 60 * 1000));
    }
  }

  React.useEffect(() => {
    if (config) {
      fetchData();
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, ['', config]);

  return;
}