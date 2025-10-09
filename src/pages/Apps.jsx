import React, { useState } from "react";
import { useLoaderData } from "react-router";
import Cards from "../components/Cards";
import LoadingSpinner from "../components/LoadingSpiner";
import NotFoundPage from "../components/NotFoundPage";

const Apps = () => {
  const allCardData = useLoaderData();

  const [search, setSearch] = useState("");
  const [loading, setLoading] = useState(false);

  const handleSearch = (e) => {
    setSearch(e.target.value);
    setLoading(true);

    setTimeout(() => {
      setLoading(false);
    }, 50);
  };

  const searchedData = allCardData.filter((card) =>
    card.title.toLocaleLowerCase().includes(search.trim().toLocaleLowerCase())
  );

  return (
    <div>
      <div className="text-center mt-6 space-y-2">
        <h1 className="text-3xl font-bold">Our All Applications</h1>

        <p className="text-gray-400">
          Explore All Apps on the Market developed by us. We code for Millions
        </p>
      </div>

      <div className="flex justify-between items-center mt-10">
        <p className="text-xl font-bold">
          <span>({searchedData.length}) Apps Found</span>
        </p>

        <div>
          <label className="input">
            <svg
              className="h-[1.4em] opacity-50"
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
            >
              <g
                strokeLinejoin="round"
                strokeLinecap="round"
                strokeWidth="2.5"
                fill="none"
                stroke="currentColor"
              >
                <circle cx="11" cy="11" r="8"></circle>
                <path d="m21 21-4.3-4.3"></path>
              </g>
            </svg>
            <input
              className="w-60 text-lg"
              type="search"
              required
              placeholder="Search"
              value={search}
              onChange={handleSearch}
            />
          </label>
        </div>
      </div>

      <div className="grid grid-cols-4 gap-5 mt-4">
        {loading ? (
          <LoadingSpinner text="Searching apps..." />
        ) : searchedData.length === 0 ? (
          <NotFoundPage />
        ) : (
          searchedData.map((card) => <Cards key={card.id} card={card} />)
        )}
      </div>
    </div>
  );
};

export default Apps;
