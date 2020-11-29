import * as React from 'react';
import { useRecoilState } from 'recoil';
import { ModalState } from '../states/ModalState';

export interface IModalDialogProps {
  title?: string;
  description?: string;
  children?: any;

  // dismiss: () => void;
}

export const ModalDialog: React.FunctionComponent<IModalDialogProps> = (props: IModalDialogProps) => {
  const [ ctx, setModal ] = useRecoilState(ModalState);

  const dismiss = () => {
    setModal({
      isOpen: false,
      title: "",
      description: "",
      children: null
    });
  }

  return (
    <div className={`modaldialog ${ctx.isOpen ? "opacity-100 visible" : "opacity-0 invisible"} transition-opacity duration-300 pointer-events-none fixed top-0 left-0 bottom-0 right-0 hidden md:flex items-center justify-center`}>
      <div onClick={dismiss} className={`modaldialog__overlay pointer-events-auto absolute w-full h-full bg-black opacity-25 top-0 left-0 cursor-pointer`}></div>
      <div onClick={(e) => e.preventDefault} className="modaldialog__container pointer-events-auto absolute md:w-1/2 bg-white rounded-md shadow-lg flex items-center justify-center text-lg overflow-auto">
        <div className={`modaldialog__container__content p-4`}>
          <button className={`modaldialog__container__close`} onClick={dismiss}>
            <svg className="icon" aria-hidden="true" focusable="false" data-prefix="fas" data-icon="times" role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 352 512"><path fill="currentColor" d="M242.72 256l100.07-100.07c12.28-12.28 12.28-32.19 0-44.48l-22.24-22.24c-12.28-12.28-32.19-12.28-44.48 0L176 189.28 75.93 89.21c-12.28-12.28-32.19-12.28-44.48 0L9.21 111.45c-12.28 12.28-12.28 32.19 0 44.48L109.28 256 9.21 356.07c-12.28 12.28-12.28 32.19 0 44.48l22.24 22.24c12.28 12.28 32.2 12.28 44.48 0L176 322.72l100.07 100.07c12.28 12.28 32.2 12.28 44.48 0l22.24-22.24c12.28-12.28 12.28-32.19 0-44.48L242.72 256z"></path></svg>
          </button>
          { ctx.title && <p className="text-2xl font-bold mb-4 mr-5">{ctx.title}</p> }
          { ctx.description && <p className="mb-2">{ctx.description}</p> }

          { ctx.children }
        </div>
      </div>
    </div>
  );
};