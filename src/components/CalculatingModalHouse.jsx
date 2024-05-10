import React from "react";
import { cardListHouse } from "../utils/constant";
import { CardCalculating } from "./CardCalculating";
import Lampu from "../assets/images/lamp.png";
import Water from "../assets/images/water.png";
import DropdownEvenNumbers from "./DropdownOrang";
import jumlahOrangImg from "../assets/images/jumlahOrang.png";

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

  const handleOnClick2 = (e) => {
    e.preventDefault();
    setOpenModal(1);
  };

  return (
    <div
      className={`fixed left-0 top-0 z-[9999] flex h-full w-full  flex-col items-center   justify-center gap-8 bg-white/10 px-5 backdrop-blur-md transition-all duration-500  ${openModal === 2 ? "translate-x-0" : "translate-x-[300%]"} `}
    >
      <h1 className="mx-auto  w-full max-w-screen-xl self-start justify-self-start text-4xl font-bold text-secondaryGreen">
        Menghitung Karbon
      </h1>

      {/* close button */}
      <div className=" flex h-3/4 w-fit max-w-screen-xl justify-between gap-5 rounded-lg ">
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

        <div className="flex w-[30rem] flex-col overflow-scroll rounded-lg border-2 border-black/30 bg-white p-5 lg:w-full ">
          <h1 className="text-center text-3xl font-semibold text-secondaryGreen">
            Rumah Tangga
          </h1>

          <div className="mt-5">
            <h2 className="text-2xl font-bold">Jumlah Orang di Rumah</h2>

            <div className="my-5 flex items-center gap-5">
              <img src={jumlahOrangImg} alt="orang" />
              <DropdownEvenNumbers data={data} setData={setData} />
            </div>
          </div>

          <div>
            <h2 className="text-2xl font-bold">
              Sumber Energi yang di Gunakan
            </h2>
            <ul className="flex w-full justify-center gap-12 overflow-x-auto pl-96 lg:justify-center lg:overflow-x-hidden lg:p-0">
              {cardListHouse.map((item, index) => {
                return (
                  <li className="my-10" key={index}>
                    <button
                      type="button"
                      className={`flex h-80 w-64 flex-col items-center justify-between overflow-hidden rounded-xl border-2 bg-[#BCFADE] ${item.name === data.energyType ? "border-red-500" : "  hover:scale-105"}`}
                      onClick={() =>
                        setData({ ...data, energyType: item.name })
                      }
                    >
                      <img
                        src={item.img}
                        alt={item.alt}
                        className="mt-10 w-40"
                      />

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
          </div>

          <div className="relative mt-10  flex w-full items-center justify-center  gap-5">
            <img src={Lampu} alt="Image Orang" className="w-14" />
            <label htmlFor="range-energy" className="font-bold">
              0 Kwh
            </label>
            <input
              type="range"
              min="0"
              max="3000"
              step="1"
              id="range-energy"
              className="h-2 w-1/2 appearance-none rounded-lg bg-[#65A2FD]"
              value={data.energyMonth}
              onChange={(e) =>
                setData({ ...data, energyMonth: e.target.value })
              }
            />
            <label htmlFor="range-energy" className="font-bold">
              2K+ Kwh
            </label>

            <input
              type="number"
              className="absolute -top-5 right-24 w-20 font-bold"
              value={data.energyMonth}
            />
          </div>

          <div className="relative mt-10  flex w-full items-center justify-center  gap-5">
            <img src={Water} alt="Image Orang" className="w-10" />
            <label htmlFor="water-energy" className="font-bold">
              0 Liter
            </label>
            <input
              type="range"
              min="0"
              max="3000"
              step="1"
              className="h-2 w-2/4 appearance-none rounded-lg bg-[#65A2FD]"
              value={data.waterMonth}
              onChange={(e) => setData({ ...data, waterMonth: e.target.value })}
            />
            <label htmlFor="water-month" className="font-bold">
              2K+ Liter
            </label>

            <input
              type="number"
              className="absolute -top-5 right-24 w-20 font-bold"
              value={data.waterMonth}
            />
          </div>

          <div className="flex">
            <button
              type="button"
              onClick={handleOnClick2}
              className="mr-2 mt-5 w-full rounded-lg bg-fourthGreen py-3 text-white hover:bg-fourthGreen/70 hover:text-white/80"
            >
              Kembali
            </button>
            <button
              type="button"
              onClick={handleOnClick}
              className="mt-5 w-full rounded-lg bg-fourthGreen py-3 text-white hover:bg-fourthGreen/70 hover:text-white/80"
            >
              Lanjut
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CalculatingModalHouse;
