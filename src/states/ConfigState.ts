import { EventConfig } from '../models/EventConfig';
import { atom } from "recoil";

export const ConfigStateKey = 'ConfigState';

export const ConfigState = atom<EventConfig | null>({
  key: ConfigStateKey,
  default: null
});