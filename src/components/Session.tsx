import * as React from 'react';
import { useRecoilState } from 'recoil';
import { Session as SessionInfo } from '../models';
import { ModalState } from '../states/ModalState';
import { Discord } from './Discord';
import { Feedback } from './Feedback';
import { Room } from './Room';
import { SessionCategory } from './SessionCategory';
import { SessionCode } from './SessionCode';
import { Speakers } from './Speakers';

export interface ISessionProps extends SessionInfo {
  className?: string;
}

export const Session: React.FunctionComponent<ISessionProps> = (props: ISessionProps) => {
  const [ , setModal ] = useRecoilState(ModalState);
  const { id, questionAnswers, title, description, speakers, endsAt, className, room } = props;

  const openDialog = () => {
    setModal({
      isOpen: true,
      title,
      description,
      children: (
        <>
          <SessionCategory session={props} />
          <Speakers speakers={speakers} />
          <Discord questions={questionAnswers || null} />
          <Room name={room} inDialog={true} />
          <Feedback questions={questionAnswers || null} endTime={endsAt} />
        </>
      )
    });
  };

  return (
    <div key={id} className={`grid__session border-l-2 border-gray-200 flex flex-col justify-between px-4 py-4 md:py-8 ${className ? className : ""}`} >
          
      <h3 className="grid__session__title font-medium title-font mb-4">
        <button onClick={openDialog} className="text-left"><SessionCode questions={questionAnswers || null} />{title}</button>
      </h3>
      
      <div>
        <SessionCategory session={props} />

        <Room name={room} />
        
        <Speakers speakers={speakers} />

        <Discord questions={questionAnswers || null} />

        <Feedback questions={questionAnswers || null} endTime={endsAt} />
      </div>
    </div>
  );
};