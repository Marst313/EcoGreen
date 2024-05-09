import React from "react";
import { cardListHouse } from "../utils/constant";
import { CardCalculating } from "./CardCalculating";
import Lampu from "../assets/images/lamp.png";
import Water from "../assets/images/water.png";

const CalculatingModalHouse = ({
  openModal,
  setOpenModal,
  setData,
  data,
  currentCard,
  setCurrentCard,
}) => {
  const handleOnClick = (e) => {
    e.preventDefault();
    setOpenModal(3);
  };

  return (
    <div
      className={`fixed left-0 top-0 z-[9999] flex h-full w-full  flex-col items-center   justify-center gap-8 bg-white/10 px-5 backdrop-blur-md transition-all duration-500  ${openModal === 2 ? "translate-x-0" : "translate-x-full"} `}
    >
      <h1 className="mx-auto  w-full max-w-screen-xl self-start justify-self-start text-4xl font-bold text-secondaryGreen">
        Menghitung Karbon
      </h1>

      {/* close button */}
      <div className=" flex h-3/4 w-full max-w-screen-xl justify-between gap-5 rounded-lg ">
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

        <div className="flex w-full flex-col overflow-scroll rounded-lg border-2 border-black/30 bg-white p-5 ">
          <h1 className="text-center text-3xl font-semibold text-secondaryGreen">
            Rumah Tangga
          </h1>

          <div className="mt-5">
            <h2 className="text-2xl font-bold">Jumlah Orang di Rumah</h2>
          </div>

          <div>
            <h2 className="text-2xl font-bold">
              Sumber Energi yang di Gunakan
            </h2>
            <ul className="flex w-full justify-center gap-12 overflow-x-auto pl-96 lg:justify-between lg:p-0">
              {cardListHouse.map((item, index) => {
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
          </div>

          <div className="mt-10 flex  justify-center w-full items-center gap-5 ">
            <img src={Lampu} alt="Image Orang" className="w-14" />
            <label htmlFor="" className="font-bold">
              0 Kwh
            </label>
            <input
              type="range"
              min="0"
              max="100"
              step="1"
              className="h-2 w-1/2 appearance-none rounded-lg bg-[#65A2FD]"
              value={""}
              onChange={""}
            />
            <label htmlFor="" className="font-bold">
              2K+ Kwh
            </label>
          </div>

          <div className="mt-10 flex  justify-center w-full items-center gap-5 ">
            <img src={Water} alt="Image Orang" className="w-14" />
            <label htmlFor="" className="font-bold">
              0
            </label>
            <input
              type="range"
              min="0"
              max="100"
              step="1"
              className="h-2 w-2/4 appearance-none rounded-lg bg-[#65A2FD]"
              value={""}
              onChange={""}
            />
            <label htmlFor="" className="font-bold">
              2K+
            </label>
          </div>

          <button
            type="button"
            onClick={handleOnClick}
            className="mt-5 w-full rounded-lg bg-fourthGreen py-3 text-white hover:bg-fourthGreen/70 hover:text-white/80"
          >
            Next
          </button>
        </div>
      </div>
    </div>
  );
};

export default CalculatingModalHouse;
