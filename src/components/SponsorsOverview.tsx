import * as React from 'react';
import { useRecoilState } from 'recoil';
import { ConfigState } from '../states/ConfigState';

export interface ISponsorsOverviewProps {}

export const SponsorsOverview: React.FunctionComponent<ISponsorsOverviewProps> = (props: ISponsorsOverviewProps) => {
  const [ config ] = useRecoilState(ConfigState);
  
  if (!config || !config.sponsors || config.sponsors.length <= 0) {
    return null;
  }

  let sortedSponsors = [...config.sponsors].sort((a, b) => {
    if(a.level < b.level) { return -1; }
    if(a.level > b.level) { return 1; }
    return 0;
  }).map(s => ({ ...s, level: s.level.split('.').pop()}));

  let crntHeader: any = {};
  for (const sponsor of sortedSponsors) {
    if (crntHeader[sponsor.level as string] === undefined) {
      crntHeader[sponsor.level as string] = [];
    }

    crntHeader[sponsor.level as string].push(
      <div key={`sponsor-${sponsor.title.replace(/ /g, '_')}`} className="flex justify-center items-center">
        <a key={sponsor.title.replace(/ /g, '_')} className="sponsor" href={sponsor.url} target="_blank" title={sponsor.title} rel="noopener noreferrer">
          <img className="w-1/3 mx-auto" src={sponsor.logo} alt={sponsor.title} />
        </a>
      </div>
    );
  }

  return (
    <section className="container mx-auto leading-none mt-8 mb-16" role="list">
      {
        Object.keys(crntHeader).map(level => (
          <>
            <h2 key={`title-${level}`} className="text-display text-3xl text-center my-8">{level}</h2>
            <div key={`content-${level}`} className="grid grid-cols-3 gap-4">
              {
                crntHeader[level] && crntHeader[level]
              }
            </div>
          </>
        ))
      }
    </section>
  );
};