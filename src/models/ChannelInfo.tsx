import { differenceInMinutes, format } from 'date-fns';
import * as React from 'react';
import { Link } from 'react-router-dom';
import { useRecoilState } from 'recoil';
import { Channel} from '../models/Channel';
import { Session } from '../models/Sessions'
import { ConfigState } from '../states/ConfigState';
import { SessionsState } from '../states/SessionsState';

export interface IChannelInfoProps {
  info: Channel;
  crnt: Channel | null;
  triggerParentVisible: () => void;
}

export const ChannelInfo: React.FunctionComponent<IChannelInfoProps> = (props: IChannelInfoProps) => {
  const [ sessions ] = useRecoilState(SessionsState);
  const [ config ] = useRecoilState(ConfigState);
  const [ crntSession, setCrntSession ] = React.useState<Session | null>(null);
  const [ nextSession, setNextSession ] = React.useState<Session | null>(null);
  const { crnt, info, triggerParentVisible } = props;

  let discordUrl = ``;
  if (config && config.discordServerId && info.discord.channelId) {
    discordUrl = `https://discord.com/channels/${config.discordServerId}/${info.discord.channelId}`;
  }

    return (
      <div>Channel Info here</div>
  );
};