import { create } from "zustand";
import commonAxios from "../module/commonAxios";

export interface commonStateInterface {
  isLoading: boolean,
  setIsLoading: (param :boolean) => void,
  commonAjaxWrapper: (method: string, url: string, data?: any) => any
}


export const commonStateStore =  create<commonStateInterface>((set) => ({
  isLoading: false,
  setIsLoading:(param: boolean) => {
    set(() => ({isLoading: param}));
  },
  async commonAjaxWrapper(method, url, data) {
    set(() => ({isLoading: true}));
    const res = await commonAxios(method, url, data);
    set(() => ({isLoading: false}));
    return res;
  },
}));