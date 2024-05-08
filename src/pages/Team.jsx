import React from "react";
import Ndaru from "../assets/images/Ndaru.png";
import Nyoman from "../assets/images/Nyoman.png";
import Baam from "../assets/images/Baam.png";

const Team = () => {
  return (
    <div className="mx-auto my-24 max-w-screen-xl">
      <h2 className="my-5 text-center text-5xl font-bold">TIM</h2>
      <div className="flex flex-col justify-center items-center lg:grid grid-cols-3 place-items-center">
        <div className="my-10 w-fit items-center text-center">
          <img src={Nyoman} alt="Image Nyoman" />
          <h2 className="mt-5 text-xl font-bold">I Nyoman Karma D.N.W</h2>
        </div>
        <div className="my-10 w-fit text-center">
          <img src={Baam} alt="Image Baam" />
          <h2 className="mt-5 text-xl font-bold">M. Albaab Ridho P</h2>
        </div>
        <div className="my-10 w-fit text-center">
          <img src={Ndaru} alt="Image Ndaru" />
          <h2 className="mt-5 text-xl font-bold">Ndaru Windra Sayidinaa</h2>
        </div>
      </div>
    </div>
  );
};

export default Team;
