/* eslint-disable no-unused-vars */
import React from "react";
import ReactCodeInput from "react-code-input";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";

const VerifyAccount = () => {
  const loader = useSelector((state) => state.settings.loader);
  let defaultInputStyle = {
    fontFamily: "monospace",
    MozAppearance: "textfield",
    margin: "4px",
    paddingLeft: "8px",
    width: "45px",
    borderRadius: "3px",
    height: "45px",
    fontSize: "32px",
    border: "2px solid #EF7B84",
    boxSizing: "border-box",
    color: "black",
    backgroundColor: "white",
    outline: "none",
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
      <section className="flex flex-col gap-3 justify-center items-center min-h-[50vh]">
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
          <div className="flex items-center justify-center gap-1 bg-primary py-2.5 poppins-regular rounded-full w-full max-w-xs text-base-100 text-lg">
            <span className="loading loading-infinity loading-lg"></span>
            <div>Loading</div>
          </div>
        ) : (
          <button
            className="bg-primary py-3 poppins-regular rounded-full hover:bg-secondary w-full max-w-xs text-base-100 text-lg"
          >
            Submit
          </button>
        )}
      </section>
    </main>
  );
};

export default VerifyAccount;
