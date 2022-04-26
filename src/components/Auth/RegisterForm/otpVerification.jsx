import OTPInput, { ResendOTP } from "otp-input-react";
import React, { useState } from "react";

function OtpVerification() {
  const [OTP, setOTP] = useState("");
  return (
    <>
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
      <ResendOTP onResendClick={() => console.log("Resend clicked")} />
    </>
  );
}

export default OtpVerification;
