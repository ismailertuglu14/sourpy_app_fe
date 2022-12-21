import React from "react";

const ActiveProductsCard = () => {
  return (
    <div className="flex flex-col justify-between w-96 h-52 p-6 rounded-lg bg-lightPink ">
      <div>
        <p className="text-2xl text-white font-extrabold">69</p>
        <p className="text-lg text-white font-light">Listed Products</p>
      </div>
      <div>
        <div className="flex  justify-between my-2">
          <p className="text-white font-light">53 sold</p>
          <p className="text-white font-light">82%</p>
        </div>
        <div className="w-full bg-orange-200 rounded-xl">
          <div className="bg-white rounded h-3 w-[82%] "></div>
        </div>
      </div>
    </div>
  );
};

export default ActiveProductsCard;
