import { differenceInDays } from 'date-fns';
import * as React from 'react';
import { OnDemandInfo } from '../models/OnDemandInfo';
import { OnDemandSpeakers } from './OnDemandSpeakers';

export interface IOnDemandListProps {
    idx: number;
    OnDemandSession: OnDemandInfo;
}

export const OnDemandSession: React.FunctionComponent<IOnDemandListProps> = (props: IOnDemandListProps) => {
    const { OnDemandSession } = props;

    const now = new Date();
    const sessionDate = new Date(OnDemandSession.startsAt);
    const sessionEndDate = new Date(OnDemandSession.endsAt);
    let sessionAvail = true;
    if (differenceInDays(now,sessionDate) <= 0){
        sessionAvail = false;
    }
    if (differenceInDays(now,sessionEndDate) >= 0){
        sessionAvail = false;
    }

    return (
        <>
            <div className="container items-center m-auto leading-normal max-w-3xl bg-gray-300">
                {sessionAvail === false &&
                    <div>Session not currently available</div>
                }

                {sessionAvail === true &&
                    <div><a href={OnDemandSession.sessionUrl} target='_blank'>Click here to view this session</a></div>
                }
                    <p className="text-2xl font-bold mb-4 mr-5">{OnDemandSession.title}</p>
                    <p className="mb-2">{OnDemandSession.description}</p>
                <div>
                <OnDemandSpeakers speakers={OnDemandSession.speakers} />
                </div>
            </div>
            <br />
        </>
    );

}