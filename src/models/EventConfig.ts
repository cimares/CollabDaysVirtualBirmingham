import { Alert } from "./Alert";
import { Channel } from "./Channel";
import { Sessionize } from "./Sessionize"
import { Sponsor } from "./Sponsor";

export interface EventConfig {
  title: string;
  description: string;
  url: string;
  logo: string;
  dateFormat: string;
  discordInvite: string;
  discordServerId: string;
  discordChannelId?: string;
  googleAnalytics: string;
  refreshData: number;
  
  channels: Channel[];

  sponsors: Sponsor[];
  
  sessionize: Sessionize;

  alert?: Alert;
}

