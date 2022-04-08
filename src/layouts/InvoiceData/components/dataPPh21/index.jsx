import './style/pph21.css';
import { Link } from "react-router-dom";
import ButtonBack from "../../../../components/Button/buttonBack/index"

export default function index() {
  return (
    <>
        <div className="invoiceDetailContainer">
          <Link to="/invoice">
            <ButtonBack />
          </Link>  
          <h2 className="invoiceDetailTitle">Detail Invoice</h2>
        </div>

        <div className="detailContainer">
          <div className="detailData">
            <div className="detailPenjual">
              <span className="penjualTitle">Penjual</span>
              <span className="penjualName">Rafi Pandya</span>
            </div>
            
            <div className="detailFaktur">
              <span className="detailFakturTitle">Data Faktur</span>
              <div className="detailFakturInfo">
                <span className="nomorFaktur">Nomor Faktur: 12345678901234</span>
                <div className="tanggalTempoFaktur">
                  <span className="tanggalFaktur">Tanggal Faktur: 20 April 2022</span>
                  <span className="jatuhTempoFaktur">Jatuh Tempo: 20 Mei 2022</span>
                </div>
              </div>
              
              <div className="detaiFakturItem">
              <table>
                <tr>
                  <th>Jenis Item</th>
                  <th>Nama Barang/Jasa</th>
                  <th>Kuantitas</th>
                  <th>Harga Satuan</th>
                  <th>Total Diskon</th>
                  <th>Total Harga Dasar</th>
                </tr>
                <tr>
                  <td>Alfreds Futterkiste</td>
                  <td>Maria Anders</td>
                  <td>Maria Anders</td>
                  <td>Germany</td>
                  <td>Germany</td>
                  <td>Germany</td>
                </tr>
 
                  </table>
              </div>

              <div className="detailHarga">
                <span className="detailHargaFakturTitle">Detail Harga</span>
              </div>
              
              <div className="detailHargaFakturInfo">
                <div className="hargaFaktur">
                  <span className="hargaFakturItem">Total Jasa/Barang: <h4>1</h4></span>
                  <span className="hargaFakturItem">Tarif Pajak (PPh21): <h4>Rp 10.000</h4></span>
                  <span className="hargaFakturItem">Tarif Admin: <h4>Rp 10.000</h4></span>
                </div> 
                
                <div className="catatanDetailFaktur">
                  <h4 className='catatanUniversal'>Catatan 
                    <p className='isiCatatan'>tidak ada</p> 
                  </h4>
                  <h4 className='catatanPembayaran'>Informasi Pembayaran
                    <p className='isiCatatan'>tidak ada</p> 
                  </h4>
                </div>
              </div>
            </div>
          </div>
          <div className="invoiceDataAction">
            <Link to="/invoice/edit/">
              <button className='invoiceEditButton'>Edit Invoice</button>
            </Link>
          
          <button className='invoiceDeleteButton'>Delete Invoice</button>
          </div>
        </div>
        
    </>
  )
}
