import { differenceInMinutes } from 'date-fns/esm';
import * as React from 'react';
import { useRecoilState } from 'recoil';
import { QuestionAnswer } from '../models';
import { ConfigState } from '../states/ConfigState';

export interface IFeedbackProps {
  endTime: string;
  questions: QuestionAnswer[];
}

export const Feedback: React.FunctionComponent<IFeedbackProps> = (props: IFeedbackProps) => {
  const [ config ] = useRecoilState(ConfigState);
  const { endTime, questions } = props;
  const [ difference, setDifference ] = React.useState<number | null>(null);

  const validateDifference = () => {
    const now = new Date();
    const ends = new Date(endTime);
    setDifference(differenceInMinutes(now, ends));
  }

  if (config) {
    setTimeout(() => {
      validateDifference();
    }, ((config.refreshData || 1) * 60 * 1000));
  }

  React.useEffect(() => {
    validateDifference();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, ['']);
  
  if (questions && config && config.sessionize && config.sessionize.fields && difference !== null && difference > -15) {
    const fields = config.sessionize.fields;
    if (fields.feedback) {
      const answers = questions.filter((q: QuestionAnswer) => q.question === fields.feedback.id);
      if (answers && answers.length > 0 && answers[0].answer) {
        const feedbackUrl: string = answers[0].answer;
        return (
          <a href={feedbackUrl} title="Provide feedback for the session" target="_blank" className="grid__session__feedback mr-2 mt-2" rel="noopener noreferrer">
            <svg className="icon text-gray-800 mr-2" aria-hidden="true" focusable="false" data-prefix="far" data-icon="heart" role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512"><path fill="currentColor" d="M458.4 64.3C400.6 15.7 311.3 23 256 79.3 200.7 23 111.4 15.6 53.6 64.3-21.6 127.6-10.6 230.8 43 285.5l175.4 178.7c10 10.2 23.4 15.9 37.6 15.9 14.3 0 27.6-5.6 37.6-15.8L469 285.6c53.5-54.7 64.7-157.9-10.6-221.3zm-23.6 187.5L259.4 430.5c-2.4 2.4-4.4 2.4-6.8 0L77.2 251.8c-36.5-37.2-43.9-107.6 7.3-150.7 38.9-32.7 98.9-27.8 136.5 10.5l35 35.7 35-35.7c37.8-38.5 97.8-43.2 136.5-10.6 51.1 43.1 43.5 113.9 7.3 150.8z"></path></svg>Provide feedback
          </a>
        );
      }
    }
  }

  return null;
};