import React from "react";
import EditIcon from "@mui/icons-material/Edit";
import Box from "@mui/material/Box";
// import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import Modal from "@mui/material/Modal";
import CloseIcon from "@mui/icons-material/Close";

export default function Index() {
  const [open, setOpen] = React.useState(false);
  const [openPenandatangan, setOpenPenandatangan] = React.useState(false);
  const handleOpen = () => setOpen(true);
  const handleOpenPenandatangan = () => setOpenPenandatangan(true);
  const handleClose = () => setOpen(false);
  const handleClosePenandatangan = () => setOpenPenandatangan(false);
  return (
    <div>
      <div className="akunData">
        <div className="akunHead">
          <span className="akunDataTitle">Profil Wajib Pajak</span>
          <button className="buttonEdit" onClick={handleOpen}>
            <EditIcon className="iconEdit" />
            Ubah
          </button>
        </div>

        <ul className="akunDataList">
          <li className="akunDataListItem">
            <div className="dataListAkun">
              <span className="dataAkunTitle">NPWP Wajib Pajak</span>
              <span className="separator">:</span>
              <span className="akunDataValue"></span>
            </div>

            <div className="dataListAkun">
              <span className="dataAkunTitle">Nama Wajib Pajak</span>
              <span className="separator">:</span>
              <span className="akunDataValue"></span>
            </div>

            <div className="dataListAkun">
              <span className="dataAkunTitle">KLU</span>
              <span className="separator">:</span>
              <span className="akunDataValue"></span>
            </div>

            <div className="dataListAkun">
              <span className="dataAkunTitle">Alamat</span>
              <span className="separator">:</span>
              <span className="akunDataValue"></span>
            </div>

            <div className="dataListAkun">
              <span className="dataAkunTitle">Kode Pos</span>
              <span className="separator">:</span>
              <span className="akunDataValue"></span>
            </div>

            <div className="dataListAkun">
              <span className="dataAkunTitle">Nomor Telepon</span>
              <span className="separator">:</span>
              <span className="akunDataValue"></span>
            </div>

            <div className="dataListAkun">
              <span className="dataAkunTitle">Alamat Email</span>
              <span className="separator">:</span>
              <span className="akunDataValue"></span>
            </div>
          </li>
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
              <p>Kelola Profil Wajib Pajak Anda</p>
              <button className="btnCloseModal" onClick={handleClose}>
                <CloseIcon className="iconCloseModal" />
              </button>
            </div>
          </div>
          <Typography id="modal-modal-description" sx={{ mt: 2 }}>
            <form action="">
              <div className="inputModalForm">
                <label className="labelForm" htmlFor="">
                  NPWP
                </label>
                <p>npwp</p>
              </div>
              <div className="inputModalForm">
                <label className="labelForm" htmlFor="">
                  Nama Wajib Pajak
                </label>
                <input className="inputForm" type="text" />
              </div>
              <div className="inputModalForm">
                <label className="labelForm" htmlFor="">
                  KLU
                </label>
                <input className="inputForm" type="text" />
              </div>
              <div className="inputModalForm">
                <label className="labelForm" htmlFor="">
                  Alamat
                </label>
                <input className="inputForm" type="text" />
              </div>
              <div className="inputModalForm">
                <label className="labelForm" htmlFor="">
                  Kode Pos
                </label>
                <input className="inputForm" type="text" />
              </div>
              <div className="inputModalForm">
                <label className="labelForm" htmlFor="">
                  Nomor Telepon
                </label>
                <input className="inputForm" type="text" />
              </div>
              <div className="inputModalForm">
                <label className="labelForm" htmlFor="">
                  Alamat Email
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
          <span className="akunDataTitle">Penandatangan SPT</span>
          <button className="buttonEdit" onClick={handleOpenPenandatangan}>
            <EditIcon className="iconEdit" />
            Ubah
          </button>
        </div>

        <ul className="akunDataList">
          <li className="akunDataListItem">
            <div className="dataListAkun">
              <span className="dataAkunTitle">NPWP</span>
              <span className="separator">:</span>
              <span className="akunDataValue"></span>
            </div>

            <div className="dataListAkun">
              <span className="dataAkunTitle">Nama</span>
              <span className="separator">:</span>
              <span className="akunDataValue"></span>
            </div>

            <div className="dataListAkun">
              <span className="dataAkunTitle">Jabatan</span>
              <span className="separator">:</span>
              <span className="akunDataValue"></span>
            </div>

            <div className="dataListAkun">
              <span className="dataAkunTitle">Email</span>
              <span className="separator">:</span>
              <span className="akunDataValue"></span>
            </div>
          </li>
        </ul>
      </div>

      <Modal
        open={openPenandatangan}
        // onHide={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box className="modalForm">
          <div id="modal-modal-title">
            <div className="modalHeader">
              <p>Profil Penandatangan SPT</p>
              <button
                className="btnCloseModal"
                onClick={handleClosePenandatangan}
              >
                <CloseIcon className="iconCloseModal" />
              </button>
            </div>
          </div>
          <Typography id="modal-modal-description" sx={{ mt: 2 }}>
            <form action="">
              <div className="inputModalForm">
                <label className="labelForm" htmlFor="">
                  NPWP
                </label>
                <input className="inputForm" type="text" />
              </div>
              <div className="inputModalForm">
                <label className="labelForm" htmlFor="">
                  Nama
                </label>
                <input className="inputForm" type="text" />
              </div>
              <div className="inputModalForm">
                <label className="labelForm" htmlFor="">
                  Jabatan
                </label>
                <input className="inputForm" type="text" />
              </div>
              <div className="inputModalForm">
                <label className="labelForm" htmlFor="">
                  Email
                </label>
                <input className="inputForm" type="text" />
              </div>

              <div className="buttonAction">
                <button
                  className="btnBatal"
                  type="button"
                  onClick={handleClosePenandatangan}
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
          <span className="akunDataTitle">Pengaturan E-FIN</span>
          <button className="buttonEfin">Kelola E-FIN</button>
        </div>
      </div>
    </div>
  );
}
