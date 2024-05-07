import React from "react";

export const CardCalculating = ({ imgSrc, title, name }) => {
  return (
    <li className="my-10">
      <button
        type="button"
        className="flex h-80 w-64 flex-col items-center justify-between rounded-xl bg-[#BCFADE] "
      >
        <img src={imgSrc} alt={title} className="mt-10 w-40" />

        <div className="mx-10 mt-2 flex h-14 w-64 items-center justify-center rounded-xl bg-[#6af56f]">
          <p className="text-base font-semibold text-black/80">{name}</p>
        </div>
      </button>
    </li>
  );
};
