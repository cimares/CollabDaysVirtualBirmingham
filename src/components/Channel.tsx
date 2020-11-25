import * as React from 'react';
import { useRecoilState } from 'recoil';
import { Channel as ChannelInfo } from '../models/Channel'
import { ConfigState } from '../states/ConfigState';

export interface IChannelProps {
  info: ChannelInfo;
}

export const Channel: React.FunctionComponent<IChannelProps> = (props: IChannelProps) => {
  const [ config ] = useRecoilState(ConfigState);
  const { info } = props;

  if (info.discord.enabled && config && config.discordServerId && info.discord.channelId) {
    const embedUrl = `https://titanembeds.com/embed/${config.discordServerId}?defaultchannel=${info.discord.channelId}&fixedsidenav=false`;

    return (
      <>
        <div className="w-full md:w-2/3 md:mr-4">
          <iframe title={info.title} className="channel__session__iframe w-full" height="720" src={info.sessionUrl} frameBorder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowFullScreen={!!info.allowFullScreen}></iframe>
        </div>
        <div className="w-full md:w-1/3 mt-4 md:mt-0 text-center">
          <iframe title={`Discord: ${info.title}`} className="channel__discord__iframe w-full" src={embedUrl} height="720" frameBorder="0"></iframe>
        </div>
      </>
    );
  } else {
    return (
      <div className="w-full">
        <iframe title={info.title} className="channel__session__iframe w-full" height="720" src={info.sessionUrl} frameBorder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowFullScreen={!!info.allowFullScreen}></iframe>
      </div>
    );
  }
};