import * as React from 'react';
import { differenceInMinutes, format } from 'date-fns';
import { useRecoilState } from 'recoil';
import { ConfigState } from '../states/ConfigState';

export interface ITimeSlotProps {
  startsAt: string;
  endsAt: string;
}

export const TimeSlot: React.FunctionComponent<ITimeSlotProps> = (props: ITimeSlotProps) => {
  const [ config ] = useRecoilState(ConfigState);
    
  const { startsAt, endsAt } = props;
  const startDate = format(new Date(startsAt), config && config.dateFormat ? config.dateFormat : "HH:mm");
  const endDate = format(new Date(endsAt), config && config.dateFormat ? config.dateFormat : "HH:mm");
  const diff = differenceInMinutes(new Date(endsAt), new Date(startsAt));

  return (
    <div className="text-center px-4 py-4 md:py-8 text-gray-600 flex justify-center align-center flex-col">
      <p className="mb-2">{startDate} - {endDate}</p>
      <p>({diff} min.)</p>
    </div>
  );
};