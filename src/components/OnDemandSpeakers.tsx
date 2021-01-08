import * as React from 'react';
import {OnDemandSpeakerInfo} from '../models/OnDemandInfo';
import {OnDemandSpeaker} from './OnDemandSpeaker';

export interface IOnDemandSpeakersProps {
    speakers: OnDemandSpeakerInfo[];
}

export const OnDemandSpeakers: React.FunctionComponent<IOnDemandSpeakersProps> = (props: IOnDemandSpeakersProps) => {
    const { speakers } = props;

    return (
        <>
            <div>
                {speakers && (
                    speakers.map((s,idx) => <OnDemandSpeaker idx={idx} speaker={s}/>
                    ))}
            </div>
        </>
    )

}