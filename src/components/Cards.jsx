import React from "react";
import download from "../assets/icon-downloads.png";
import star from "../assets/icon-ratings.png";
import { useNavigate } from "react-router";

const Cards = ({ card }) => {
  const navigate = useNavigate();

  const handleClick = () => {
    navigate(`/apps/${card.id}`);
  };
  return (
    <div
      className="card bg-base-100 shadow-sm p-3 cursor-pointer hover:scale-105 transition ease-in-out"
      onClick={handleClick}
    >
      <figure>
        <img
          className="h-48 w-full overflow-hidden"
          src={card.image}
          alt="Shoes"
        />
      </figure>
      <div className="space-y-3 mt-4">
        <h2 className="card-title">{card.title}</h2>
        <div className="flex justify-between px-2">
          <p className="flex items-center gap-1 bg-gray-200 p-1 rounded-sm  text-[#00D390]">
            <span>
              <img className="w-4" src={download} alt="" />
            </span>{" "}
            {card.downloads}
            <span>M</span>
          </p>
          <p className="flex items-center gap-1 bg-gray-200 p-1 rounded-sm text-[#FF8811]">
            <span>
              <img className="w-4" src={star} alt="" />
            </span>{" "}
            {card.ratingAvg}{" "}
          </p>
        </div>
      </div>
    </div>
  );
};

export default Cards;
