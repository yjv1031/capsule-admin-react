import { Route, Routes, Link } from "react-router-dom";
import { commonStateStore } from './store/commonStore';
import LoginMain from "./pages/login/LoginMain";
import DashBoard from "./pages/dash_board/DashBoard";
import ImageMain from "./pages/image/ImageMain";
import { useEffect, useState } from "react";

function CommonLayout() {
  const [isLogin, setIsLogin] = useState<boolean>(false);
  useEffect(() => {
    const adminToken = localStorage.getItem('adminToken');

    if(adminToken) {
      setIsLogin(true);
    } else {
      setIsLogin(false);
    }
  }, []);

  const tryLogout = () => {
    localStorage.removeItem('adminToken');
    window.location.href = `${process.env.REACT_APP_CONTEXT_PATH}/`;
    //상태 갱신용 리로드
    window.location.reload();
  }
  
  return (
    isLogin ? (
      <div>
        <button onClick={tryLogout}>로그아웃</button>
        <ul>
          <li>
            <Link to={`${process.env.REACT_APP_CONTEXT_PATH}/`}>Dash Board</Link>
          </li>
          <li>
            <Link to={`${process.env.REACT_APP_CONTEXT_PATH}/image`}>Image</Link>
          </li>
        </ul>
        <Routes>
          <Route path={`${process.env.REACT_APP_CONTEXT_PATH}/`} element={<DashBoard />} />
          <Route path={`${process.env.REACT_APP_CONTEXT_PATH}/image`} element={<ImageMain />} />
        </Routes>
      </div>
    ) : (
      <LoginMain></LoginMain>
    )
  );
}

export default CommonLayout;
