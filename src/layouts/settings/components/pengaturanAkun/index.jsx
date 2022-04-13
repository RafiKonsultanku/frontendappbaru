import "./style/pengaturanAkun.css";
import EditIcon from "@mui/icons-material/Edit";

export default function Index() {
  return (
    <div>
      <div className="akunData">
        <div className="akunHead">
          <span className="akunDataTitle">Kelola Akun Anda</span>
          <button className="buttonEdit">
            <EditIcon className="iconEdit" />
            Ubah
          </button>
        </div>

        <ul className="akunDataList">
          <li className="akunDataListItem">
            <div className="dataListAkun">
              <span className="dataAkunTitle">Nama Lengkap</span>
              <span className="separator">:</span>
              <span className="akunDataValue">Mr. Fulan</span>
            </div>

            <div className="dataListAkun">
              <span className="dataAkunTitle">Email</span>
              <span className="separator">:</span>
              <span className="akunDataValue">Mr. Fulan</span>
            </div>

            <div className="dataListAkun">
              <span className="dataAkunTitle">Pekerjaan</span>
              <span className="separator">:</span>
              <span className="akunDataValue">Mr. Fulan</span>
            </div>

            <div className="dataListAkun">
              <span className="dataAkunTitle">Nomor Telepon</span>
              <span className="separator">:</span>
              <span className="akunDataValue">Mr. Fulan</span>
            </div>
          </li>

          {/* <li className="akunDataListItem">
            <div className="akunDataItem">
              <label className="akunDataName">Pekerjaan</label>
              <span className="separator">:</span>
              <span className="akunDataValue">
                Telah menambahkan faktur pajak
              </span>
            </div>
          </li> */}
        </ul>
      </div>

      <div className="akunData">
        <div className="akunHead">
          <span className="akunDataTitle">Ubah Password</span>
          <button className="buttonEdit">
            <EditIcon className="iconEdit" />
            Ubah
          </button>
        </div>
      </div>
    </div>
  );
}
