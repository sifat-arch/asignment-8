import React from "react";
import play from "../assets/play.png";
import app from "../assets/app-stor.png";
import hero from "../assets/hero.png";
import { Link, useLoaderData } from "react-router";
import Cards from "../components/Cards";

const Home = () => {
  const cardData = useLoaderData();
  const slicedCardData = cardData.slice(0, 8);

  return (
    <div>
      {/* banner section */}
      <div className="text-center space-y-3">
        <h1 className="text-4xl font-bold">
          We Build <br /> <span className="text-[#9f62f2]">Productive</span>{" "}
          Apps
        </h1>
        <p className="text-gray-400 mb-8">
          {" "}
          AtHERO.IO, we craft innovative apps designed to make everyday life
          simpler, smarter, and more exciting.
          <br />
          Our goal is to turn your ideas into digital experiences that truly
          make an impact.{" "}
        </p>

        <div>
          <a
            href="https://play.google.com/store/games?device=windows"
            target="_blank"
            className="btn"
          >
            <span>
              <img className="w-6" src={play} alt="" />
            </span>
            Google Play
          </a>
          <a
            href="https://www.apple.com/app-store/"
            target="_blank"
            className="btn ml-3 px-5.5"
          >
            <span>
              <img className="w-6" src={app} alt="" />
            </span>
            App Store
          </a>
        </div>

        <div>
          <img src={hero} className="block mx-auto mt-10 w-2/4" alt="" />

          <div className="border w-full py-20 bg-gradient-to-r from-blue-500 to-purple-600 text-white p-6 rounded-xl">
            <h1 className="text-white text-3xl font-bold mb-10">
              Trusted by Millions, Built for You
            </h1>
            <div className="flex justify-center gap-14">
              <div>
                <p className="text-white text-sm">Total Reviews</p>
                <p className="text-white text-4xl font-bold">29.6M</p>
                <p className="text-white text-sm">21% more than last month</p>
              </div>
              <div>
                <p className="text-white text-sm">Total Downloads</p>
                <p className="text-white text-4xl font-bold">906K</p>
                <p className="text-white text-sm">46% more than last month</p>
              </div>
              <div>
                <p className="text-white text-sm">Active Apps</p>
                <p className="text-white text-4xl font-bold">132+</p>
                <p className="text-white text-sm">31 more will Launch</p>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="mt-12">
        <div className="text-center">
          <h1 className="text-xl font-bold">Trending Apps</h1>
          <p className="text-gray-400">
            Explore All Trending Apps on the Market developed by us
          </p>
        </div>

        <div className="grid grid-cols-4 gap-5 mt-7">
          {slicedCardData.map((card) => (
            <Cards key={card.id} card={card} />
          ))}
        </div>

        <Link to="/apps">
          <button className="btn bg-[#9f62f2] rounded-md text-white block mx-auto mt-8 ">
            Show All
          </button>
        </Link>
      </div>
    </div>
  );
};

export default Home;
