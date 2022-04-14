import EditIcon from "@mui/icons-material/Edit";
import Box from "@mui/material/Box";
// import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import Modal from "@mui/material/Modal";
import CloseIcon from "@mui/icons-material/Close";
import React from "react";

export default function Index() {
  const [open, setOpen] = React.useState(false);
  const [open2, setOpen2] = React.useState(false);
  const handleOpen = () => setOpen(true);
  const handleOpen2 = () => setOpen2(true);
  const handleClose = () => setOpen(false);
  const handleClose2 = () => setOpen2(false);
  return (
    <div>
      <div className="akunData">
        <div className="akunHead">
          <span className="akunDataTitle">Kelola Akun Anda</span>
          <button className="buttonEdit" onClick={handleOpen}>
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

      <Modal
        open={open}
        // onHide={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box className="modalForm">
          <div id="modal-modal-title">
            <div className="modalHeader">
              <p>Kelola Akun Anda</p>
              <button className="btnCloseModal" onClick={handleClose}>
                <CloseIcon className="iconCloseModal" />
              </button>
            </div>
          </div>
          <Typography id="modal-modal-description" sx={{ mt: 2 }}>
            <form action="">
              <div className="inputModalForm">
                <label className="labelForm" htmlFor="">
                  Nama Lengkap
                </label>
                <input className="inputForm" type="text" />
              </div>
              <div className="inputModalForm">
                <label className="labelForm" htmlFor="">
                  Email
                </label>
                <input className="inputForm" type="text" />
              </div>
              <div className="inputModalForm">
                <label className="labelForm" htmlFor="">
                  Pekerjaan
                </label>
                <input className="inputForm" type="text" />
              </div>
              <div className="inputModalForm">
                <label className="labelForm" htmlFor="">
                  Nomor Telpon
                </label>
                <input className="inputForm" type="text" />
              </div>
              <div className="buttonAction">
                <button
                  className="btnBatal"
                  type="button"
                  onClick={handleClose}
                >
                  BATAL
                </button>

                <button className="btnSimpan" type="submit">
                  SIMPAN
                </button>
              </div>
            </form>
          </Typography>
        </Box>
      </Modal>

      <div className="akunData">
        <div className="akunHead">
          <span className="akunDataTitle">Ubah Password</span>
          <button className="buttonEdit" onClick={handleOpen2}>
            <EditIcon className="iconEdit" />
            Ubah
          </button>
        </div>
        <Modal
          open={open2}
          // onHide={handleClose2}
          aria-labelledby="modal-modal-title"
          aria-describedby="modal-modal-description"
        >
          <Box className="modalForm">
            <div id="modal-modal-title">
              <div className="modalHeader">
                <p>Ubah Password</p>
                <button className="btnCloseModal" onClick={handleClose2}>
                  <CloseIcon className="iconCloseModal" />
                </button>
              </div>
            </div>
            <Typography id="modal-modal-description" sx={{ mt: 2 }}>
              <form action="">
                <div className="inputModalForm">
                  <label className="labelForm" htmlFor="">
                    Password Saat ini
                  </label>
                  <input className="inputForm" type="text" />
                </div>
                <div className="inputModalForm">
                  <label className="labelForm" htmlFor="">
                    Password Baru
                  </label>
                  <input className="inputForm" type="text" />
                </div>
                <div className="inputModalForm">
                  <label className="labelForm" htmlFor="">
                    Konfimasi Password Baru
                  </label>
                  <input className="inputForm" type="text" />
                </div>

                <div className="buttonAction">
                  <button
                    className="btnBatal"
                    type="button"
                    onClick={handleClose2}
                  >
                    BATAL
                  </button>

                  <button className="btnSimpan" type="submit">
                    SIMPAN
                  </button>
                </div>
              </form>
            </Typography>
          </Box>
        </Modal>
      </div>
    </div>
  );
}
