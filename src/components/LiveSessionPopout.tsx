import * as React from 'react';
import { useRecoilState } from 'recoil';
import { Channel as CrntChannel } from '../models/Channel'
import { ConfigState } from '../states/ConfigState';

export interface ILiveSessionPopoutProps {
  channel: CrntChannel | null;
}

export const LiveSessionPopout: React.FunctionComponent<ILiveSessionPopoutProps> = (props: ILiveSessionPopoutProps) => {

    return (
      <section className="channel__container_popout container flex justify-center items-center mx-auto mt-4 bg-gray-200 rounded-md">
        <h2 className="text-3xl text-center">Thank you for attending. We'll e-mail out links to the recorded sessions.</h2>
        {/* <h2 className="text-3xl text-center">Thank you all for attending CollabDays Virtual Birmingham. See you next year.</h2> */}
        {/* <h2 className="text-3xl text-center">Thank you all for attending CollabDays Benelux.<br/>You can rewatch all sessions on our <a href="https://www.youtube.com/playlist?list=PLlOaH8KOvX_7mWuRwHj35Sf-8LzPxQ85L" rel="noopener noreferrer" target="_blank">CollabDays Benelux YouTube channel</a>.</h2> */}
      </section>
    );
};