export interface Sessions {
  groupId: number;
  groupName: string;
  sessions: Session[];
}

export interface Session {
  questionAnswers: QuestionAnswer[];
  id: string;
  title: string;
  description?: string;
  startsAt: string;
  endsAt: string;
  isServiceSession: boolean;
  isPlenumSession: boolean;
  speakers: SpeakerInfo[];
  categories: Category[];
  roomId: number;
  room: string;
}

export interface Category {
  id: number;
  name: string;
  categoryItems: CategoryItem[];
  sort: number;
}

export interface CategoryItem {
  id: number;
  name: string;
}

export interface SpeakerInfo {
  id: string;
  name: string;
}

export interface QuestionAnswer {
  id: number;
  question: string;
  questionType: string;
  answer?: string | string;
  sort: number;
  answerExtra?: any;
}