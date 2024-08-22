/* eslint-disable no-unused-vars */
import React, { useState } from "react";
import { FaEye } from "react-icons/fa";
import { FaEyeSlash } from "react-icons/fa6";
import { Link } from "react-router-dom";

const RegisterPage = () => {
  const [passType, setPassType] = useState("password");

  const togglePasswordType = () => {
    passType === "password" ? setPassType("text") : setPassType("password");
  };

  return (
    <main>
      <section className="bg-[#F4F4F4] py-5">
        <h3 className="text-center text-info uppercase text-[22px] lora-semibold">
          Create Account
        </h3>
        <div className="flex items-center justify-center gap-2 text-info lora-light">
          <Link className="hover:text-secondary" to={"/"}>Home</Link>
          <span>/</span>
          <p>Create Account</p>
        </div>
      </section>
      <section className=" lg:mt-16 poppins-regular">
        <div className="flex flex-col justify-center items-center gap-5 form-control text-neutral">
          <div className="form-control">
            <input
              className=" p-4 border border-gray-300 w-full max-w-sm tracking-wide focus:outline-none
             rounded-sm text-lg"
              placeholder="Full Name"
            />
          </div>
          <div className="form-control">
            <input
              className=" p-4 border border-gray-300 w-full max-w-sm tracking-wide focus:outline-none
             rounded-sm text-lg"
              placeholder="Email"
            />
          </div>
          <div className="form-control relative">
            <input
              className=" p-4 border border-gray-300 w-full max-w-sm tracking-wide focus:outline-none
             rounded-sm text-lg"
              type={passType}
              placeholder="Password"
            />

            <button
              onClick={togglePasswordType}
              className="absolute right-2 top-5"
            >
              {passType === "password" ? <FaEyeSlash /> : <FaEye />}
            </button>
          </div>
          <div className="form-control">
            <input
              className=" p-4 border border-gray-300 w-full max-w-sm tracking-wide focus:outline-none
             rounded-sm text-lg"
              placeholder="Confirm Password"
            />
          </div>
          <div className="form-control">
            <input
              className=" p-4 border border-gray-300 w-full max-w-sm tracking-wide focus:outline-none
             rounded-sm text-lg"
              placeholder="Mobile"
            />
          </div>
        </div>
        <div className="flex flex-col justify-center items-center gap-3 my-5">
          <button className="bg-primary py-4 poppins-regular rounded-full hover:bg-secondary w-full max-w-sm text-base-100 text-lg">
            Create
          </button>
          <span className="text-md text-info">
            Already has an account?{" "}
            <Link
              to={"/login"}
              className="text-neutral hover:text-secondary underline"
            >
              Login
            </Link>
          </span>
          <div className="bg-info w-full max-w-sm h-[1px]"></div>
          <Link className="text-lg text-info underline hover:text-secondary">
            Return to Home
          </Link>
        </div>
      </section>
    </main>
  );
};

export default RegisterPage;
