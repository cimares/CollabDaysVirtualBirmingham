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