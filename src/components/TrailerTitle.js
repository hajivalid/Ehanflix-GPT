import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPlay, faInfoCircle, faVolumeUp } from "@fortawesome/free-solid-svg-icons";

export const TrailerTitle = ({ title, overView, volumeToggle }) => {
  
  return (
    <div className="pt-[49%] md:pt-[16%] pl-[35px] md:pl-[50px] text-white absolute bg-gradient-to-r h-full flex-col mb:flex-row ">
      <h1 className="text-[16px] md:text-[40px] font-extrabold drop-shadow-2xl">
        {title}
      </h1>
      <p className="hidden md:block py-4 text-[16px] w-1/3 drop-shadow-2xl">{overView}</p>
      {/* <div className="hidden md:flex items-center text-[12px] md:text-[18px]">
        <button className="py-1 px-2 md:py-3 md:px-8 text-black font-bold bg-white rounded-md hover:opacity-80">
          <FontAwesomeIcon icon={faPlay} />
          <span className="pl-2">Play</span>
        </button>
        <button className="py-1 px-2 mx-1 md:mx-3 md:py-3 md:px-8 text-white font-bold bg-gray-600 rounded-md hover:opacity-80">
          <FontAwesomeIcon icon={faInfoCircle} />
          <span className="pl-2">More Info</span>
        </button>
        <button className="py-1 px-2 md:py-3 md:px-8 text-black font-bold bg-white rounded-md hover:opacity-80" onClick={volumeToggle}>
          <FontAwesomeIcon icon={faVolumeUp} />
        </button>
      </div> */}
    </div>
  );
};
