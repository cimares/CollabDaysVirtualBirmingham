import * as React from 'react';
import {OnDemandSpeakerInfo} from '../models/OnDemandInfo';
import { useRecoilState } from 'recoil';
import { SpeakersState } from '../states/SpeakerState';
import { SpeakerDetails } from './SpeakerDetails';

export interface IOnDemandSpeakersProps {
    idx: number;
    speaker: OnDemandSpeakerInfo;
}

export const OnDemandSpeaker: React.FunctionComponent<IOnDemandSpeakersProps> = (props: IOnDemandSpeakersProps) => {
    const [ allSpeakers ] = useRecoilState(SpeakersState);
    const { speaker } = props;
    const { idx } = props

    return (
        <>
            {
                allSpeakers.filter(s => s.id === speaker.id).map(selSpeaker => (
                    <SpeakerDetails key={idx} speaker={selSpeaker}/>
                ))
            }
        </>
    )

}