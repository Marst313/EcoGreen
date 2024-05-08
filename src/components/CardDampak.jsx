import React from "react";

export const CardDampak = ({ imgSrc, title, name }) => {
  return (
    <div className="my-5 lg:my-10 lg:ml-10 w-fit">
      <div className="flex h-96 w-80 items-center justify-center rounded-xl bg-[#BCFADE] p-5">
        <img src={imgSrc} alt={title} className="w-48" />
      </div>
      <div>
        <div className="mt-2 flex h-20 w-80 items-center justify-center rounded-xl bg-[#43A046] p-5">
          <p className="text-center text-[25px] text-white">{name}</p>
        </div>
      </div>
    </div>
  );
};

export default CardDampak;
