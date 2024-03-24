import React, { useState, useEffect, ChangeEvent } from 'react';

function LoginMain() {
  const [loginId, setLoginId] = useState('');
  const [loginPwd, setLoginPwd] = useState('');

  const tryLogin = () => {
    
  };

  return (
    <main className="login_main">
      <div className="box">
        <h1>로그인</h1>
        <section className="login_section">
          <label htmlFor="adminLoginInput" className="login_label">아이디</label>
          <input type="text" id="adminLoginInput" className="login_input" value={loginId} onChange={(e: ChangeEvent<HTMLInputElement>) => setLoginId(e.target.value)}/>
          <label htmlFor="adminLoginPwd" className="login_label">패스워드</label>
          <input type="password" id="adminLoginPwd" className="login_input" value={loginPwd} onChange={(e: ChangeEvent<HTMLInputElement>) => setLoginPwd(e.target.value)}/>
        </section>
        <section className="login_section login_btn_area">
          <button className="login_access_btn" onClick={tryLogin}>로그인</button>
        </section>
      </div>
    </main>
  );
}

export default LoginMain;
