import * as React from 'react';
import { useRecoilState } from 'recoil';
import { SessionsState } from '../states/SessionsState';
import { RoomOverview } from './RoomOverview';

export interface IScheduleProps {}

export const Schedule: React.FunctionComponent<IScheduleProps> = (props: IScheduleProps) => {
  const [ sessions ] = useRecoilState(SessionsState);

  return (
    sessions && (
      <section className="container items-center m-auto mt-8" role="list">
        <div className="container px-5 pb-8 mx-auto">
          <div className="flex flex-col text-center w-full">
            <h2 id="schedule" className="text-sm text-cadetblue-700 tracking-widest font-medium title-font mb-1 p-1 bg-gray-200">Schedule</h2>
            <h1 className="sm:text-3xl text-2xl font-medium title-font mb-4 text-cadetblue-900">Our lineup</h1>
          </div>
        </div>
        <div className="flex flex-wrap">
          <RoomOverview rooms={sessions} />
        </div>
      </section>
    )
  );
};