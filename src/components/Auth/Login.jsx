/* eslint-disable no-unused-vars */
import React, { useRef, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { FaEye } from "react-icons/fa";
import { FaEyeSlash } from "react-icons/fa6";
import { loginRequest } from "../../apiRequest/userRequest";
import { useSelector } from "react-redux";
import ButtonLoader from "../../layout/Main/ButtonLoader";

const Login = () => {
  const [passType, setPassType] = useState("password");
  const navigate = useNavigate();
  const loader = useSelector((state) => state.settings.loader);

  const togglePasswordType = () => {
    passType === "password" ? setPassType("text") : setPassType("password");
  };

  let emailRef,passRef = useRef();

  const onLogin = async()=>{
    let email = emailRef.value;
    let pass = passRef.value;

    let res = await loginRequest(email,pass);
    if(res){
       navigate("/");
    }
  }

  return (
    <main>
      <section className="bg-[#F4F4F4] py-5">
        <h3 className="text-center text-info uppercase text-[22px] lora-semibold">
          Account
        </h3>
        <div className="flex items-center justify-center gap-2 text-info lora-light">
          <Link className="hover:text-secondary" to={"/"}>Home</Link>
          <span>/</span>
          <p>Account</p>
        </div>
      </section>
      <section className=" lg:mt-12 mt-8 poppins-regular">
        <div className="flex flex-col justify-center items-center gap-5 form-control text-neutral">
          <div className="form-control">
            <input
              className=" lg:p-3 p-2 border border-gray-300 w-full lg:max-w-sm max-w-xs tracking-wide focus:outline-none
               rounded-sm lg:text-lg text-md" ref={(input)=>(emailRef = input)}
              placeholder="Email"
            />
          </div>
          <div className="form-control relative">
            <input
              className=" lg:p-3 p-2 border border-gray-300 w-full lg:max-w-sm max-w-xs tracking-wide focus:outline-none
               rounded-sm lg:text-lg text-md" ref={(input)=>(passRef = input)}
              type={passType}
              placeholder="Password"
            />

            <button
              onClick={togglePasswordType}
              className="absolute right-2 lg:top-5 top-3"
            >
              {passType === "password" ? <FaEyeSlash /> : <FaEye />}
            </button>
          </div>
        </div>
        <div className="flex flex-col justify-center items-center gap-3 my-5">
        {loader === "show" ? (
           <ButtonLoader />
          ) : (
            <button
              onClick={onLogin}
              className="bg-primary py-2 lg:py-3 poppins-regular 
              rounded-full hover:bg-secondary w-full lg:max-w-sm max-w-xs text-base-100 text-lg"
            >
              Login
            </button>
          )}
          <span className="lg:text-lg text-sm text-info">
            Don't have an account?{" "}
            <Link
              to={"/register"}
              className="text-neutral hover:text-secondary underline"
            >
              Create Account
            </Link>
          </span>
          <div className="bg-info w-full max-w-sm h-[1px]"></div>
          <Link to={'/'} className="lg:text-lg text-md text-info underline hover:text-secondary">
            Return to Home
          </Link>
        </div>
      </section>
    </main>
  );
};

export default Login;
