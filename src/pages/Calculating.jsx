import React, { useState } from "react";
import { CardCalculating } from "../components/CardCalculating";
import { cardList } from "../utils/constant";

import CalculatingModalTransport from "../components/CalculatingModalTransport";
import CalculatingModalHouse from "../components/CalculatingModalHouse";
import CalculatingModalFood from "../components/CalculatingModalFood";
import CalculatingModalBio from "../components/CalculatingModalBio";

const Calculating = () => {
  const [currentCard, setCurrentCard] = useState(0);
  const [openModal, setOpenModal] = useState(0);
  const [data, setData] = useState({
    //  Bio
    age: 0, //umur user
    gender: "pria", // jenis kelamin user
    location: "", //lokasi user

    // House
    people: 0, // jumlah orang dirumah user
    energyType: 0, // energy yang dipilih user 0:solar 1:listrik 2:gas
    energyMonth: 0, // penggunaan energy /kwh
    waterMonth: 0, // penggunaan air

    // Food
    meat: 0, // daging yang dimakan 0:ayam 1:sapi 2:ikan
    timeMeat: "tidak pernah", //seberapa sering makan daging

    milk: 0, // susu yang diminum 0:susu 1:keju 2:yogurt
    timeMilk: "tidak pernah",

    // tranposrt
    transport: 0, // kendaraan yg digunakan 0:motor 1:pesawat 2:mobil 3:kereta
    km: 0, //seberapa jauh berkendara
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
      <ul className="flex justify-center overflow-x-auto lg:w-full lg:justify-between lg:overflow-hidden">
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
