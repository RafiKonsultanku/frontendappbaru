import Topbar from './components/Topbar';
import Sidebar from './components/Sidebar';
import Dashboard  from './layouts/dashboard';
import Invoice  from './layouts/invoice';
import InvoiceData from './layouts/InvoiceData';
import InvoiceAdd from './layouts/invoiceAdd';
import Settings  from './layouts/settings';
import './App.css';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

function App() {
  return (
    <Router>
      <Topbar />
      <div className='container'>
        <Sidebar />
        <Routes>
          <Route exact path="/" element={<Dashboard />} />
          <Route exact path="/invoice" element={<Invoice />} />
          <Route exact path="/invoice/:invoiceId" element={<InvoiceData />} />
          <Route exact path="/invoice/create" element={<InvoiceAdd />} />
          <Route exact path="/settings" element={<Settings />} />
        </Routes>
        
      </div>
    </Router>
  );
}

export default App;
