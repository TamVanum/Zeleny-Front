import { Route, Routes } from "react-router-dom";
import ErrorPage from "./router/error-page";
import Login from "./pages/Login";
import Dashboard from "./pages/Dashboard";
import OptionsAdmin from "./pages/Options/OptionsAdmin";
import OptionsUser from "./pages/Options/OptionsUser";
import ActivateUser from "./pages/ActivateUser";
import PassRecovery from "./pages/PassRecovery";
import ResponsiveDrawer from "./pages/ResponsiveDrawer";
import AllUserRequest from "./pages/AllUserRequest";
import ActivateUserForm from "./pages/ActivateUserForm";

function App() {
  return (
    <Routes>

      <Route
        path="/activate-user/:userId"
        element={<ActivateUser />}
        errorElement={<ErrorPage />}
      ></Route>

      <Route
        path="/pass-recovery/:userId"
        element={<PassRecovery />}
        errorElement={<ErrorPage />}
      ></Route>

      <Route
        path="/login"
        element={<Login />}
        errorElement={<ErrorPage />}
      ></Route>

      <Route
        path="/"
        element={<ResponsiveDrawer />}
        errorElement={<ErrorPage />}
      >
        <Route path="/" element={<Dashboard />} />
        <Route path="/optionsAdmin" element={<OptionsAdmin />} />
        <Route path="/optionsUser" element={<OptionsUser />} />
        <Route path="/allUserRequest" element={<AllUserRequest/>} />
        <Route path="/activateUserForm/:userId" element={<ActivateUserForm/>} />
      </Route>
    </Routes>
  );
}

export default App;
