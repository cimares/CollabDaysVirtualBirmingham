import * as React from 'react';
import { Session as SessionInfo, Sessions } from '../models';
import { Session } from './Session';
import { TimeSlot } from './TimeSlot';

export interface IRoomOverviewProps {
  rooms: Sessions[];
}

export const RoomOverview: React.FunctionComponent<IRoomOverviewProps> = (props: IRoomOverviewProps) => {
  const { rooms } = props;

  const getCells = (session: SessionInfo): JSX.Element[] => {
    const cells: JSX.Element[] = [];

    cells.push(<Session key={session.id} {...session} />);
          
    if (session.isPlenumSession) {
      for (let i = 0; i < rooms.length - 1; i++) {
        cells.push(<Session key={`copy_${session.id}_${i+1}`} {...session} title={`${session.title} - ${session.room}`} className="text-gray-500 hidden md:block" />)
      }
    }

    return cells;
  }

  let gridMarkup = [];
  gridMarkup.push((
    <div key={`room_empty`} className="hidden md:block">&nbsp;</div>
  ));

  for (const room of rooms) {
    gridMarkup.push((
      <div key={`room_${room.groupId}`} className="border-l-2 border-gray-200 hidden md:block"><h2 className="sm:text-2xl text-xl font-medium title-font text-center">{room.groupName}</h2></div>
    ));
  }

  // Create all the sessions
  const timeslots: { startsAt: string, endDate: string, cells: JSX.Element[] }[] = [];
  for (const room of rooms) {
    for (const session of room.sessions) {
      if (session) {
        const timeslot = timeslots.find(t => t.startsAt === session.startsAt);
        if (timeslot) {
          timeslot.cells = [...timeslot.cells, ...getCells(session)]
        } else {
          timeslots.push({
            startsAt: session.startsAt,
            endDate: session.endsAt,
            cells: getCells(session)
          });
        }
      }
    }
  }

  // Create all the timeslots + related sessions
  for (const timeslot of timeslots) {
    gridMarkup = [...gridMarkup, <TimeSlot key={`time_${timeslot.startsAt}`} startsAt={timeslot.startsAt} endsAt={timeslot.endDate} />, ...timeslot.cells];
  }

  return (
    <>
      {
        gridMarkup && (
          <div className="w-full grid grid-cols-1 md:grid-cols-4 gap-4 leading-normal">
            {gridMarkup}
          </div>
        )
      }
    </>
  );
};