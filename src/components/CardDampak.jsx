import React from "react";

export const CardDampak = ({ imgSrc, title, name }) => {
  return (
    <div className="my-10 ml-10">
      <div className="mx-10 flex h-96 w-80 items-center justify-center rounded-xl bg-[#BCFADE] p-5">
        <img src={imgSrc} alt={title} className="w-48" />
      </div>
      <div>
        <div className="mx-10 mt-2 flex h-20 w-80 items-center justify-center rounded-xl bg-[#43A046] p-5">
          <p className="text-center text-[25px] text-white">{name}</p>
        </div>
      </div>
    </div>
  );
};

export default CardDampak;
