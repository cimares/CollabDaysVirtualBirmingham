import { atom } from "recoil";

export const ModalStateKey = 'ModalState';

export interface ModalDialogState {
  isOpen?: boolean;
  title?: string;
  description?: string;
  children?: JSX.Element | null;
}

export const ModalState = atom<ModalDialogState>({
  key: ModalStateKey,
  default: {
    isOpen: false,
    title: "",
    description: "",
    children: null
  }
});