import { atom } from "recoil";
import { Sessions } from "../models/Sessions";

export const SessionsStateKey = 'SessionsState';

export const SessionsState = atom<Sessions[]>({
  key: SessionsStateKey,
  default: []
});