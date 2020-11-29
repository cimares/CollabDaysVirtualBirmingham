import * as React from 'react';
import { useParams } from 'react-router-dom';
import { useRecoilState } from 'recoil';
import { ConfigState } from '../states/ConfigState';
import { Sponsors } from '../components/Sponsors';
import { LiveSession } from '../components/LiveSession';
import { SpeakersOverview } from '../components/SpeakersOverview';
import { Schedule } from '../components/Schedule';
import { ChannelOverview } from '../components/ChannelOverview';

export interface IHomeProps { }

export const Home: React.FunctionComponent<IHomeProps> = (props: IHomeProps) => {
  const [config] = useRecoilState(ConfigState);
  let { channel } = useParams<{ channel: string | undefined }>();

  let crntChannel = config && config.channels[0];
  if (config && channel) {
    crntChannel = config.channels.find(c => c.id.toLowerCase() === (channel as string).toLowerCase()) || config.channels[0];
  }

  return (
    <>

      <LiveSession channel={crntChannel} />

      <Sponsors />

      <ChannelOverview channel={crntChannel} />

      <Schedule />

      <SpeakersOverview />
    </>
  );
};