import { Route, Routes } from "react-router-dom";
import LoginPage from "./pages/loginpage";
import Dashboard from "./pages/dashboard";
import UserDetails from "./pages/userDetails";

function App() {
  return (
    <Routes>
      <Route path='/login' element={<LoginPage />} />
      <Route path='/dashboard/user' element={<Dashboard />} />
      <Route path='/user/details' element={<UserDetails />} />
    </Routes>
  );
}

export default App;
