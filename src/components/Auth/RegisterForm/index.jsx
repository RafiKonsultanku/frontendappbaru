import React, { useRef, useState, useEffect, useContext } from "react";
import { NavLink, Navigate } from "react-router-dom";
import InputMask from "react-input-mask";
import CheckIcon from "@mui/icons-material/Check";
import CloseIcon from "@mui/icons-material/Close";
// import ErrorOutlineIcon from "@mui/icons-material/ErrorOutline";
// import validator from "validator";
import axios from "../../../api/axios";
import OtpVerification from "./otpVerification";

const PWD_REGEX = /^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[!@#$%]).{8,24}$/;
const REGISTER_URL = "api/user";

const SignUpForm = () => {
  const userRef = useRef();
  const errRef = useRef();

  const [npwp, setNpwp] = useState("");
  const [validNpwp, setValidNpwp] = useState(false);
  const [npwpFocus, setNpwpFocus] = useState(false);

  const [notelp, setNotelp] = useState("");

  const [email, setEmail] = useState("");
  const [emailError, setEmailError] = useState("");

  const [pwd, setPwd] = useState("");
  const [validPwd, setValidPwd] = useState(false);
  const [pwdFocus, setPwdFocus] = useState(false);

  const [matchPwd, setMatchPwd] = useState("");
  const [validMatch, setValidMatch] = useState(false);
  const [matchFocus, setMatchFocus] = useState(false);

  const [errMsg, setErrMsg] = useState("");
  const [success, setSuccess] = useState(false);

  // useEffect(() => {
  //   userRef.current.focus();
  // }, []);

  useEffect(() => {
    // setValidPwd(PWD_REGEX.test(pwd));
    // setValidMatch(pwd === matchPwd);

    const result = PWD_REGEX.test(pwd);
    console.log(result);
    console.log(pwd);
    setValidPwd(result);
    const match = pwd === matchPwd;
    setValidMatch(match);
  }, [pwd, matchPwd]);

  useEffect(() => {
    setErrMsg("");
  }, [npwp, notelp, email, pwd, matchPwd]);

  const handleSubmit = async (e) => {
    e.preventDefault();
    const v1 = PWD_REGEX.test(pwd);
    if (!v1) {
      setErrMsg("Invaid Entry");
      return;
    }
    try {
      const response = await axios.post(
        REGISTER_URL,
        JSON.stringify({
          npwp,
          no_telp: notelp,
          email,
          password: pwd,
        }),
        {
          headers: { "Content-Type": "application/json" },
          withCredentials: true,
        }
      );
      setSuccess(true);
      console.log(response.data);
      console.log(response.data.content.access_token);
      console.log(JSON.stringify(response));
    } catch (err) {
      if (!err?.response) {
        setErrMsg("No Server Response");
      } else if (err.response?.status === 409) {
        setErrMsg("Username Taken");
      } else {
        setErrMsg("Registration Failed");
      }
      errRef.current.focus();
    }
  };

  // const validateEmail = (e) => {
  //   var email = e.target.value;

  //   if (validator.isEmail(email)) {
  //     setEmailError(
  //       <span className={emailError ? "valid" : "hide"}>
  //         <CheckIcon className="iconRegistration" />
  //       </span>
  //     );
  //   } else {
  //     setEmailError(<span className="emailNotValid">email tidak valid</span>);
  //   }
  // };

  return (
    <>
      <div className="Forms">
        <div className="appAside" />
        <div className="appForm">
          <div className="pageSwitcher">
            <NavLink
              to="/login"
              activeClassName="pageSwitcherItem-active"
              className="pageSwitcherItem"
            >
              Login
            </NavLink>
            <NavLink
              to="/register"
              activeClassName="pageSwitcherItem-active"
              className="pageSwitcherItem"
            >
              Buat Akun
            </NavLink>
          </div>

          {success ? (
            <>
              <div className="formTitle">
                <h1>Selamat Akun Anda Berhasil Didaftarkan!</h1>{" "}
                <p className="activationAcc">
                  Masukkan kode OTP untuk aktifasi akun yang kami kirim ke inbox
                  email anda{" "}
                </p>
                <OtpVerification />
                {/* <NavLink to="/login">
                  <div className="formField">
                    <button className="formFieldButton">LOGIN</button>{" "}
                  </div>
                </NavLink> */}
              </div>
              <div className="formCenter"></div>
            </>
          ) : (
            <>
              <div className="formTitle">
                <h1>Buat Akun</h1>{" "}
              </div>
              <p
                ref={errRef}
                className={errMsg ? "errmsg" : "offscreen"}
                aria-live="assertive"
              >
                {errMsg}
              </p>
              <div className="formCenter">
                <form className="formFields" onSubmit={handleSubmit}>
                  <div className="formField">
                    <label className="formFieldLabel" htmlFor="npwp">
                      NPWP
                    </label>
                    <InputMask
                      mask="99.999.999.9-999.999"
                      type="text"
                      id="npwp"
                      className="formFieldInput"
                      placeholder="_ _._ _ _._ _ _._-._ _ _._ _ _"
                      autoComplete="off"
                      onChange={(e) => setNpwp(e.target.value)}
                      name="npwp"
                      maskChar=""
                      ref={userRef}
                      aria-invalid={validNpwp ? "false" : "true"}
                      onFocus={() => setNpwpFocus(true)}
                      onBlur={() => setNpwpFocus(false)}
                      //   alwaysShowMask
                      // noSpaceBetweenChars={true}
                      //   value={this.state.npwp}
                      // onChange={this.handleChange}
                      required
                    />
                  </div>
                  <div className="formField">
                    <label className="formFieldLabel" htmlFor="no_telp">
                      Nomor Telpon
                    </label>
                    <input
                      type="tel"
                      ref={userRef}
                      id="no_telp"
                      className="formFieldInput"
                      placeholder="Masukkan Nomor Telfon Anda"
                      onChange={(e) => setNotelp(e.target.value)}
                      name="notelp"
                      autoComplete="off"
                      //   value={this.state.email}
                      // onChange={this.handleChange}
                    />
                  </div>
                  <div className="formField">
                    <label className="formFieldLabel" htmlFor="email">
                      Alamat Email
                      {emailError}
                    </label>
                    <input
                      type="email"
                      id="email"
                      className="formFieldInput"
                      placeholder="Masukkan Email Anda"
                      name="email"
                      autoComplete="off"
                      ref={userRef}
                      onChange={(e) => setEmail(e.target.value)}
                      // aria-invalid={validEmail ? "false" : "true"}
                      // aria-describedby="emailnote"
                      // onFocus={() => setEmailFocus(true)}
                      // onBlur={() => setEmailFocus(false)}
                      //   value={this.state.email}
                      // onChange={this.handleChange}
                    />
                  </div>
                  <div className="formField">
                    <label className="formFieldLabel" htmlFor="password">
                      Password
                      <span className={validPwd ? "valid" : "hide"}>
                        <CheckIcon className="iconRegistration" />
                      </span>
                      <span className={validPwd || !pwd ? "hide" : "invalid"}>
                        <CloseIcon className="iconRegistration" />
                      </span>
                    </label>
                    <input
                      type="password"
                      id="password"
                      onChange={(e) => setPwd(e.target.value)}
                      value={pwd}
                      className="formFieldInput"
                      required
                      placeholder="Minimal 8 karakter, campuran huruf dan angka"
                      name="password"
                      aria-invalid={validPwd ? "false" : "true"}
                      aria-describedby="pwdnote"
                      onFocus={() => setPwdFocus(true)}
                      onBlur={() => setPwdFocus(false)}
                      //   value={this.state.password}
                      // onChange={this.handleChange}
                    />
                    <p
                      id="pwdnote"
                      className={
                        pwdFocus && !validPwd ? "instructions" : "offscreen"
                      }
                    >
                      {/* <ErrorOutlineIcon className="iconRegistration" /> */}
                      Minimal 8 sampai 24 Karakter.
                      <br />
                      Harus disertakan huruf kapital dan huruf kecil, angka dan
                      spesial karakter.
                      <br />
                      Spesial karakter yang diperbolehkan:{" "}
                      <span aria-label="exclamation mark">!</span>{" "}
                      <span aria-label="at symbol">@</span>{" "}
                      <span aria-label="hashtag">#</span>{" "}
                      <span aria-label="dollar sign">$</span>{" "}
                      <span aria-label="percent">%</span>
                    </p>
                  </div>

                  <div className="formField">
                    <label className="formFieldLabel" htmlFor="confirm_pwd">
                      Konfirmasi Password
                      <span
                        className={validMatch && matchPwd ? "valid" : "hide"}
                      >
                        <CheckIcon className="iconRegistration" />
                      </span>
                      <span
                        className={validMatch || !validPwd ? "hide" : "invalid"}
                      >
                        <CloseIcon className="iconRegistration" />
                      </span>
                    </label>
                    <input
                      type="password"
                      id="confirm_pwd"
                      onChange={(e) => setMatchPwd(e.target.value)}
                      value={matchPwd}
                      className="formFieldInput"
                      required
                      placeholder="Konfirmasi Password"
                      name="password"
                      aria-invalid={validMatch ? "false" : "true"}
                      aria-describedby="confirmnote"
                      onFocus={() => setMatchFocus(true)}
                      onBlur={() => setMatchFocus(false)}
                      //   value={this.state.password}
                      // onChange={this.handleChange}
                    />
                    <p
                      id="confirmnote"
                      className={
                        matchFocus && !validMatch ? "instructions" : "offscreen"
                      }
                    >
                      {/* <ErrorOutlineIcon className="iconRegistration" /> */}
                      Harus sama dengan password sebelumnya
                    </p>
                  </div>

                  <div className="formField">
                    <label className="formFieldCheckboxLabel">
                      {/* <input
                      className="formFieldCheckbox"
                      type="checkbox"
                      name="hasAgreed"
                      value={this.state.hasAgreed}
                      onChange={this.handleChange}
                    />{" "} */}
                      Dengan menekan tombol daftar saya menyetujui{" "}
                      <a href="null" className="formFieldTermsLink">
                        Syarat dan Ketentuan
                      </a>{" "}
                      dan{" "}
                      <a href="null" className="formFieldTermsLink">
                        Kebijakan Privasi
                      </a>
                    </label>
                  </div>

                  <div className="formField">
                    <button
                      disabled={!validPwd || !validMatch ? true : false}
                      className="formFieldButton"
                    >
                      DAFTAR
                    </button>{" "}
                    {/* <Link to="/sign-in" className="formFieldLink">
                  I'm already member
                </Link> */}
                  </div>
                </form>
              </div>
            </>
          )}
        </div>
      </div>
    </>
  );
};

export default SignUpForm;
