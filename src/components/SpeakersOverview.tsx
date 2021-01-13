import * as React from 'react';
import { useRecoilState } from 'recoil';
import { SpeakersState } from '../states/SpeakerState';
import { SpeakerDetails } from './SpeakerDetails';

export interface ISpeakersOverviewProps {}

export const SpeakersOverview: React.FunctionComponent<ISpeakersOverviewProps> = (props: ISpeakersOverviewProps) => {
  const [ allSpeakers ] = useRecoilState(SpeakersState);

  if (!allSpeakers || allSpeakers.length <= 0) {
    return <div>No speaker info yet</div>;
  }

  return (
    <section className="speakers__overview container items-center m-auto leading-none mt-8" role="list">
      <div className="w-full px-5 py-8 mx-auto">
        <div className="flex flex-col text-center w-full">
          <h2 id="speakers" className="text-xs text-cadetblue-700 tracking-widest font-medium title-font mb-1">Speakers</h2>
          <h1 className="sm:text-3xl text-2xl font-medium title-font mb-4 text-cadetblue-900">Thanks to our amazing speakers</h1>
        </div>
      </div>

      <div className="flex flex-wrap md:-mx-8 -mt-8"> 
        {
          allSpeakers.filter(s => s.fullName.toLowerCase().indexOf(`[sponsor]`) === -1).map(speaker => (
            <SpeakerDetails key={speaker.id} speaker={speaker} />
          ))
        }
      </div>
    </section>
  );
};