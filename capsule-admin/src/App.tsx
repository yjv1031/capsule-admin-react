import CommonLayout from "./CommonLayout";
import LoginMain from "./pages/login/LoginMain";
function App() {
  const adminToken = sessionStorage.getItem('adminToken');

  if(adminToken) {
    return (
      <CommonLayout></CommonLayout>
    );
  } else {
    return (
      <LoginMain></LoginMain>
    );
  }
}

export default App;
