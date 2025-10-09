import React, { useState } from "react";
import { Link, useLoaderData, useParams } from "react-router";
import Error from "../assets/App-Error.png";

import download from "../assets/icon-downloads.png";
import star from "../assets/icon-ratings.png";
import review from "../assets/icon-review.png";
import { toast, ToastContainer } from "react-toastify";
import {
  ComposedChart,
  Line,
  Area,
  Bar,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
  ResponsiveContainer,
} from "recharts";
import { setItem } from "../utils/LocalStorage";

const AppDetails = () => {
  const allData = useLoaderData();
  const params = useParams();
  const pID = parseInt(params.id);
  const [isInstalled, setIsInstalled] = useState(false);

  const findData = allData.find((card) => card.id === pID);

  const handleClick = () => {
    setItem(findData);
    toast.success("Success! App is installing");

    setIsInstalled(true);
  };

  return (
    <>
      <ToastContainer
        position="top-right"
        autoClose={3000}
        hideProgressBar={false}
        closeOnClick
        pauseOnHover
        draggable
        theme="colored"
      />
      {!findData ? (
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
      ) : (
        <div>
          <div className="flex gap-8 flex-col md:flex-row">
            <div>
              <img
                className="h-72 w-full md:max-w-72"
                src={findData.image}
                alt=""
              />
            </div>

            <div className="flex-1">
              <div className="border-b border-gray-300 pb-5">
                <p className="text-3xl font-bold">{findData.title}</p>
                <p className="text-gray-400">
                  Developed by{" "}
                  <span className="text-[#9f62f2]">{findData.companyName}</span>
                </p>
              </div>

              <div className="flex gap-15 mt-5">
                <div className="space-y-1">
                  <img src={download} alt="" />
                  <p className="text-gray-400">Downloads</p>
                  <p className="text-4xl font-bold">
                    <span>{findData.downloads}</span>M
                  </p>
                </div>
                <div className="space-y-1">
                  <img src={star} alt="" />
                  <p className="text-gray-400">Average Ratings</p>
                  <p className="text-4xl font-bold">{findData.ratingAvg}</p>
                </div>
                <div className="space-y-1">
                  <img src={review} alt="" />
                  <p className="text-gray-400">Total Reviews</p>
                  <p className="text-4xl font-bold">
                    <span>{findData.reviews}</span>K
                  </p>
                </div>
              </div>

              <button
                onClick={handleClick}
                disabled={isInstalled}
                className="btn mt-3 bg-[#00d390] text-white text-lg rounded-md"
              >
                {isInstalled
                  ? "Installed"
                  : `Install Now (${findData.size} MB)`}
              </button>
            </div>
          </div>

          {/* chart */}
          <div className=" h-96 w-full mt-10 ">
            <p className="text-2xl font-bold mb-7">Ratings</p>

            <div>
              <ResponsiveContainer width="100%" height={400}>
                <ComposedChart
                  data={findData.ratings}
                  margin={{ top: 20, right: 20, bottom: 20, left: 20 }}
                >
                  <CartesianGrid stroke="#f5f5f5" />
                  <XAxis dataKey="name" />
                  <YAxis />
                  <Tooltip />
                  <Legend />
                  <Bar dataKey="count" barSize={20} fill="#413ea0" />
                </ComposedChart>
              </ResponsiveContainer>
            </div>
          </div>

          {/* description */}

          <div className=" mt-16 border-t border-gray-300 pt-6">
            <p className="text-2xl font-bold mb-5">description</p>
            <p className="text-gray-400">{findData.description}</p>
          </div>
        </div>
      )}
    </>
  );
};

export default AppDetails;
