import React, { useState } from "react";
import { API_OPTIONS, POSTER_URL } from "../utils/constants";
import ReactModal from "react-modal";
import Iframe from "./Iframe";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faCalendarAlt, faThumbsUp
} from "@fortawesome/free-solid-svg-icons";

export const MovieCard = ({ movieData }) => {
  const [showModal, setShowModal] = useState(false);
  const [trailerInfo, setTrailerInfo] = useState(null);
console.log(trailerInfo);

  const trailerDetailsHandler = async () => {
    setShowModal(true);
    if (movieData?.id) {
      try {
        const response = await fetch(
          `https://api.themoviedb.org/3/movie/${movieData?.id}/videos?language=en-US`,
          API_OPTIONS
        );
        const data = await response.json();
        const filterData = data?.results?.filter(
          (item) => item.type === "Trailer"
        );
        const trailer = filterData?.length ? filterData[0] : data.results[0];
        setTrailerInfo(trailer);
      } catch (error) {
        console.error("Error fetching trailer details:", error);
      }
    }
  };

  const closeModal = () => {
    setShowModal(false);
  };

  return (
    <div>
      <div
        className="w-[120px] md:w-[170px] mr-3 hover:scale-90 hover:origin-center hover:ease-in hover:duration-150"
        onClick={trailerDetailsHandler}
      >
        <img
          className="rounded-md"
          src={POSTER_URL + movieData?.poster_path}
          alt="Poster"
        />
      </div>

      <ReactModal
        isOpen={showModal}
        onRequestClose={closeModal}
        ariaHideApp={false}
      >
        <button
          className="absolute top-3 right-4 p-[10px] pt-[5px] float-right clear-both font-medium text-[22px] leading-[14px] bg-black rounded-[50%] text-[#ff0000] hover:text-white"
          onClick={closeModal}>x</button>
          {!trailerInfo && <div className="shimmerBG"></div>}
          {trailerInfo && <Iframe trailerVideo={trailerInfo} auto={'0'}/>}
          <div className="pt-3 pr-3 pl-3">
            <div><span className="text-[24px] text-[#ff0000] font-bold mr-3">{movieData?.title}</span>
            <span className="mr-3 text-[#3AF8FF]"><FontAwesomeIcon
                className="text-[16px] md:text-[18px] font-extrabold px-1"
                icon={faCalendarAlt}
              />{movieData?.release_date}</span>
            <span className="mr-3 text-[#228b22] font-bold">{movieData?.vote_count}<FontAwesomeIcon
                className="text-[16px] md:text-[18px] font-extrabold px-1"
                icon={faThumbsUp}
              /></span></div>
            <p className="text-[14px] text-gray-400">{movieData?.overview}</p>
        </div>
      </ReactModal>
    </div>
  );
};
