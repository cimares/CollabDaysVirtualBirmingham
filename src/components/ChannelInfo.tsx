import { differenceInMinutes, format } from 'date-fns';
import * as React from 'react';
import { Link } from 'react-router-dom';
import { useRecoilState } from 'recoil';
import { SessionCode } from './SessionCode';
import { Channel } from '../models/Channel';
import {  Session } from '../models/Sessions';
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

  const getCurrentSession = () => {
    let current: Session | null = null;
    let next: Session | null = null;

    const room = sessions.find(r => r.groupName === info.title);
    if (room) {
      // const now = addDays(new Date(), 8);
      const now = new Date();
      for (const session of room.sessions) {
        const startsAt = new Date(session.startsAt);
        // const endsAt = new Date(session.endsAt);

        // + is future, - is past 
        const startDiff = differenceInMinutes(startsAt, now);
        // const endDiff = differenceInMinutes(endsAt, now);

        if (!current && (startDiff < 15 && startDiff >= -45)) {
          current = Object.assign({}, session);
          if (current.id !== crntSession?.id) {
            setCrntSession(current);
          }
        } else {
          if (current && !next) {
            next = Object.assign({}, session);
            setNextSession(next);
          }
        }
      }
    } else {
      setCrntSession(null);
      setNextSession(null);
    }

    setTimeout(() => {
      getCurrentSession();
    }, ((config && config.refreshData ? config.refreshData : 1) * 60 * 1000));
  }

  // Fetch the current session on the first load
  React.useEffect(() => {
    if (sessions && sessions.length) {
      getCurrentSession();
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, ['', sessions]);

  if (!crntSession) {
    return null;
  }

  triggerParentVisible();

  return (
    <div className="channelinfo p-4 md:w-1/3">
      <div className={`h-full ${crnt && crnt.id === info.id ? "channelinfo__on_air border-tomato-600" : "border-gray-300"} border-2 bg-gray-200 p-8 rounded-lg overflow-hidden text-center relative flex flex-col justify-between`}>
        <Link to={`/channels/${info.id}`}>
          <h2 className="tracking-widest text-xs title-font font-medium text-cadetblue-700 mb-1">{info.title}</h2>
          <h1 className="title-font sm:text-xl text-xl font-medium text-gray-900 mb-3"><SessionCode questions={crntSession.questionAnswers || null} />{crntSession.title}</h1>
        </Link>

        <Link to={`/channels/${info.id}`} title={`Switch to ${info.title}`} className="block mb-4">
          <svg className="icon mr-2" aria-hidden="true" focusable="false" data-prefix="fas" data-icon="tv-retro" role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512"><path fill="currentColor" d="M464 96H338.8l35.7-41.4c12.5-12.5 12.5-32.8 0-45.3s-32.8-12.5-45.3 0L256 94.2 182.8 9.4c-12.5-12.5-32.8-12.5-45.3 0s-12.5 32.8 0 45.3L173.2 96H48c-26.5 0-48 21.5-48 48v288c0 26.5 21.5 48 48 48h16v32h48l21.3-32h245.3l21.3 32h48v-32h16c26.5 0 48-21.5 48-48V144c.1-26.5-21.4-48-47.9-48zm-72 312s0 8-168 8c-152 0-152-8-152-8s-8 0-8-120 8-120 8-120 0-8 152-8c168 0 168 8 168 8s8 0 8 120-8 120-8 120zm72-100c0 6.6-5.4 12-12 12h-8c-6.6 0-12-5.4-12-12v-8c0-6.6 5.4-12 12-12h8c6.6 0 12 5.4 12 12v8zm0-64c0 6.6-5.4 12-12 12h-8c-6.6 0-12-5.4-12-12v-8c0-6.6 5.4-12 12-12h8c6.6 0 12 5.4 12 12v8z"></path></svg> Switch to {info.title}
        </Link>

        {/*<Speakers speakers={crntSession.speakers} />*/}

        {
          discordUrl && (
            <a className="channelinfo__discord" href={discordUrl} title="Chat on discord" target="_blank" rel="noopener noreferrer">
              <svg aria-hidden="true" focusable="false" data-prefix="fab" data-icon="discord" role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512"><path fill="currentColor" d="M297.216 243.2c0 15.616-11.52 28.416-26.112 28.416-14.336 0-26.112-12.8-26.112-28.416s11.52-28.416 26.112-28.416c14.592 0 26.112 12.8 26.112 28.416zm-119.552-28.416c-14.592 0-26.112 12.8-26.112 28.416s11.776 28.416 26.112 28.416c14.592 0 26.112-12.8 26.112-28.416.256-15.616-11.52-28.416-26.112-28.416zM448 52.736V512c-64.494-56.994-43.868-38.128-118.784-107.776l13.568 47.36H52.48C23.552 451.584 0 428.032 0 398.848V52.736C0 23.552 23.552 0 52.48 0h343.04C424.448 0 448 23.552 448 52.736zm-72.96 242.688c0-82.432-36.864-149.248-36.864-149.248-36.864-27.648-71.936-26.88-71.936-26.88l-3.584 4.096c43.52 13.312 63.744 32.512 63.744 32.512-60.811-33.329-132.244-33.335-191.232-7.424-9.472 4.352-15.104 7.424-15.104 7.424s21.248-20.224 67.328-33.536l-2.56-3.072s-35.072-.768-71.936 26.88c0 0-36.864 66.816-36.864 149.248 0 0 21.504 37.12 78.08 38.912 0 0 9.472-11.52 17.152-21.248-32.512-9.728-44.8-30.208-44.8-30.208 3.766 2.636 9.976 6.053 10.496 6.4 43.21 24.198 104.588 32.126 159.744 8.96 8.96-3.328 18.944-8.192 29.44-15.104 0 0-12.8 20.992-46.336 30.464 7.68 9.728 16.896 20.736 16.896 20.736 56.576-1.792 78.336-38.912 78.336-38.912z"></path></svg> Chat on discord {info.title}
            </a>
          )
        }

        {
          nextSession && (
            <p className="mt-4 text-gray-700" title={`Coming up: ${nextSession.title}`}>
              <svg className="icon mr-2" aria-hidden="true" focusable="false" data-prefix="fas" data-icon="arrow-circle-right" role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512"><path fill="currentColor" d="M256 8c137 0 248 111 248 248S393 504 256 504 8 393 8 256 119 8 256 8zm-28.9 143.6l75.5 72.4H120c-13.3 0-24 10.7-24 24v16c0 13.3 10.7 24 24 24h182.6l-75.5 72.4c-9.7 9.3-9.9 24.8-.4 34.3l11 10.9c9.4 9.4 24.6 9.4 33.9 0L404.3 273c9.4-9.4 9.4-24.6 0-33.9L271.6 106.3c-9.4-9.4-24.6-9.4-33.9 0l-11 10.9c-9.5 9.6-9.3 25.1.4 34.4z"></path></svg>
              
              <b>Next session</b>: {nextSession.title} ({format(new Date(nextSession.startsAt), config && config.dateFormat ? config.dateFormat : "HH:mm")})
            </p>
          )
        }
      </div>
    </div>
  );
};