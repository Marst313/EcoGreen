import React, { useState } from "react";
import { CardCalculating } from "../components/CardCalculating";
import Motor from "../assets/images/Motor.png";
import Mobil from "../assets/images/Mobil.png";
import Pesawat from "../assets/images/Pesawat.png";
import Pesawat2 from "../assets/images/Pesawat2.png";
import Kereta from "../assets/images/Kereta.png";
import Orang from "../assets/images/Orang.png";

const Calculating = () => {
  const [currentCard, setCurrentCard] = useState(0);

  return (
    <div className="mx-auto mt-36 flex max-w-screen-xl flex-col gap-5">
      <div className="mt-5 flex justify-center">
        <h1 className="text-[40px] font-extrabold text-[#729975]">
          Perhitungan Karbon
        </h1>
      </div>
      <div>
        <h2 className="text-[25px] font-bold text-[#729975]">
          Kendaraaan Apa Yang Sering Kamu Gunakan ?
        </h2>
      </div>

      <ul className="flex items-center justify-between">
        <CardCalculating imgSrc={Motor} title={"ImageMotor"} name={"Motor"} />
        <CardCalculating
          imgSrc={Pesawat}
          title={"ImagePesawat"}
          name={"Pesawat"}
        />
        <CardCalculating imgSrc={Mobil} title={"ImageMobil"} name={"Mobil"} />
        <CardCalculating
          imgSrc={Kereta}
          title={"ImageKereta"}
          name={"Kereta"}
        />
      </ul>

      {/*   <div className="w-100% mx-10 my-5 h-80 rounded-2xl bg-[#D2FFD5] p-5">
        <div>
          <h2 className="text-xl font-bold">Jejak Langkah (Km/hari)</h2>
        </div>

        <div className="ml-10 flex w-full items-center justify-center">
          <div className="mt-10 flex w-[90%]">
            <div>
              <img src={Orang} alt="Image Orang" className="" />
            </div>
            <div>
              <div className="mx-10 flex justify-between">
                <p>0 Km</p>
                <p>100 Km </p>
              </div>
              <div className="mx-10 w-[60rem]">
                <input
                  type="range"
                  min="0"
                  max="100"
                  step="1"
                  className="h-4 w-full appearance-none rounded-lg bg-[#65A2FD]"
                />
              </div>
              <div className=" mx-10 flex w-[60rem] justify-between">
                <p>0</p>
                <p>25</p>
                <p>50</p>
                <p>75</p>
                <p>100</p>
              </div>
            </div>
            <div>
              <img src={Pesawat2} alt="Image Pesawat" />
            </div>
          </div>
        </div>

        <div className="mt-5 flex w-full justify-center">
          <input
            type="text"
            placeholder="/Km"
            className="w-44 appearance-none rounded-lg text-center outline-none focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
        </div>
        <div className="flex justify-center">
          <div className="mt-5 flex w-[60rem] justify-between">
            <div>
              <p className="text-[90%] font-bold">
                Jumlah Emisi (Co2 Ton/Tahun)
              </p>
              <input
                type="text"
                className=" mt-2 w-44 appearance-none rounded-lg text-center outline-none focus:outline-none focus:ring-2 focus:ring-blue-500"
              />
            </div>
            <div>
              <p className="text-[90%] font-bold">Total Emisi (Co2/Tahun)</p>
              <input
                type="text"
                className=" mt-2 w-44 appearance-none rounded-lg text-center outline-none focus:outline-none focus:ring-2 focus:ring-blue-500"
              />
            </div>
          </div>
        </div>
      </div> */}

      <button className="to-thirdGreend  mx-auto mt-10 w-52 rounded-md bg-gradient-to-t from-primaryGreen p-5 font-bold text-white ">
        Hitung Sekarang !
      </button>
    </div>
  );
};

export default Calculating;
