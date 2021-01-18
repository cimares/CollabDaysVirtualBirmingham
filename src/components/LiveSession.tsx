import { differenceInDays } from 'date-fns';
import * as React from 'react';
import { useRecoilState } from 'recoil';
import { Channel as CrntChannel } from '../models/Channel'
import { ConfigState } from '../states/ConfigState';
import { Channel } from './Channel';

export interface ILiveSessionProps {
  channel: CrntChannel | null;
}

export const LiveSession: React.FunctionComponent<ILiveSessionProps> = (props: ILiveSessionProps) => {
  const [ config ] = useRecoilState(ConfigState);
  const { channel } = props;

  let crntChannel = null;
  if (channel) {
    crntChannel = channel;
  } else {
    if (config && config.channels[0]) {
      crntChannel = config.channels[0];
    } else {
      return null;
    }
  }

  const now = new Date();
  const channelDate = new Date(crntChannel.startsAt);
   if (differenceInDays(now, channelDate) >= 0) {
    return (
      <section className="container flex flex-wrap md:flex-no-wrap mx-auto mt-4">
        <Channel key={crntChannel.title} info={crntChannel} />
      </section>
    );
  } else {
    return (
      <section className="channel__container container flex justify-center items-center mx-auto mt-4 bg-gray-200 rounded-md">
        <h2 className="text-3xl text-center">Channel broadcast is not yet available.</h2>
        {/* <h2 className="text-3xl text-center">Thank you all for attending CollabDays Virtual Birmingham. See you next year.</h2> */}
        {/* <h2 className="text-3xl text-center">Thank you all for attending CollabDays Benelux.<br/>You can rewatch all sessions on our <a href="https://www.youtube.com/playlist?list=PLlOaH8KOvX_7mWuRwHj35Sf-8LzPxQ85L" rel="noopener noreferrer" target="_blank">CollabDays Benelux YouTube channel</a>.</h2> */}
      </section>
    );
  }
};