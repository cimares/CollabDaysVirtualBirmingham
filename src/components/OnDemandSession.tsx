import * as React from 'react';
import { OnDemandInfo } from '../models/OnDemandInfo';
import { OnDemandSpeakers } from './OnDemandSpeakers';

export interface IOnDemandListProps {
    idx: number;
    OnDemandSession: OnDemandInfo;
}

export const OnDemandSession: React.FunctionComponent<IOnDemandListProps> = (props: IOnDemandListProps) => {
    const { OnDemandSession } = props;

    return (
        <>
            <div className="container items-center m-auto leading-normal max-w-3xl bg-gray-300">
                    <h2>{OnDemandSession.title}</h2>
                    <div>{OnDemandSession.description}</div>
                <div>
                <OnDemandSpeakers speakers={OnDemandSession.speakers} />
                </div>
            </div>
            <br />
        </>
    );

}