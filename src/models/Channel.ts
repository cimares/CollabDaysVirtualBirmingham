import { Discord } from "./Discord"

export interface Channel {
  id: string;
  title: string;
  sessionUrl: string;
  popOutUrl: string;
  startsAt: string;
  discord: Discord;

  allowFullScreen?: boolean;
}