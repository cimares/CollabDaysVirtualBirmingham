import * as React from 'react';
import { useRecoilState } from 'recoil';
import { SpeakerInfo } from '../models';
import { SpeakersState } from '../states/SpeakerState';

export interface ISpeakerProps {
  idx: number;
  info: SpeakerInfo;
}

export const Speaker: React.FunctionComponent<ISpeakerProps> = (props: ISpeakerProps) => {
  const [ allSpeakers ] = useRecoilState(SpeakersState);
  const { idx, info } = props;

  if (allSpeakers && allSpeakers.length > 0) {
    const speaker = allSpeakers.find(s => s.id === info.id);
    if (speaker) {
      const link = speaker.links.find(l => l.title === "Twitter");
      if (link && link.url) {
        return (
          <>
            { idx > 0 && <span className="mr-2">,</span>}
            <a href={link.url} target="_blank" title={`Twitter: ${info.name}`} rel="noopener noreferrer">{info.name}</a>
          </>
        );
      }
    }
  }

  return <span>{idx > 0 ? ', ' : ''}{info.name}</span>;
};