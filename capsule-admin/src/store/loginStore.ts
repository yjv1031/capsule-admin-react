import { atom } from "recoil"; 

export type TypeUserLoginState = {
  loginId: string;
  loginPwd: string;
};

export const userLoginStateStore = atom<TypeUserLoginState>({
  key: 'userLoginStateStore',
  default: {
    loginId: '',
    loginPwd: ''
  }
});

export const isLoginStateStore = atom<boolean>({
  key: 'isLoginStateStore',
  default: false
});