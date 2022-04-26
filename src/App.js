import Login from "./components/Auth/LoginForm";
import Register from "./components/Auth/RegisterForm";
// import Topbar from "./components/Topbar";
import Sidebar from "./components/Sidebar";
import Dashboard from "./layouts/dashboard";
import Invoice from "./layouts/invoice";
import InvoiceData from "./layouts/InvoiceData";
import InvoiceAdd from "./layouts/invoiceAdd";
import Settings from "./layouts/settings";
import PersistLogin from "./components/Auth/persistLogin";
import "./App.css";
import {
  // Navigate,
  BrowserRouter as Router,
  Routes,
  Route,
} from "react-router-dom";
// import { useEffect } from "react";
import { Outlet } from "react-router-dom";
import RequireAuth from "./components/Auth/RequireAuth";
// import { getToken } from "./api/getToken";
// import { withRouter } from "react-router-dom";

const SidebarLayout = () => (
  <>
    <Sidebar />
    <Outlet />
  </>
);

function App() {
  // useEffect(() => {
  //   const loggedInUser = localStorage.getItem("user");
  //   if (loggedInUser) {
  //     const foundUser = JSON.parse(loggedInUser);
  //     setUser(foundUser);
  //   }
  // }, []);
  return (
    <Router>
      {/* <Topbar /> */}
      <Routes>
        <Route exact path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
      </Routes>
      <div className="container">
        <Routes>
          <Route element={<PersistLogin />}>
            <Route element={<RequireAuth />}>
              <Route element={<SidebarLayout />}>
                <Route exact path="/dashboard" element={<Dashboard />} />
                <Route exact path="/invoice" element={<Invoice />} />
                <Route
                  exact
                  path="/invoice/:invoiceId"
                  element={<InvoiceData />}
                />
                <Route exact path="/invoice/create" element={<InvoiceAdd />} />
                <Route exact path="/settings" element={<Settings />} />
              </Route>
            </Route>
          </Route>
        </Routes>
      </div>
    </Router>
  );
}

export default App;
