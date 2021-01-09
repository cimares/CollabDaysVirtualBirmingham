import * as React from 'react';
import { OnDemandInfo } from '../models/OnDemandInfo';
import { OnDemandSession } from './OnDemandSession';

export interface IOnDemandListProps {
    OnDemandSessions: OnDemandInfo[];
}

export const OnDemandList: React.FunctionComponent<IOnDemandListProps> = (props: IOnDemandListProps) => {
    const { OnDemandSessions } = props;

    if (!OnDemandSessions || OnDemandSessions.length <= 0) {
        return <div>On Demand Info collection is empty</div>
      }

    return (
    <div className="cod__container container items-center m-auto leading-normal max-w-4xl">
        <h1 className="text-display text-3xl my-4 text-center">CollabDays Virtual Birmingham - On-Demand Sessions</h1>
        <p className="my-2">We struggled to fit every session that we wanted from the 181 sessions that were submitted by our speaking community, 
        so to provide a wider choice we wanted to have a few sessions available on-demand for you to watch in your own time. These sessions will be available 
        from 8am on the morning of the event and then for 20 days following this event, thanks to the kindness of our speakers.</p>
        <br/>
    {OnDemandSessions && (
        OnDemandSessions.map((s,idx) => <OnDemandSession idx={idx} OnDemandSession={s} />
    ))}
    
    </div>
    );

}