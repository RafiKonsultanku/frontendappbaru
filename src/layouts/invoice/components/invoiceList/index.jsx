import './style/invoicelist.css';
import {DataGrid} from '@mui/x-data-grid';
import { Link } from 'react-router-dom';
import { invoiceData } from '../../../../dummyData';
import { useState } from 'react';

export default function Index() {
  const [data] = useState(invoiceData);
const columns = [
    { field: 'tglnofaktur', headerName: 'Tanggal-Nomor Faktur', width: 250, type: Text },
    { field: 'penjual', headerName: 'Penjual', width: 130 },
    { field: 'nilaitransaksi', headerName: 'Nilai Transaksi - Rp', width: 180 },
    { field: 'status', headerName: 'Status', width: 130 },
    { field: 'tipepajak', headerName: 'Tipe Pajak', width: 130 },
    { 
      field: 'action', 
      headerName: '', 
      width: 150,
      renderCell: (params) => {
        return (
          <>
          <Link to={"/invoice/" + params.row.id}>
            <button className='seeInvoice'>Lihat Invoice</button>
          </Link>
            
          </>
          
        )
      } 
    },
  ];


  return (
    <div style={{ height: 350, width: '100%' }}>
        <DataGrid
        rows={data}
        disableSelectionOnClick
        columns={columns}
        pageSize={5}
        rowsPerPageOptions={[10]}
        checkboxSelection
      />
    </div>
  )
}
