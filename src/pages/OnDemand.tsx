import * as React from 'react';
import { useRecoilState } from 'recoil';
import { ConfigState } from '../states/ConfigState';
import { OnDemandList } from '../components/OnDemandList';

export interface IOnDemandProps { }

export const OnDemand: React.FunctionComponent<IOnDemandProps> = (props: IOnDemandProps) => {
  const [config] = useRecoilState(ConfigState);

  if (!config || !config.onDemand || config.onDemand.length <= 0) {
    return <>
    <div>No config info</div>
    </>
    ;
  }

  return (
    <>
      <OnDemandList OnDemandSessions={config.onDemand} />
    </>
  );
};