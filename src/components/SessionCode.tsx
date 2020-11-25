import * as React from 'react';
import { useRecoilState } from 'recoil';
import { QuestionAnswer } from '../models/Sessions';
import { ConfigState } from '../states/ConfigState';

export interface ISessionCodeProps {
  questions: QuestionAnswer[];
}

export const SessionCode: React.FunctionComponent<ISessionCodeProps> = (props: ISessionCodeProps) => {
  const [ config ] = useRecoilState(ConfigState);
  const { questions } = props;
  
  if (questions && config && config.sessionize && config.sessionize.fields) {
    const fields = config.sessionize.fields;
    if (fields.code) {
      const answers = questions.filter((q: QuestionAnswer) => q.question === fields.code.id);
      if (answers && answers.length > 0) {
        return (
          <span className="grid__session__title__code mr-2">{`${fields.code.prefix}${answers[0].answer}:`}</span>
        );
      }
    }
  }

  return null;
};