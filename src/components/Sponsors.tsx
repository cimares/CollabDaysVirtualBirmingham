import * as React from 'react';
import { useRecoilState } from 'recoil';
import { ConfigState } from '../states/ConfigState';

export interface ISponsorsProps {}

export const Sponsors: React.FunctionComponent<ISponsorsProps> = (props: ISponsorsProps) => {
  const [ config ] = useRecoilState(ConfigState);

  if (!config || !config.sponsors || config.sponsors.length <= 0) {
    return null;
  }

  return (
    <section className="container flex flex-col md:flex-row items-center m-auto leading-none mt-8" role="list">
      {
        config.sponsors && config.sponsors.filter(s => s.frontPage).map(sponsor => (
          <a key={sponsor.title.replace(/ /g, '_')} className="sponsor block  md:w-1/3 mb-2 md:mb-0" href={sponsor.url} target="_blank" title={sponsor.title} rel="noopener noreferrer">
            <img className="w-1/3 mx-auto" src={sponsor.logo} alt={sponsor.title} />
          </a>
        ))
      }
    </section>
  );
};