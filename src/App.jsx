/* eslint-disable no-unused-vars */
import React from "react";
import { RouterProvider } from "react-router-dom";
import routes from "./routes/routes";
import axios from "axios";
import { Toaster } from "react-hot-toast";


const App = () => {
  axios.defaults.baseURL = "http://localhost:5000/api/v1";
  axios.defaults.withCredentials = true;

  return (
    <div className="max-w-[1400px]">
      <RouterProvider router={routes}></RouterProvider>
      <Toaster position={"bottom-center"} />
    </div>
  );
};

export default App;
