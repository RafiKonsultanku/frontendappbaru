import React from 'react';
import '../invoiceAdd/style/invoiceadd.css';
import ButtonBack from '../../components/Button/buttonBack';
import { Link } from 'react-router-dom';
import InvoiceForm from '../invoiceAdd/components/invoiceForm'

export default function Index() {
  return (
    <div className='newInvoiceContainer'>
      <div className="invoiceAddTitle">
        <Link to="/invoice">
        <ButtonBack />
        </Link>
        <h2>Tambah Invoice</h2>
      </div>
      <InvoiceForm />

    </div>
  )
}
