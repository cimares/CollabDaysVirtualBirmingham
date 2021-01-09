export interface OnDemandInfo {
    startsAt: string,
    endsAt: string,
    id: string,
    title: string;
    description: string;
    sessionUrl: string;
    speakers: OnDemandSpeakerInfo[];
  }

  export interface OnDemandSpeakerInfo {
    id: string;
    name: string;
  }