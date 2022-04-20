import React from "react";
import "../settings/style/settings.css";
import PropTypes from "prop-types";
import Tabs from "@mui/material/Tabs";
import Tab from "@mui/material/Tab";
import Typography from "@mui/material/Typography";
import Box from "@mui/material/Box";
import PengaturanAkun from "../settings/components/pengaturanAkun";
import PengaturanPajak from "../settings/components/pengaturanPajak";
import PengaturanTransaksi from "../settings/components/pengaturanTransaksi";

function TabPanel(props) {
  const { children, value, index, ...other } = props;

  return (
    <div
      role="tabpanel"
      hidden={value !== index}
      id={`vertical-tabpanel-${index}`}
      aria-labelledby={`vertical-tab-${index}`}
      {...other}
    >
      {value === index && (
        <Box sx={{ p: 3 }}>
          <Typography>{children}</Typography>
        </Box>
      )}
    </div>
  );
}

TabPanel.propTypes = {
  children: PropTypes.node,
  index: PropTypes.number.isRequired,
  value: PropTypes.number.isRequired,
};

function a11yProps(index) {
  return {
    id: `vertical-tab-${index}`,
    "aria-controls": `vertical-tabpanel-${index}`,
  };
}

export default function VerticalTabs() {
  const [value, setValue] = React.useState(0);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  return (
    <Box
      className="settings"
      sx={{ bgcolor: "background.paper", display: "flex" }}
    >
      <Tabs
        orientation="vertical"
        variant="scrollable"
        value={value}
        onChange={handleChange}
        aria-label="Vertical tabs example"
        sx={{ borderRight: 1, borderColor: "divider" }}
      >
        <Tab label="Pengaturan Akun" {...a11yProps(0)} />
        <Tab label="Pengaturan Pajak" {...a11yProps(1)} />
        <Tab label="Pengaturan Transaksi" {...a11yProps(2)} />
      </Tabs>
      <TabPanel value={value} index={0}>
        <PengaturanAkun />
      </TabPanel>
      <TabPanel value={value} index={1}>
        <PengaturanPajak />
      </TabPanel>
      <TabPanel value={value} index={2}>
        <PengaturanTransaksi />
      </TabPanel>
    </Box>
  );
}
