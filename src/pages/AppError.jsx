import React from "react";
import Error from "../assets/App-Error.png";
import { Link } from "react-router";

const AppError = () => {
  return (
    <div>
      <img className="block mx-auto" src={Error} alt="" />
      <div className="text-center mt-5">
        <h1 className="text-4xl font-bold">OPPS!! APP NOT FOUND</h1>
        <p className="text-gray-400 mt-5">
          The App you are requesting is not found on our system. please try
          another apps
        </p>

        <Link to="/apps">
          <button className="btn bg-gradient-to-r from-blue-500 to-purple-600 text-white p-6 rounded-xl mt-4">
            Go Back
          </button>
        </Link>
      </div>
    </div>
  );
};

export default AppError;
