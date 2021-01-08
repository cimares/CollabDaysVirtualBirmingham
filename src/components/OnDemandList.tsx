import * as React from 'react';
import { useRecoilState } from 'recoil';
import { ConfigState } from '../states/ConfigState';
import { OnDemandInfo } from '../models/OnDemandInfo'

export interface IOnDemandListProps {
    OnDemandSessions: OnDemandInfo[];
}

export const OnDemandList: React.FunctionComponent<IOnDemandListProps> = (props: IOnDemandListProps) => {
    const [ config ] = useRecoilState(ConfigState);
    const { OnDemandSessions } = props;

    if (!OnDemandSessions || OnDemandSessions.length <= 0) {
        return <div>On Demand Info collection is empty</div>
      }

    return (
    <div>
    {OnDemandSessions && (
        OnDemandSessions.map((s,idx) => <div>{s.title}</div>
        //TODO Create the OnDemand session object
    ))}
    
    </div>
    );

}