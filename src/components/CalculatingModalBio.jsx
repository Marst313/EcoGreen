import React, { useState } from "react";
import human from "../assets/images/bio.png";
import { genderList } from "../utils/constant";
import DropdownKabupaten from "./DropdownKabupaten";

const CalculatingModalBio = ({ openModal, setOpenModal, setData, data }) => {
  const handleOnClick = (e) => {
    e.preventDefault();
    setOpenModal(2);
  };

  const handleOnChangeAge = (e) => {
    setData({ ...data, age: e.target.value });
  };

  const handleChangeGender = (gender) => {
    setData({ ...data, gender });
  };

  return (
    <div
      className={`fixed left-0 top-0 z-[9999] flex h-full w-full flex-col items-center   justify-center gap-8 bg-white/10 px-5 backdrop-blur-md transition-all duration-500  ${openModal === 1 ? "-translate-x-0" : "translate-x-full"} `}
    >
      <h1 className="mx-auto  w-full max-w-screen-xl self-start justify-self-start text-4xl font-bold text-secondaryGreen">
        Menghitung Karbon
      </h1>

      {/* close button */}
      <div className=" flex h-3/4 w-full max-w-screen-xl justify-center gap-5 rounded-lg ">
        <button
          className="absolute right-5 top-5"
          type="button"
          onClick={() => setOpenModal(false)}
        >
          <label htmlFor="close-button" className="sr-only">
            Close Button
          </label>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            x="0px"
            y="0px"
            width={45}
            height={45}
            viewBox="0,0,256,256"
            className="hover:text-red-500"
            id="close-button"
          >
            <g
              fill="#d01b1b"
              fillRule="nonzero"
              stroke="none"
              strokeWidth={1}
              strokeLinecap="butt"
              strokeLinejoin="miter"
              strokeMiterlimit={10}
              strokeDasharray=""
              strokeDashoffset={0}
              fontFamily="none"
              fontWeight="none"
              fontSize="none"
              textAnchor="none"
              style={{ mixBlendMode: "normal" }}
            >
              <g transform="scale(3.55556,3.55556)">
                <path d="M19,15c-1.023,0 -2.04812,0.39087 -2.82812,1.17188c-1.562,1.562 -1.562,4.09425 0,5.65625l14.17188,14.17188l-14.17187,14.17188c-1.562,1.562 -1.562,4.09425 0,5.65625c0.78,0.78 1.80513,1.17188 2.82813,1.17188c1.023,0 2.04812,-0.39088 2.82813,-1.17187l14.17188,-14.17187l14.17188,14.17188c1.56,1.562 4.09525,1.562 5.65625,0c1.563,-1.563 1.563,-4.09325 0,-5.65625l-14.17187,-14.17187l14.17188,-14.17187c1.562,-1.562 1.562,-4.09425 0,-5.65625c-1.56,-1.561 -4.09625,-1.562 -5.65625,0l-14.17187,14.17188l-14.17187,-14.17187c-0.78,-0.78 -1.80513,-1.17187 -2.82812,-1.17187z" />
              </g>
            </g>
          </svg>
        </button>

        <div className="flex lg:w-1/2 flex-col items-center gap-5 overflow-scroll rounded-lg border-2 border-black/30 bg-white p-5 ">
          <h1 className="text-3xl font-semibold text-secondaryGreen">Bio</h1>

          <div className="t mt-5  flex w-full items-start justify-center gap-5 self-start">
            <img
              src={human}
              alt="human png"
              className=" h-14 w-14 rounded-full bg-[#888F85] p-2"
            />
            <div className="w-1/2 ">
              <label
                htmlFor="default-range"
                className="text-md mb-2 block font-bold text-[#729975]"
              >
                Age
              </label>
              <input
                id="default-range"
                type="range"
                defaultValue={0}
                min={0}
                value={data.age}
                onChange={handleOnChangeAge}
                className="h-2 w-full cursor-pointer appearance-none rounded-lg bg-[#B2D0FE] "
              />
            </div>

            <input
              type="number"
              value={data.age}
              onChange={handleOnChangeAge}
              className="w-20"
            />
          </div>

          <div className="mt-3" >
            <h2 className="self-start text-center font-bold text-xl text-[#729975] ">Jenis Kelamin</h2>

            <ul className="mt-5 flex gap-10">
              {genderList.map((gender) => {
                return (
                  <li
                    key={gender.name}
                    className="flex cursor-pointer flex-col items-center gap-1"
                    onClick={() => handleChangeGender(gender.name)}
                  >
                    <div
                      className={`flex h-40 w-40 items-center justify-center rounded-[3rem] border-2 bg-[#BCFADE]  p-5 ${gender.name === data.gender ? "border-red-500" : ""}`}
                    >
                      <img src={gender.img} alt={gender.name} />
                    </div>

                    <button
                      className={`w-24 rounded-lg bg-fourthGreen px-2.5 py-2 capitalize text-white  ${gender.name === data.gender ? "" : "hover:bg-fourthGreen/80"}`}
                    >
                      {gender.name}
                    </button>
                  </li>
                );
              })}
            </ul>
          </div>

          <div className="mt-3">
            <h1 className="text-[#729975]">Pilih Provinsi di Indonesia</h1>
            <DropdownKabupaten setData={setData} data={data} />
          </div>

          <button
            type="button"
            onClick={handleOnClick}
            className="mt-5 w-full  rounded-lg bg-fourthGreen py-3 text-white hover:bg-fourthGreen/70 hover:text-white/80"
          >
            Next
          </button>
        </div>
      </div>
    </div>
  );
};

export default CalculatingModalBio;
