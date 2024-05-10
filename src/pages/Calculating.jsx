import React, { useState } from "react";
import { CardCalculating } from "../components/CardCalculating";
import { cardList } from "../utils/constant";

import CalculatingModalTransport from "../components/CalculatingModalTransport";
import CalculatingModalHouse from "../components/CalculatingModalHouse";
import CalculatingModalFood from "../components/CalculatingModalFood";
import CalculatingModalBio from "../components/CalculatingModalBio";
import ResultModal from "../components/ResultModal";

const Calculating = () => {
  const [openModal, setOpenModal] = useState(0);
  const [hasilEmisi, setHasilEmisi] = useState("");
  const [data, setData] = useState({
    //  Bio
    age: 0, //umur user
    gender: "Pria", // jenis kelamin user
    location: "", //lokasi user

    // House
    people: 0, // jumlah orang dirumah user
    energyType: 0, // energy yang dipilih user 0:solar 1:listrik 2:gas
    energyMonth: 0, // penggunaan energy /kwh
    waterMonth: 0, // penggunaan air

    // Food
    meat: "Ayam", // daging yang dimakan 0:ayam 1:sapi 2:ikan
    timeMeat: 0, // kg daging

    milk: "Susu", // susu yang diminum 0:susu 1:keju 2:yogurt
    timeMilk: 0, // liter

    // tranposrt
    transport: "Motor", // kendaraan yg digunakan 0:motor 1:pesawat 2:mobil 3:kereta
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
            <li className="my-10" key={index}>
              <button
                type="button"
                className={`flex h-80 w-64 flex-col items-center justify-between overflow-hidden rounded-xl border-2 bg-[#BCFADE] ${item.name === data.transport ? "border-red-500" : "  hover:scale-105"}`}
                onClick={() => setData({ ...data, transport: item.name })}
              >
                <img src={item.img} alt={item.alt} className="mt-10 w-40" />

                <div className="mx-10 mt-2 flex h-14 w-64 items-center justify-center rounded-xl bg-[#6af56f]">
                  <p className="text-base font-semibold text-black/80">
                    {item.name}
                  </p>
                </div>
              </button>
            </li>
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

      {/* Transport */}
      <CalculatingModalTransport
        openModal={openModal}
        setOpenModal={setOpenModal}
        data={data}
        setData={setData}
        setHasilEmisi={setHasilEmisi}
        hasilEmisi={hasilEmisi}
      />

      {/* Result */}
      <ResultModal
        openModal={openModal}
        setOpenModal={setOpenModal}
        data={data}
        setData={setData}
        setHasilEmisi={setHasilEmisi}
        hasilEmisi={hasilEmisi}
      />
    </div>
  );
};

export default Calculating;
