import React from "react";
import Error from "../assets/App-Error.png";

const AppError = () => {
  return (
    <div>
      <img src={Error} alt="" />
      <div>
        <h1>OPPS!! APP NOT FOUND</h1>
        <p>
          The App you are requesting is not found on our system. please try
          another apps
        </p>

        <Link>
          <button className="btn bg-gradient-to-r from-blue-500 to-purple-600 text-white p-6 rounded-xl">
            Go Back
          </button>
        </Link>
      </div>
    </div>
  );
};

export default AppError;
