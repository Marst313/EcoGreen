import React from "react";
import { CardCalculating } from "./CardCalculating";
import { cardList } from "../utils/constant";
import Orang from "../assets/images/Orang.png";
import Pesawat2 from "../assets/images/Pesawat2.png";

const CalculatingModalTransport = ({
  openModal,
  setOpenModal,
  currentCard,
  setCurrentCard,
  data,
  setData,
}) => {
  const handleSubmit = (e) => {
    e.preventDefault();

    console.log(data);
  };

  const handleOnChange = (e) => {
    setData({ ...data, km: e.target.value });
  };

  return (
    <div
      className={`fixed left-0 top-0 z-[9999] flex h-full w-full  flex-col items-center   justify-center gap-8 bg-white/10 px-5 backdrop-blur-md transition-all duration-500  ${openModal === 4 ? "translate-x-0" : "translate-x-full"} `}
    >
      <h1 className="mx-auto  w-full max-w-screen-xl self-start justify-self-start text-4xl font-bold text-secondaryGreen">
        Menghitung Karbon
      </h1>
      <div className=" flex h-3/4 w-full max-w-screen-xl justify-between gap-5 rounded-lg ">
        {/* close button */}
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

        <form
          onSubmit={handleSubmit}
          className="flex w-full flex-col items-center rounded-lg border-2 border-black/30 bg-white p-5 "
        >
          <h1 className="text-3xl font-semibold text-secondaryGreen">
            Kendaraan
          </h1>
          <ul className="flex w-full justify-center gap-12 overflow-x-auto pl-96 lg:justify-between lg:p-0 xl:overflow-hidden">
            {cardList.map((item, index) => {
              return (
                <li className="my-10" key={index}>
                  <button
                    type="button"
                    className={`flex h-80 w-64 flex-col items-center justify-between overflow-hidden rounded-xl border-2 bg-[#BCFADE] ${index === data.transport ? "border-red-500" : "  hover:scale-105"}`}
                    onClick={() => setData({ ...data, transport: index })}
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
          <div className="mt-10 flex  w-full items-center justify-center gap-5 ">
            <img src={Orang} alt="Image Orang" className="w-14" />
            <label htmlFor="">0 Km</label>
            <input
              type="range"
              min="0"
              max="100"
              step="1"
              className="h-2 w-3/4 appearance-none rounded-lg bg-[#65A2FD]"
              value={data.km}
              onChange={handleOnChange}
            />
            <label htmlFor="">100 Km</label>

            <img src={Pesawat2} alt="Image Pesawat" className="w-20" />
          </div>
          <div className="mt-5 flex w-full justify-center gap-2">
            <input
              type="text"
              placeholder="/Km"
              id="KM"
              max={100}
              className="w-14 appearance-none rounded-lg text-center outline-none focus:outline-none focus:ring-2 focus:ring-blue-500"
              value={data.km}
              onChange={handleOnChange}
            />
            <label htmlFor="KM">/ KM</label>
          </div>
          <button
            type="submit"
            className="mt-5 w-full rounded-lg bg-fourthGreen py-3 text-white hover:bg-fourthGreen/70 hover:text-white/80"
          >
            Simpan
          </button>
        </form>
      </div>
    </div>
  );
};

export default CalculatingModalTransport;
