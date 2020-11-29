import * as React from 'react';
import { SponsorsOverview } from '../components/SponsorsOverview';

export interface ISponsorsProps {}

export const Sponsors: React.FunctionComponent<ISponsorsProps> = (props: ISponsorsProps) => {
  return (
    <>
      <SponsorsOverview />
    </>
  );
};