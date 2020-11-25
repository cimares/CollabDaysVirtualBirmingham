export interface Speaker {
  id: string;
  firstName: string;
  lastName: string;
  fullName: string;
  bio: string;
  tagLine: string;
  profilePicture: string;
  sessions: SessionInfo[];
  isTopSpeaker: boolean;
  links: Link[];
  questionAnswers: any[];
  categories: any[];
}

export interface Link {
  title: string;
  url: string;
  linkType: string;
}

export interface SessionInfo {
  id: number;
  name: string;
}