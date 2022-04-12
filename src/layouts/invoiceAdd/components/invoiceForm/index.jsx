import "./style/invoiceform.css";
import * as React from "react";
import { createContext, useContext, useState } from "react";
import Dropdown from "react-dropdown";
import "react-dropdown/style.css";
import Select from "react-select";
import DeleteIcon from "@mui/icons-material/Delete";
import Box from "@mui/material/Box";
import { AdapterDateFns } from "@mui/x-date-pickers/AdapterDateFns";
import { LocalizationProvider } from "@mui/x-date-pickers/LocalizationProvider";
import { DatePicker } from "@mui/x-date-pickers/DatePicker";
import { v4 as uuidv4 } from "uuid";

const options = [
  { value: "chocolate", label: "Chocolate" },
  { value: "strawberry", label: "Strawberry" },
  { value: "vanilla", label: "Vanilla" },
];

const ItemContext = createContext({
  items: [],
  addItem: () => {},
  deleteItem: () => {},
});

const initialState = [
  {
    id: uuidv4(),
  },
  // {
  //   id: uuidv4()
  // },
  // {
  //   id: uuidv4()
  // }
];

const ItemProvider = (props) => {
  const [items, setItems] = useState(initialState);

  const addItem = (item) => setItems((items) => [...items, item]);
  const deleteItem = (id) =>
    setItems((items) => items.filter((item) => item.id !== id));

  const value = {
    items,
    addItem,
    deleteItem,
  };

  return (
    <ItemContext.Provider value={value}>{props.children}</ItemContext.Provider>
  );
};

const AddItems = () => {
  // const [name, setName] = useState("");
  const { addItem } = useContext(ItemContext);

  // const updateName = (e) => {
  //   setName(e.target.value);
  // };

  const submitHandler = (e) => {
    e.preventDefault();
    addItem({
      id: uuidv4(),
    });
  };

  return (
    <button className="buttonAddItem" type="button" onClick={submitHandler}>
      Tambah Item Baru
    </button>
  );
};

const Item = ({ id }) => {
  const { deleteItem } = useContext(ItemContext);

  return (
    <div className="formSectionThree">
      <div className="sectionThreeSub">
        <input className="inputForm" type="hidden" value={id} />
        <div className="jenisItem">
          <label>Jenis Item</label>
          <Dropdown
            className="fieldJenisItem"
            options={jenisItem}
            value={defaultOption}
            placeholder="Pilih Jenis Item"
          />
        </div>
        <div className="namaItem">
          <label>Nama Item</label>
          <input className="inputForm" type="text" />
        </div>
        <div className="kuantitasItem">
          <label>Kuantitas Item</label>
          <input className="inputForm" type="number" />
        </div>

        <div className="kuantitasItem">
          <label>Harga Satuan</label>
          <input className="inputForm" type="number" />
        </div>
      </div>

      <div className="sectionThreeSubs">
        <div className="diskonItem">
          <label>Total Diskon</label>
          <input className="inputForm" type="number" />
        </div>
        <div className="jenisJasaItem">
          <label>Jenis Jasa</label>
          <Select
            className="fieldJenisItem"
            placeholder="Pilih Jenis Jasa"
            options={jenisJasaItem}
          />
        </div>
        <div className="jenisPajakItem">
          <label>Jenis Pajak</label>
          <Select
            className="fieldJenisItem"
            placeholder="Pilih Jenis Jasa"
            options={jenisJasaItem}
          />
        </div>
      </div>

      <div className="conclusion">
        <div className="totalHargaItem">
          <h4>Total Harga</h4>
          <p>10</p>
        </div>
        <div className="deleteButton">
          <button onClick={() => deleteItem(id)} className="deleteButtonItem">
            <DeleteIcon />
          </button>
        </div>
      </div>
    </div>
  );
};

const ItemsList = () => {
  const { items } = useContext(ItemContext);

  return (
    <div className="items-list">
      {items.map((item) => (
        <Item key={item.id} id={item.id} />
      ))}
    </div>
  );
};

//Jenis Item
const jenisItem = ["Barang", "Jasa"];
const defaultOption = options["Pilih Jenis Item"];

//Jenis Item
const jenisJasaItem = [
  { value: "Jasa Pajak", label: "Jasa Pajak" },
  { value: "Jasa Kesehatan", label: "Jasa Kesehatan" },
  { value: "Jasa Kebersihan", label: "Jasa Kebersihan" },
];

//   const defaultJasa = options['Pilih Jenis Jasa'];

export default function Index() {
  const [value, setValue] = React.useState(null);

  return (
    <div className="invoiceForm">
      <form action="" className="newInvoiceForm">
        <div className="dataPenjualOpening">
          <h4>Data Penjual</h4>
        </div>
        <div className="formSectionOne">
          <h4 className="penjualTitleForm">Penjual</h4>
          <Select
            className="dropdownForm"
            placeholder="Pilih Penjual"
            options={options}
          />
        </div>

        <div className="dataFakturOpening">
          <h4 className="dataFakturTitle">Data Faktur</h4>
        </div>
        <div className="formSectionTwo">
          <div className="nomorFaktur">
            <label>Nomor Faktur</label>
            <input className="inputForm" type="text" />
          </div>

          <div className="tanggalFaktur">
            <div className="tanggalMasaFaktur">
              <label>Tanggal Faktur</label>
              <LocalizationProvider dateAdapter={AdapterDateFns}>
                <DatePicker
                  label="Custom input"
                  value={value}
                  onChange={(newValue) => {
                    setValue(newValue);
                  }}
                  renderInput={({ inputRef, inputProps, InputProps }) => (
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
          </div>
        </div>
        <div className="dataFakturOpening">
          <h4 className="dataFakturTitle">Faktur Item</h4>
        </div>

        <ItemProvider>
          <ItemsList />
          <AddItems />
        </ItemProvider>

        <div className="dataFakturOpening">
          <h4 className="dataFakturTitle">Total Harga</h4>
        </div>
        <div className="formSectionFour">
          <div className="hargaDetail">
            <div className="totalHargaAll">
              <h4>Total Item</h4>
              <p>1</p>
            </div>
            <div className="totalHargaAll">
              <h4>Total Harga Item</h4>
              <p>Rp 1.000.000</p>
            </div>
            <hr />
            <div className="nilaiTransaksi">
              <h3 htmlFor="">Nilai Transaksi Bersih</h3>
              <p>1000000</p>
            </div>
          </div>
          <div className="catatanFaktur">
            <div className="catatanFaktur1">
              <label htmlFor="">Catatan</label>
              <textarea className="textareaCatatan" type="text" name="" id="" />
            </div>
            <div className="infoPembayaranFaktur">
              <label htmlFor="">Informasi Pembayaran</label>
              <textarea className="textareaCatatan" type="text" name="" id="" />
            </div>
          </div>
        </div>

        <div className="submitForm">
          <button className="submitFormFaktur" type="submit">
            Simpan
          </button>
        </div>
      </form>
    </div>
  );
}
