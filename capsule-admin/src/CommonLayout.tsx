import { Route, Routes, Link } from "react-router-dom";
import { useRecoilState } from "recoil";
import { isLoginStateStore } from "./store/loginStore";
import LoginMain from "./pages/login/LoginMain";
import DashBoard from "./pages/dash_board/DashBoard";
import ImageMain from "./pages/image/ImageMain";

function CommonLayout() {
  const [isLoginState, setIsLoginState] = useRecoilState(isLoginStateStore);
  const adminToken = localStorage.getItem('adminToken');
  if(adminToken) {
    setIsLoginState(true);
  }
  
  return (
    isLoginState ? (
        <div>
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
