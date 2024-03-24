import React, { useState, useEffect, ChangeEvent } from 'react';
import { useRecoilState, useSetRecoilState, useResetRecoilState } from 'recoil';
import { isLoadingStateStore } from '../../store/commonStore';
import { isLoginStateStore, userLoginStateStore } from '../../store/loginStore';
import commonAxios from '../../module/commonAxios';

function LoginMain() {
  const [userLoginState, setUserLoginState] = useRecoilState(userLoginStateStore);
  const resetUserLoginState = useResetRecoilState(userLoginStateStore);
  const setIsLoadingState = useSetRecoilState(isLoadingStateStore);
  const setIsLoginState = useSetRecoilState(isLoginStateStore);

  const loginIdChangeHandler = (e: ChangeEvent<HTMLInputElement>) => {
    setUserLoginState({
      ...userLoginState,
      loginId: e.target.value
    });
  };

  const loginPwdChangeHandler = (e: ChangeEvent<HTMLInputElement>) => {
    setUserLoginState({
      ...userLoginState,
      loginPwd: e.target.value
    });
  };

  const tryLogin = async() => {
    const loginId: string = userLoginState.loginId;
    const loginPwd: string = userLoginState.loginPwd;
    if(!loginId) {
      alert('아이디를 입력하십시오');
      return;
    }

    if(!loginPwd) {
      alert('패스워드를 입력하십시오');
      return;
    }

    const param = {
      id: loginId,
      password: loginPwd
    };

    const data = await commonAxios('post', '/public/token/login', param, setIsLoadingState, setIsLoginState);
    if(data) {
      alert('로그인을 성공하였습니다');
      localStorage.setItem('adminToken', JSON.stringify(data));
      setIsLoginState(true);
      resetUserLoginState();
    }
  };

  return (
    <main className="login_main">
      <div className="box">
        <h1>로그인</h1>
        <section className="login_section">
          <label htmlFor="adminLoginInput" className="login_label">아이디</label>
          <input type="text" id="adminLoginInput" className="login_input" value={userLoginState.loginId} onChange={loginIdChangeHandler}/>
          <label htmlFor="adminLoginPwd" className="login_label">패스워드</label>
          <input type="password" id="adminLoginPwd" className="login_input" value={userLoginState.loginPwd} onChange={loginPwdChangeHandler}/>
        </section>
        <section className="login_section login_btn_area">
          <button className="login_access_btn" onClick={tryLogin}>로그인</button>
        </section>
      </div>
    </main>
  );
}

export default LoginMain;
