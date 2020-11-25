export interface Sessionize {
  sessions: string;
  speakers: string;
  fields: Fields;
}

export interface Fields {
  code: Code;
  feedback: Feedback;
  discord: Feedback;
}

export interface Feedback {
  id: string;
}

export interface Code {
  id: string;
  prefix: string;
}