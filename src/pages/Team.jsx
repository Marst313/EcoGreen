import React from "react";
import Ndaru from "../assets/images/Ndaru.png";
import Nyoman from "../assets/images/Nyoman.png";
import Baam from "../assets/images/Baam.png";

const Team = () => {
  return (
    <div className="my-5">
      <div className="flex items-center justify-center text-center">
        <h2 className=" my-5 w-[50%] text-[250%] font-bold">TEAM</h2>
      </div>

      <div className="mx-10 flex w-auto justify-between">
        <div className="mx-10 my-10 w-48 flex-col items-center justify-center text-center">
          <img src={Nyoman} alt="Image Nyoman" />
          <div className="mt-2 h-10 text-center ">
            <h2 className="mt-5 text-[100%] font-bold">I Nyoman Karma D.N.W</h2>
          </div>
        </div>
        <div className="mx-10 my-10 w-48 flex-col items-center justify-center text-center">
          <img src={Baam} alt="Image Baam" />
          <div className="mt-2 h-10 text-center ">
            <h2 className="mt-5 text-[100%] font-bold">M. Albaab Ridho P</h2>
          </div>
        </div>
        <div className="mx-10 my-10 w-48 flex-col items-center justify-center text-center">
          <img src={Ndaru} alt="Image Ndaru" />
          <div className="mt-2 h-10 text-center ">
            <h2 className="mt-5 text-[100%] font-bold">Ndaru Windra Sayidinaa</h2>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Team;
