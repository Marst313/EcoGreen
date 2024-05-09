import React, { useState } from "react";
import { CardCalculating } from "../components/CardCalculating";
import { cardList } from "../utils/constant";

import CalculatingModal2 from "../components/CalculatingModalBio";
import CalculatingModalTransport from "../components/CalculatingModalTransport";
import CalculatingModalHouse from "../components/CalculatingModalHouse";
import CalculatingModalFood from "../components/CalculatingModalFood";
import CalculatingModalBio from "../components/CalculatingModalBio";

const Calculating = () => {
  const [currentCard, setCurrentCard] = useState(0);
  const [openModal, setOpenModal] = useState(0);
  const [data, setData] = useState({
    km: 0,
    people: 0,
    energyType: "solar",
    energyMonth: 0,
    waterMonth: 0,

    age: 0,
    gender: "pria",

    // Food
    meat: "ayam",
    timeMeat: "tidak pernah",

    milk: "susu",
    timeMilk: "tidak pernah",
  });

  return (
    <div
      className="mx-3 mt-32 flex max-w-screen-xl flex-col gap-5 lg:mx-auto lg:mt-36"
      id="calculating"
    >
      <h1 className="text-center text-[40px] font-extrabold text-[#729975]">
        Perhitungan Karbon
      </h1>
      <h2 className="text-center font-bold text-[#729975] lg:text-start lg:text-2xl">
        Kendaraaan Apa Yang Sering Kamu Gunakan ?
      </h2>
      <ul className="flex justify-center overflow-x-auto lg:w-full lg:justify-between">
        {cardList.map((item, index) => {
          return (
            <CardCalculating
              currentCard={currentCard}
              setCurrentCard={setCurrentCard}
              key={item.name}
              {...item}
              index={index}
            />
          );
        })}
      </ul>

      <button
        className="mx-auto  w-52 rounded-md bg-gradient-to-t from-primaryGreen to-thirdGreend p-5 font-bold text-white lg:mt-10 "
        type=""
        onClick={() => setOpenModal(1)}
      >
        Hitung Sekarang !
      </button>

      {/* Bio */}
      <CalculatingModalBio
        openModal={openModal}
        setOpenModal={setOpenModal}
        data={data}
        setData={setData}
      />

      {/* Transport */}
      <CalculatingModalTransport
        openModal={openModal}
        setOpenModal={setOpenModal}
        currentCard={currentCard}
        setCurrentCard={setCurrentCard}
        data={data}
        setData={setData}
      />

      {/* HouseHould */}
      <CalculatingModalHouse
        openModal={openModal}
        setOpenModal={setOpenModal}
        data={data}
        setData={setData}
      />

      {/* Food */}
      <CalculatingModalFood
        openModal={openModal}
        setOpenModal={setOpenModal}
        data={data}
        setData={setData}
      />
    </div>
  );
};

export default Calculating;
