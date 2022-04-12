import Login from "./components/Auth/LoginForm";
// import Topbar from "./components/Topbar";
import Sidebar from "./components/Sidebar";
import Dashboard from "./layouts/dashboard";
import Invoice from "./layouts/invoice";
import InvoiceData from "./layouts/InvoiceData";
import InvoiceAdd from "./layouts/invoiceAdd";
import Settings from "./layouts/settings";
import "./App.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { Outlet } from "react-router-dom";
// import { withRouter } from "react-router-dom";

const SidebarLayout = () => (
  <>
    <Sidebar />
    <Outlet />
  </>
);

function App() {
  return (
    <Router>
      {/* <Topbar /> */}
      <Routes>
        <Route path="/login" element={<Login />} />
      </Routes>
      <div className="container">
        <Routes>
          <Route element={<SidebarLayout />}>
            <Route exact path="/dashboard" element={<Dashboard />} />
            <Route exact path="/invoice" element={<Invoice />} />
            <Route exact path="/invoice/:invoiceId" element={<InvoiceData />} />
            <Route exact path="/invoice/create" element={<InvoiceAdd />} />
            <Route exact path="/settings" element={<Settings />} />
          </Route>
        </Routes>
      </div>
    </Router>
  );
}

export default App;
