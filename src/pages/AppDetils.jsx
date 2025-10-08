import React from "react";
import { useLoaderData, useParams } from "react-router";
import demo from "../assets/demo-app (1).webp";
import download from "../assets/icon-downloads.png";
import star from "../assets/icon-ratings.png";
import review from "../assets/icon-review.png";

const AppDetails = () => {
  const allData = useLoaderData();
  const params = useParams();
  const pID = parseInt(params.id);

  const findData = allData.find((card) => card.id === pID);

  return (
    <div>
      <div className="flex gap-8">
        <div>
          <img className="h-72 max-w-72" src={findData.image} alt="" />
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

          <button className="btn mt-3 bg-[#00d390] text-white text-lg rounded-md">
            Install Now (291 MB){" "}
          </button>
        </div>
      </div>
    </div>
  );
};

export default AppDetails;
