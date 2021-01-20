import * as React from 'react';
import { useRecoilState } from 'recoil';
import { Channel as CrntChannel } from '../models/Channel';
import { ConfigState } from '../states/ConfigState';
import { ChannelInfo } from './ChannelInfo';

export interface IChannelOverviewProps {
  channel: CrntChannel | null;
}

export const ChannelOverview: React.FunctionComponent<IChannelOverviewProps> = (props: IChannelOverviewProps) => {
  const [ config ] = useRecoilState(ConfigState);
  const [ isVisible, setIsvisible ] = React.useState<boolean>(false)

  const setVisibility = () => {
    if (!isVisible) {
      setIsvisible(true);
    }
  }

  return (
    <section className={`${isVisible ? "" : "hidden"} container flex mx-auto mt-8`} role="list">
      <div className="container mx-auto">
      { config && config.popOutVideo === true &&
          <div className="mx-auto text-center p-2 text-2xl border-2 bg-gray-200 rounded-lg mb-2">Current Live Sessions
          <div className="text-base">Due to live streaming restrictions, the YouTube stream will open in a new window when you select the channel below.</div>
          <div className="text-sm bold italic">Please note: Live chat on YouTube will not be monitored. Please join the Discord server to engage with the speakers.</div>
          </div>
        }
        <div className="flex flex-wrap justify-between md:-mx-4 -my-4">
        {
          config && config.channels && config.channels.map(channel => (
            <ChannelInfo key={channel.title} info={channel} crnt={props.channel} triggerParentVisible={setVisibility} />
          ))
        }
        </div>
      </div>
    </section>
  );
};