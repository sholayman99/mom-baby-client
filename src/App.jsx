/* eslint-disable no-unused-vars */
import React from "react";
import { RouterProvider } from "react-router-dom";
import routes from "./routes/routes";
import axios from "axios";

const App = () => {
  axios.defaults.baseURL = "https://mom-baby-server.vercel.app/api/v1";
  axios.defaults.withCredentials = true;

  return (
    <div className="max-w-[1400px]">
      <RouterProvider router={routes}></RouterProvider>
    </div>
  );
};

export default App;
