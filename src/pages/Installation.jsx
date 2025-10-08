import React, { useState } from "react";
import app from "../assets/app-stor.png";
import download from "../assets/icon-downloads.png";
import star from "../assets/icon-ratings.png";
import { getItem } from "../utils/LocalStorage";

const Installation = () => {
  const storedData = getItem();
  const [sort, setSort] = useState();

  const [sortedData, setSortedData] = useState(storedData);

  const handleSort = (type) => {
    setSort(type);

    if (type === "Low-High") {
      const sortLowToHigh = [...sortedData].sort(
        (a, b) => a.downloads - b.downloads
      );
      setSortedData(sortLowToHigh);
    }
    if (type === "High-Low") {
      const sortHihtToLow = [...sortedData].sort(
        (a, b) => b.downloads - a.downloads
      );
      setSortedData(sortHihtToLow);
    }
  };

  const handleRemove = (id) => {
    const updatedData = storedData.filter((data) => data.id !== id);

    localStorage.setItem("installedData", JSON.stringify(updatedData));

    setSortedData(updatedData);
  };
  return (
    <div>
      <div className="text-center">
        <p className="text-3xl font-bold">Your Installed Apps</p>
        <p className="text-gray-400">
          Explore All Trending Apps on the Market developed by us
        </p>
      </div>

      <div>
        <div className="flex justify-between items-center mt-10">
          <p className="text-xl font-bold">
            <span>({storedData.length}) Apps Found</span>
          </p>

          <div>
            <details className="dropdown">
              <summary className="btn m-1">
                Sort By {sort ? sort : "Size"}
              </summary>
              <ul className="menu dropdown-content bg-base-100 rounded-box z-1 w-30 p-2 shadow-sm">
                <li className="text-gray-300">
                  <a>Sort By Size</a>
                </li>
                <li>
                  <a onClick={() => handleSort("Low-High")}>Low-High</a>
                </li>
                <li>
                  <a onClick={() => handleSort("High-Low")}>High-Low</a>
                </li>
              </ul>
            </details>
          </div>
        </div>
      </div>

      {/* cards */}

      {sortedData.length === 0 ? (
        <p className="text-center mt-50 text-7xl text-gray-300 font-bold">
          No Cards
        </p>
      ) : (
        sortedData.map((data) => (
          <div
            key={data.id}
            className="flex justify-between mt-3 shadow-lg border border-gray-200 items-center p-4 rounded-md"
          >
            <div className="flex gap-7 items-center">
              <img className="w-30 h-30" src={data.image} alt="" />
              <div>
                <p className="text-xl font-bold">{data.title}</p>

                <div className="flex gap-6 items-center mt-4">
                  <div className="flex gap-1">
                    <img className="w-6" src={download} alt="" />
                    <p className="text-[#00D390]">
                      {" "}
                      <span>{data.downloads}</span>M
                    </p>
                  </div>

                  <div className="flex gap-1">
                    <img className="w-6" src={star} alt="" />
                    <p className="text-[#FF8811]">{data.ratingAvg}</p>
                  </div>

                  <p className="text-gray-400">
                    <span>{data.size}</span>MB
                  </p>
                </div>
              </div>
            </div>

            <button
              className="btn rounded-md bg-[#00D390] text-white"
              onClick={() => handleRemove(data.id)}
            >
              Uninstall
            </button>
          </div>
        ))
      )}
    </div>
  );
};

export default Installation;
