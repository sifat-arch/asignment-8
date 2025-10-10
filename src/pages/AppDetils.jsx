import React, { useEffect, useState } from "react";
import { useLoaderData, useParams } from "react-router";
import download from "../assets/icon-downloads.png";
import star from "../assets/icon-ratings.png";
import review from "../assets/icon-review.png";
import { toast, ToastContainer } from "react-toastify";
import {
  ComposedChart,
  Bar,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
  ResponsiveContainer,
} from "recharts";
import { getItem, setItem } from "../utils/LocalStorage";
import AppError from "./AppError";

const AppDetails = () => {
  const allData = useLoaderData();
  const params = useParams();
  const pID = parseInt(params.id);
  const [isInstalled, setIsInstalled] = useState(false);

  const findData = allData.find((card) => card.id === pID);

  useEffect(() => {
    const loadedData = getItem();

    const isavalbleData = loadedData.some((item) => item.id === findData.id);

    if (isavalbleData) {
      setIsInstalled(true);
      return;
    }
  }, []);

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
              {isInstalled ? "Installed" : `Install Now (${findData.size} MB)`}
            </button>
          </div>
        </div>

        {/* chart */}
        <div className="h-96 w-full mt-10">
          <p className="text-2xl font-bold mb-7">Ratings</p>

          <div>
            <ResponsiveContainer width="100%" height={400}>
              <ComposedChart
                data={findData.ratings}
                layout="vertical"
                margin={{ top: 20, right: 20, bottom: 20, left: 40 }}
              >
                <CartesianGrid stroke="#f5f5f5" />
                <XAxis type="number" />
                <YAxis dataKey="name" type="category" /> <Tooltip />
                <Legend />
                <Bar dataKey="count" barSize={20} fill="orange" />
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
    </>
  );
};

export default AppDetails;
