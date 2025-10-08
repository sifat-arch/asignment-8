import React from "react";
import errorImg from "../assets/error-404.png";

const CommonError = () => {
  return (
    <div className="mt-15">
      <img className="block mx-auto" src={errorImg} alt="" />

      <div className="text-center">
        <h1 className="text-3xl font-bold">Oops, page not found!</h1>
        <p className="text-gray-300">
          The page you are looking for is not available.
        </p>
      </div>
    </div>
  );
};

export default CommonError;
