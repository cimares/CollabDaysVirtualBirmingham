import * as React from 'react';
import { useRecoilState } from 'recoil';
import { ConfigState } from '../states/ConfigState';

export interface INavigationProps {}

export const Navigation: React.FunctionComponent<INavigationProps> = (props: INavigationProps) => {
  const [ config ] = useRecoilState(ConfigState);
  const [ isOpen, setIsOpen ] = React.useState<boolean>(false);

  const triggerMobileMenu = () => {
    setIsOpen(!isOpen);
  }

  if (!config) {
    return null;
  }

  return (
    <nav className="font-sans bg-white text-center flex justify-between items-center my-2 md:my-4 mx-auto container overflow-hidden">
      <div className="mobile__menu md:hidden w-full pl-4 mb-4 flex flex-row justify-between">
        <a href={config.url || "/"} title={config.title}>
          <img src={config.logo} className="logo" alt={config.title} />
        </a>

        <button onClick={triggerMobileMenu} className="mobile__menu__close mr-2 text-skyblue-600">
          <svg className="h-6 w-6" aria-hidden="true" focusable="false" data-prefix="fas" data-icon="popcorn" role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512"><path fill="currentColor" d="M443.62 138.88a42.72 42.72 0 0 0-33.09-20.79 37.89 37.89 0 0 0-.33-37.43c-9.11-16-28-23.69-45.55-20.17-.33-16.64-11.47-32-29-37.43a43.36 43.36 0 0 0-39.14 6.4 4.25 4.25 0 0 0-.68-1.92C288.73 6.42 264.77-4.78 242.5 2a41.66 41.66 0 0 0-27.32 27.19 43.4 43.4 0 0 0-38.82-6.08c-17.54 5.44-28.66 20.79-29 37.43-17.56-3.54-36.46 4.12-45.57 20.12a37.18 37.18 0 0 0-.33 37.43c-13.46 1.28-26.32 8.64-33.06 20.79-3.92 6.74-4.77 14-4.27 21.12h383.73c.52-7.12-.33-14.37-4.24-21.12zM366.4 192l-28 256h-45.01L315 192H197.05l21.56 256h-45.05l-28-256H64l43.91 292.75A32 32 0 0 0 139.56 512h232.88a32 32 0 0 0 31.65-27.25L448 192z"></path></svg>
        </button>
      </div>

      <ul className={`${isOpen ? "mobile__menu__open" : "hidden"} md:flex text-sm text-gray-700 list-none p-0 flex-col md:flex-row mx-auto`}>
        <li className="block md:hidden text-right">
          <button className={`mobile__menu__close mr-2 mt-2`} onClick={triggerMobileMenu}>
            <svg className="icon" aria-hidden="true" focusable="false" data-prefix="fas" data-icon="times" role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 352 512"><path fill="currentColor" d="M242.72 256l100.07-100.07c12.28-12.28 12.28-32.19 0-44.48l-22.24-22.24c-12.28-12.28-32.19-12.28-44.48 0L176 189.28 75.93 89.21c-12.28-12.28-32.19-12.28-44.48 0L9.21 111.45c-12.28 12.28-12.28 32.19 0 44.48L109.28 256 9.21 356.07c-12.28 12.28-12.28 32.19 0 44.48l22.24 22.24c12.28 12.28 32.2 12.28 44.48 0L176 322.72l100.07 100.07c12.28 12.28 32.2 12.28 44.48 0l22.24-22.24c12.28-12.28 12.28-32.19 0-44.48L242.72 256z"></path></svg>
          </button>
        </li>
        <li><a href="/" className="inline-block py-2 px-3 text-gray-900 hover:text-gray-700 no-underline">Watch</a></li>

        {config.onDemand &&
        <li><a href="ondemand" className="inline-block py-2 px-3 text-gray-900 hover:text-gray-700 no-underline">On-Demand</a></li> 
        }
        <li><a href="https://www.collabdays.org/2021-birmingham/speakers/" target="_blank" rel="noreferrer" className="inline-block py-2 px-3 text-gray-900 hover:text-gray-700 no-underline">Speakers</a></li>
        <li className="px-6 hidden md:block">
          <a href={config.url || "/"} title={config.title}>
            <img src={config.logo} className="logo" alt={config.title} />
          </a>
        </li>
        <li><a href="/sponsors" className="inline-block py-2 px-3 text-gray-900 hover:text-gray-700 no-underline">Sponsors</a></li>
        <li><a href="/code-of-conduct" className="inline-block py-2 px-3 text-gray-900 hover:text-gray-700 no-underline">Code of conduct</a></li>
        <li><a href="/discord" className="inline-block py-2 px-3 text-gray-900 hover:text-gray-700 no-underline">Discord</a></li>
      </ul>
    </nav>
  );
};