/* eslint-disable no-unused-vars */
import React, { useState } from "react";
import ReactCodeInput from "react-code-input";
import { useSelector } from "react-redux";
import { Link, useNavigate } from "react-router-dom";
import { errorMsg } from "../../utility/formHelper";
import { otpVerifyRequest } from "../../apiRequest/userRequest";
import ButtonLoader from "../../layout/Main/ButtonLoader";

const VerifyAccount = () => {
  const loader = useSelector((state) => state.settings.loader);
  const [otp, setOtp] = useState("");
  const navigate = useNavigate();
  let defaultInputStyle = {
    fontFamily: "monospace",
    MozAppearance: "textfield",
    margin: "4px",
    paddingLeft: "8px",
    width: "45px",
    borderRadius: "3px",
    height: "45px",
    fontSize: "32px",
    border: "1px solid rgb(209 213 219)",
    boxSizing: "border-box",
    color: "#717173",
    backgroundColor: "white",
    outline: "none",
  };

  const onOtpSubmit = async () => {
    if (!otp) {
      errorMsg("please!provide an otp code");
    } else {
      let res = await otpVerifyRequest(otp);
      if (res === true) {
        navigate("/login");
      }
    }
  };

  return (
    <main>
      <section className="bg-[#F4F4F4] py-5">
        <h3 className="text-center text-info uppercase text-[22px] lora-semibold">
          Account Verification
        </h3>
        <div className="flex items-center justify-center gap-2 text-info lora-light">
          <Link className="hover:text-secondary" to={"/"}>
            Home
          </Link>
          <span>/</span>
          <p>Verify Account</p>
        </div>
      </section>
      <section className="flex flex-col gap-3 justify-center items-center lg:mt-12 mt-8">
        <p className="poppins-regular text-info">
          You will get an <b>OTP</b> via <b>EMAIL</b>
        </p>
        <ReactCodeInput
          type="number"
          fields={6}
          inputStyle={defaultInputStyle}
          inputMode={"numeric"}
          name={"otp"}
          onChange={(value) => setOtp(value)}
        />
        {loader === "show" ? (
          <ButtonLoader />
        ) : (
          <button
            className="bg-primary py-3 poppins-regular rounded-full hover:bg-secondary w-full max-w-xs
             text-base-100 text-lg"
            onClick={onOtpSubmit}
          >
            Submit
          </button>
        )}
      </section>
    </main>
  );
};

export default VerifyAccount;
