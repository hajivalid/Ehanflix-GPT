import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPlay, faInfoCircle } from "@fortawesome/free-solid-svg-icons";

export const TrailerTitle = ({ title, overView }) => {
  
  return (
    <div className="pt-[18%] pl-[50px] text-white absolute bg-gradient-to-r from-black w-full h-full">
      <h1 className="text-[40px] font-extrabold ">
        {title}
      </h1>
      <p className="py-4 text-[16px] w-1/3">{overView}</p>
      <div className="flex items-center text-[18px]">
        <button className="py-3 px-8 text-black font-bold bg-white rounded-md hover:opacity-80">
          <FontAwesomeIcon icon={faPlay} />
          <span className="pl-2">Play</span>
        </button>
        <button className="py-3 px-6 mx-2 text-white font-bold bg-gray-600 rounded-md hover:opacity-80">
          <FontAwesomeIcon icon={faInfoCircle} />
          <span className="pl-2">More Info</span>
        </button>
      </div>
    </div>
  );
};
