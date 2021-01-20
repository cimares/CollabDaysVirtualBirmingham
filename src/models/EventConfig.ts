import { Alert } from "./Alert";
import { Channel } from "./Channel";
import { Sessionize } from "./Sessionize"
import { Sponsor } from "./Sponsor";
import { OnDemandInfo} from "./OnDemandInfo";

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
  popOutVideo: boolean;
  
  channels: Channel[];

  sponsors: Sponsor[];
  
  sessionize: Sessionize;

  onDemand: OnDemandInfo[];

  alert: Alert;
}

