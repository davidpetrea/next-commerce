import React from "react";

const OffersSkeleton = () => {
  const size = 10;
  const itemsArray = [];
  for (let i = 1; i <= size; i++) {
    itemsArray.push(<OfferItem key={i} />);
  }

  return (
    <div className="flex flex-col gap-2 my-4">
      {itemsArray.map((item) => item)}
    </div>
  );
};

const OfferItem = () => {
  return (
    <div className="bg-slate-50 rounded-md p-4 flex flex-col md:flex-row items-start md:items-center gap-2 text-black shadow-dp04 h-[88px]">
      <div className="hidden md:flex flex-col gap-2 flex-1 animate-pulse ">
        <div className="bg-gray-300 h-4 w-32 rounded-lg"></div>
        <div className="bg-gray-300 h-4 w-28 rounded-lg"></div>
      </div>
      <div className="flex gap-2 flex-1 items-center animate-pulse">
        <div className="bg-gray-300 rounded-full h-14 w-14" />
        <div className="flex flex-col gap-2">
          <div className="bg-gray-300 h-4 w-28 rounded-lg"></div>
          <div className="bg-gray-300 h-4 w-28 rounded-lg"></div>
        </div>
      </div>
    </div>
  );
};

export default OffersSkeleton;
