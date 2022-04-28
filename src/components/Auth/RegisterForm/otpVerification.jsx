import OTPInput, { ResendOTP } from "otp-input-react";
import React, { useState, useRef } from "react";
import axios from "../../../api/axios";
import { useNavigate } from "react-router-dom";

const OTP_URL = "api/validasi";

function OtpVerification() {
  const [OTP, setOTP] = useState("");

  const errRef = useRef();
  const [success, setSuccess] = useState(false);
  const [errMsg, setErrMsg] = useState("");
  const navigate = useNavigate();

  const handleOTP = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post(
        OTP_URL,
        JSON.stringify({ code: OTP }),
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
      } else if (err.response?.status === 400) {
        setErrMsg("Kode otp salah");
      } else if (err.response?.status === 401) {
        setErrMsg("Kode otp sudah kadaluarsa");
      } else {
        setErrMsg("OTP Failed");
      }
      errRef.current.focus();
    }
  };
  return (
    <>
      {success ? (
        navigate("/login")
      ) : (
        <form onSubmit={handleOTP}>
          <OTPInput
            className="otpInput"
            value={OTP}
            onChange={setOTP}
            autoFocus
            OTPLength={6}
            otpType="number"
            disabled={false}
            // secure
          />

          <p
            ref={errRef}
            className={errMsg ? "errmsg" : "offscreen"}
            aria-live="assertive"
          >
            {errMsg}
          </p>

          <div className="formField">
            <button className="formFieldButton">Konfirmasi OTP</button>{" "}
          </div>
        </form>
      )}
      <ResendOTP onResendClick={() => console.log("Resend clicked")} />
    </>
  );
}

export default OtpVerification;
