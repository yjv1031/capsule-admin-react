import { atom } from "recoil"; 

export const isLoadingStateStore = atom<boolean>({
  key: 'isLoadingStateStore',
  default: false
});