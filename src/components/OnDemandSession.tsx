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
    if (differenceInDays(now, sessionDate) <= 0) {
        sessionAvail = false;
    }
    if (differenceInDays(now, sessionEndDate) >= 0) {
        sessionAvail = false;
    }
    sessionAvail = true;

    return (
        <>
            <div className="container items-center m-auto leading-normal max-w-3xl bg-gray-200">
                {sessionAvail === false &&
                    <div className="container items-center flex p-2 leading-none">
                        <span className="flex rounded-full uppercase px-2 py-1 text-xs font-bold mr-3 bg-red-700 text-white ">
                            Session not currently available</span>
                    </div>
                }

                {sessionAvail === true &&
                    <div className="container items-center flex p-2 leading-none">
                        <span className="flex rounded-full uppercase px-2 py-1 text-xs font-bold mr-3 bg-green-500 hover:bg-green-700">
                        <a style={{color:"white"}} href={OnDemandSession.sessionUrl} target='_blank' rel="noreferrer">
                            Click here to view this session</a></span></div>
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