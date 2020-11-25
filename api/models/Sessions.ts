export interface Sessions {
  groupId: number;
  groupName: string;
  sessions: Session[];
}

export interface Session {
  questionAnswers: QuestionAnswer[];
  id: string;
  title: string;
  description: string;
  startsAt: string;
  endsAt: string;
  isServiceSession: boolean;
  isPlenumSession: boolean;
  speakers: SpeakerLink[];
  categories: any[];
  roomId: number;
  room: string;
}

export interface SpeakerLink {
  id: string;
  name: string;
}

export interface QuestionAnswer {
  id: number;
  question: string;
  questionType: string;
  answer?: (null | string)[];
  sort: number;
  answerExtra?: any;
}