import "./style/featured.css";

export default function index() {
  return (
    <div className="featured">
      <div className="featuredItem">
        <span className="featuredTitle">Jumlah Invoice</span>
        <div className="featureInvoiceContainer">
          <span className="featuredInvoice">0</span>
        </div>
      </div>

      <div className="featuredItemTransaksi">
        <span className="featuredTitle">Total Transaksi</span>
        <div className="featureInvoiceContainer">
          <span className="featuredInvoice">0</span>
        </div>
      </div>

      <div className="featuredItemKas">
        <span className="featuredTitle">Saldo Kas Negara</span>
        <div className="featureInvoiceContainer">
          <span className="featuredInvoice">0</span>
        </div>
      </div>

      <div className="featuredItemSaldo">
        <span className="featuredTitle">Saldo Anda</span>
        <div className="featureInvoiceContainer">
          <span className="featuredInvoice">0</span>
        </div>
      </div>
    </div>
  );
}
