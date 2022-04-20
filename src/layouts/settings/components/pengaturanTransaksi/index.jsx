import EditIcon from "@mui/icons-material/Edit";
import React from "react";
import { AdapterDateFns } from "@mui/x-date-pickers/AdapterDateFns";
import { LocalizationProvider } from "@mui/x-date-pickers/LocalizationProvider";
import { DatePicker } from "@mui/x-date-pickers/DatePicker";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import Modal from "@mui/material/Modal";
import CloseIcon from "@mui/icons-material/Close";

export default function Index() {
  const [open, setOpen] = React.useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);
  const [value, setValue] = React.useState(null);
  const [valueMulaiSK, setValueMulaiSK] = React.useState(null);
  return (
    <div>
      <div className="akunData">
        <div className="akunHead">
          <span className="akunDataTitle">PPH Final</span>
          <button className="buttonEdit" onClick={handleOpen}>
            <EditIcon className="iconEdit" />
            Ubah
          </button>
        </div>

        <ul className="akunDataList">
          <li className="akunDataListItem">
            <div className="dataListAkun">
              <span className="dataAkunTitle">Nomor Surat Keterangan(SK)</span>
              <span className="separator">:</span>
              <span className="akunDataValue"></span>
            </div>

            <div className="dataListAkun">
              <span className="dataAkunTitle">Tanggal Mulai SK</span>
              <span className="separator">:</span>
              <span className="akunDataValue"></span>
            </div>

            <div className="dataListAkun">
              <span className="dataAkunTitle">Tanggal Berakhir SK</span>
              <span className="separator">:</span>
              <span className="akunDataValue"></span>
            </div>

            <div className="dataListAkun">
              <span className="dataAkunTitle">Unggahan File SK</span>
              <span className="separator">:</span>
              <span className="akunDataValue"></span>
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
                    <p>Kelola PPH Final Anda</p>
                    <button className="btnCloseModal" onClick={handleClose}>
                      <CloseIcon className="iconCloseModal" />
                    </button>
                  </div>
                </div>
                <div className="inputModalForm">
                  <label className="labelForm" htmlFor="">
                    Nomor Surat Keterangan(SK)
                  </label>
                  <input className="inputForm" type="text" />
                </div>
                <Typography id="modal-modal-description" sx={{ mt: 2 }}>
                  <form action="">
                    <div className="inputModalForm">
                      <label className="labelForm" htmlFor="">
                        Tanggal Mulai SK
                      </label>
                      <LocalizationProvider dateAdapter={AdapterDateFns}>
                        <DatePicker
                          label="Custom input"
                          value={valueMulaiSK}
                          onChange={(newValue) => {
                            setValueMulaiSK(newValue);
                          }}
                          renderInput={({
                            inputRef,
                            inputProps,
                            InputProps,
                          }) => (
                            <Box sx={{ display: "flex", alignItems: "center" }}>
                              <input
                                className="inputForm"
                                ref={inputRef}
                                {...inputProps}
                              />
                              {InputProps?.endAdornment}
                            </Box>
                          )}
                        />
                      </LocalizationProvider>
                    </div>
                    <div className="inputModalForm">
                      <label className="labelForm" htmlFor="">
                        Tanggal Berakhir SK
                      </label>
                      <LocalizationProvider dateAdapter={AdapterDateFns}>
                        <DatePicker
                          label="Custom input"
                          value={value}
                          onChange={(newValue) => {
                            setValue(newValue);
                          }}
                          renderInput={({
                            inputRef,
                            inputProps,
                            InputProps,
                          }) => (
                            <Box sx={{ display: "flex", alignItems: "center" }}>
                              <input
                                className="inputForm"
                                ref={inputRef}
                                {...inputProps}
                              />
                              {InputProps?.endAdornment}
                            </Box>
                          )}
                        />
                      </LocalizationProvider>
                    </div>
                    <div className="inputModalForm">
                      <label className="labelForm" htmlFor="">
                        Upload File SK
                      </label>
                      <input className="inputForm" type="file" />
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
          </li>
        </ul>
      </div>
    </div>
  );
}
