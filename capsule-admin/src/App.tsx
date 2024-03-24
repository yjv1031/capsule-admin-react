import CommonLayout from "./CommonLayout";
import LoginMain from "./pages/login/LoginMain";
import { RecoilRoot } from "recoil";
function App() {
  return (
    <RecoilRoot>
      <CommonLayout></CommonLayout>
    </RecoilRoot>
  );
}

export default App;
