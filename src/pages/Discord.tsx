import * as React from 'react';
import { useRecoilState } from 'recoil';
import { ConfigState } from '../states/ConfigState';

export interface IDiscordProps {}

export const Discord: React.FunctionComponent<IDiscordProps> = (props: IDiscordProps) => {
  const [ config ] = useRecoilState(ConfigState);

  let discordUrl = ``;
  if (config && config.discordInvite) {
    discordUrl = config.discordInvite;
  } else if (config && config.discordServerId) {
    discordUrl = `https://discord.com/channels/${config.discordServerId}/${config.discordChannelId || ""}`;
  }
  
  return (
    <div className="cod__container container items-center m-auto leading-normal max-w-4xl">
      <h1 className="text-display text-3xl my-4 text-center">How to join our CollabDays Virtual Birmingham Discord channel</h1>
 
      <p className="my-2">Looking to join our CollabDays Discord server to catch up with the community?! We decided to use Discord to create a virtual venue during the CollabDays Birmingham conference.</p>
          
      <p className="my-2">You can join the CollabDays Discord server with a registered account or temporary account (no registration required). The benefit of a registered account is using the Discord Desktop app and Mobile app. It's up to you, but the app presents a much better experience!</p>
          
      <p className="my-2">In short: After opening it on your web browser, and you will get asked to provide a username, agree to the Terms of Service... and that's it. The in-browser app will open with a pop-up asking for an email and password in order to save everything, but you can just click it away and start doing mostly everything like a regular registered user.</p>
          
      <ol className="list-decimal pl-8 my-4">
        <li className="my-2">Open <a href={discordUrl} title="Open the Discord invite">{discordUrl}</a> in your browser</li>
        <li className="my-2">Choose your username and accept the Terms of Service and Privacy Policy<br/><img className="my-2 mx-auto" src="images/discord/discord1.png" alt="Specify your username" width="50%" loading="lazy" /></li>
        <li className="my-2">Enter your birthday (this is required, why? Check out <a href="https://support.discord.com/hc/nl/articles/360040724612">https://support.discord.com/hc/nl/articles/360040724612</a>)<br /><img className="my-2 mx-auto" src="/images/discord/discord2.png" alt="Specify your birthday" width="50%" loading="lazy" /></li>
        <li className="my-2">Click outside of the "Claim your account" dialog to close the dialog box, and enter the server or claim your account and register it.<br/><img className="my-2 mx-auto" src="/images/discord/discord3.png" alt="Dismiss login creation" width="50%" loading="lazy" /></li>
      </ol>

      <p className="my-2">Link to our CollabDays Birmingham Discord: <a href={discordUrl} title="Open the Discord invite">{discordUrl}</a></p>
    </div>
  );
};