import { Route, Routes } from "react-router-dom";
import ErrorPage from "./router/error-page";
import Login from "./pages/Login";
import Dashboard from "./pages/Dashboard";
import ContainerDrawer from "./pages/ContainerDrawer";
import OptionsAdmin from "./pages/Options/OptionsAdmin";
import OptionsUser from "./pages/Options/OptionsUser";

function App() {

  return (
    <Routes>
      <Route path="/login"
        element={<Login />}
        errorElement={<ErrorPage />}>
      </Route>

      <Route path="/"
        element={<ContainerDrawer />}
        errorElement={<ErrorPage />}
      >
        <Route path="/" element={<Dashboard />} />
        <Route path="/optionsAdmin" element={<OptionsAdmin />} />
        <Route path="/optionsUser" element={<OptionsUser />} />
      </Route>
    </Routes >
  )
}

export default App;