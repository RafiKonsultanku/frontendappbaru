import React from 'react';
import InvoiceList from '../invoice/components/invoiceList';
import '../invoice/style/invoice.css';
import Box from '@mui/material/Box';
import Tab from '@mui/material/Tab';
import TabContext from '@mui/lab/TabContext';
import TabList from '@mui/lab/TabList';
import TabPanel from '@mui/lab/TabPanel';
import { Link } from "react-router-dom";

export default function Invoice() {
  const [value, setValue] = React.useState('1');

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  return (
  <Box className='invoice' sx={{ width: '100%', typography: 'body1' }}>
    <div className="invoiceIntroduction">
      <h2>Invoice</h2>
      <Link to="/invoice/create">
        <button className='invoiceAddButton'>Tambah Invoice</button>
      </Link>  
    </div>
  <TabContext value={value}>
    <Box sx={{ borderBottom: 1, borderColor: 'divider' }}>
      <TabList onChange={handleChange} aria-label="lab API tabs example">
        <Tab label="PPh 21" value="1" />
        <Tab label="PPh 23" value="2" />
        <Tab label="Item Three" value="3" />
      </TabList>
    </Box>
    <TabPanel value="1">
      <InvoiceList />
    </TabPanel>
    <TabPanel value="2">Item Two</TabPanel>
    <TabPanel value="3">Item Three</TabPanel>
  </TabContext>
  </Box>
  )
}
