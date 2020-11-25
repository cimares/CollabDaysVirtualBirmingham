import { atom } from "recoil";
import { Speaker } from "../models/Speaker";

export const SpeakersStateKey = 'SpeakerState';

export const SpeakersState = atom<Speaker[]>({
  key: SpeakersStateKey,
  default: []
});