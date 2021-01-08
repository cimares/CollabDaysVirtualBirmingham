import * as React from 'react';
import { useRecoilState } from 'recoil';
import { Speaker } from '../models/Speaker';
import { ModalState } from '../states/ModalState';

export interface ISpeakerDetailsProps {
  speaker: Speaker;
}

export const SpeakerDetails: React.FunctionComponent<ISpeakerDetailsProps> = (props: ISpeakerDetailsProps) => {
  const [ , setModal ] = useRecoilState(ModalState);
  const { speaker } = props;
  
  const showSpeakerDialog = () => {
    setModal({
      isOpen: true,
      title: "",
      description: "",
      children: (
        <div className="speakers__overview__details__dialog min-h-4 p-4 text-left">
          <img className="w-1/3 mx-auto mb-4 rounded-full" src={speaker.profilePicture} alt={speaker.fullName} loading="lazy" />
          <h3 className="text-xl font-heading mb-2">{speaker.fullName}</h3>
          <p className="text-gray-700 mb-4">{speaker.tagLine}</p>
          <p className="text-gray-800 text-base mb-4">{speaker.bio}</p>
          {
            speaker.links && speaker.links.map(link => (
              <span className="text-base">
                {
                  link.linkType === "Twitter" ? (
                    <a href={link.url} title={`Twitter: ${speaker.fullName}`} target="_blank" rel="noopener noreferrer">
                      <svg className="icon" aria-hidden="true" focusable="false" data-prefix="fab" data-icon="twitter" role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512"><path fill="currentColor" d="M459.37 151.716c.325 4.548.325 9.097.325 13.645 0 138.72-105.583 298.558-298.558 298.558-59.452 0-114.68-17.219-161.137-47.106 8.447.974 16.568 1.299 25.34 1.299 49.055 0 94.213-16.568 130.274-44.832-46.132-.975-84.792-31.188-98.112-72.772 6.498.974 12.995 1.624 19.818 1.624 9.421 0 18.843-1.3 27.614-3.573-48.081-9.747-84.143-51.98-84.143-102.985v-1.299c13.969 7.797 30.214 12.67 47.431 13.319-28.264-18.843-46.781-51.005-46.781-87.391 0-19.492 5.197-37.36 14.294-52.954 51.655 63.675 129.3 105.258 216.365 109.807-1.624-7.797-2.599-15.918-2.599-24.04 0-57.828 46.782-104.934 104.934-104.934 30.213 0 57.502 12.67 76.67 33.137 23.715-4.548 46.456-13.32 66.599-25.34-7.798 24.366-24.366 44.833-46.132 57.827 21.117-2.273 41.584-8.122 60.426-16.243-14.292 20.791-32.161 39.308-52.628 54.253z"></path></svg>

                      <span className="ml-2">Twitter</span>
                    </a>
                  ) : (
                    <a href={link.url} title={`${link.linkType}: ${speaker.fullName}`} target="_blank" rel="noopener noreferrer">
                      {link.linkType}
                    </a>
                  )
                }
              </span>
            ))
          }
        </div>
      )
    });
  };
  
  return (
    <button onClick={showSpeakerDialog} className="speakers__overview__details rounded-md w-full md:w-1/5 p-8 text-center">
      <img className="w-full mx-auto mb-4 rounded-full border-4 border-white" src={speaker.profilePicture} alt={speaker.fullName} />
      <h3 className="text-xl font-heading mb-2">{speaker.fullName}</h3>
      <span className="text-gray-700">{speaker.tagLine}</span>
    </button>
  );
};