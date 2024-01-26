import Image from "next/image";
import React from "react";

const Featured = () => {
  return (
    <div className=" w-screen overflow-x-scroll text-red-500">
      {/* WRAPPER */}
      <div className="w-max flex">
        {/* SINGLE ITEM */}
        <div className=" w-screen h-[60vh] flex flex-col items-center justify-around p-4">
          {/* IMAGE CONATINER */}
          <div className="relative flex-1 w-full">
            <Image
              src="/temporary/p1.png"
              alt=""
              fill
              className="object-contain"
            />
          </div>
          {/* TEXT CONTAINER */}
          <div className="flex-1 flex flex-col gap-4">
            <h1 className="">Tittle</h1>
            <p>Dese</p>
            <span>123</span>
            <button>Add to cart</button>
          </div>
        </div>
      </div>
    </div>
  );
};
export default Featured;
