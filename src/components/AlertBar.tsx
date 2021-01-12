import * as React from 'react';
import { useRecoilState } from 'recoil';
import { ConfigState } from '../states/ConfigState';

export interface IAlertBarProps {}

export const AlertBar: React.FunctionComponent<IAlertBarProps> = (props: IAlertBarProps) => {
  const [ config ] = useRecoilState(ConfigState);
  
  if (config && config.alert.show) {
    return (
      <section className="bg-gray-100 text-gray-900 py-4 px-4" role="alert">
        <div className="container items-center flex m-auto leading-none">
          <span className={`flex rounded-full uppercase px-2 py-1 text-xs font-bold mr-3 ${ config.alert.type.toLowerCase() === "important" ? "bg-red-700 text-white" : "bg-gray-300"} `}>{config.alert.type}</span>
          <span className="mr-2 text-left">{config.alert.message}</span>
          {
            config.alert.link && (
              <a className="opacity-75 h-4 w-4" href={config.alert.link} target={`${config.alert.link.toLowerCase().indexOf('https') === -1 ? "_self" : "_blank"}`}>
                <svg className="icon" width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M10.5858 6.34317L12 4.92896L19.0711 12L12 19.0711L10.5858 17.6569L16.2427 12L10.5858 6.34317Z" fill="currentColor" />
                </svg>
              </a>
            )
          }
        </div>
      </section>
    )
  }

  return null;
};