import * as React from 'react';
import { useRecoilState } from 'recoil';
import { ConfigState } from '../states/ConfigState';

export interface IFooterProps {}

export const Footer: React.FunctionComponent<IFooterProps> = (props: IFooterProps) => {
  const [ config ] = useRecoilState(ConfigState);

  return (
    <footer className="flex border-t-2 border-gray-200 mt-8 py-8">
      <div className="container mx-auto">
        <a href="/" className="block mb-4">
          {
            config && config.logo ? (
              <img src={config.logo} className="w-348 mx-auto" alt={config.title} />
            ) : ""
          }
        </a>
        <div className="w-1/2 flex text-sm mx-auto">
          <p>{config && config.description}</p>
        </div>
      </div>
    </footer>
  );
};