import React, { useRef } from "react";
import { BACKGROUND_IMG } from "../utils/constants";
import { SUPPORTED_LANGUAGES } from "../utils/constants";
import { useDispatch, useSelector } from "react-redux";
import { changeLanguage } from "../utils/redux/configSlice";
import GPTSearchBar from "./GPT-SearchBar";
import GPTSuggestions from "./GPT-Suggestions";

const GPTSearch = () => {
  const dispatch = useDispatch();
  const langChangeHandler = (e) => {
    dispatch(changeLanguage(e.target.value));
  };

  return (
    <div>
      <div className="bg-gradient-to-b from-black fixed w-full">
        <img
          className="h-[100vh] w-full object-cover opacity-30"
          src={BACKGROUND_IMG}
          alt="backgroundImg"
        />
      </div>
      <select
        onChange={langChangeHandler}
        className="fixed right-9 bottom-[5%] bg-[rgba(0,0,0,0.7)] p-2 border-none outline-none text-[12px] md:text-[14px] font-bold text-gray-400 rounded-md z-20"
      >
        {SUPPORTED_LANGUAGES?.map((lang) => (
          <option key={lang.code} value={lang.code}>
            {lang.name}
          </option>
        ))}
      </select>
      <div className="absolute top-[16%] md:top-[22%] w-full">
        <GPTSearchBar />
        <GPTSuggestions/>
      </div>
    </div>
  );
};

export default GPTSearch;
