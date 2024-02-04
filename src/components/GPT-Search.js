import React from "react";
import { BACKGROUND_IMG } from "../utils/constants";
import { SUPPORTED_LANGUAGES } from "../utils/constants";
import { useDispatch, useSelector } from "react-redux";
import { changeLanguage } from "../utils/redux/configSlice";
import lang from "../utils/languageConstants";

const GPTSearch = () => {
    const dispatch = useDispatch();
    const identifier = useSelector((store) => store.config.lang);

  const searchHandler = () => {};
  const langChangeHandler = (e) => {
    console.log('lang---', e.target.value);
    dispatch(changeLanguage(e.target.value));
  }

  return (
    <div>
      <div className="bg-gradient-to-b from-black">
        <img
          className="h-[100vh] w-full opacity-30"
          src={BACKGROUND_IMG}
          alt="backgroundImg"
        />
      </div>
      <select onChange={langChangeHandler}
      className="absolute right-9 bottom-[5%] bg-[rgba(0,0,0,0.7)] p-2 border-none outline-none font-bold text-gray-400 rounded-md">
        {SUPPORTED_LANGUAGES?.map((lang) => (
            <option key={lang.code} value={lang.code}>{lang.name}</option>
        ))}
      </select>
      <div className="absolute top-[30%] left-[50%] w-[60%] p-16 translate-x-[-50%] translate-y-[-50%]">
        <form
          className="grid grid-cols-12 text-[18px] bg-[rgba(0,0,0,0.7)] rounded-lg"
          onSubmit={(e) => {
            e.preventDefault();
          }}
        >
          <input
            className="w-full bg-transparent p-5 text-white col-start-1 col-end-11 outline-none"
            type="text"
            required
            placeholder={lang[identifier].searchPlaceHolder}
          />
          <button
            className="p-2 text-[18px] font-bold text-[#ff0000] rounded-sm w-full hover:text-white col-start-11 col-end-13"
            type="submit"
            onClick={searchHandler}
          >
            {lang[identifier].search}
          </button>
        </form>
      </div>
    </div>
  );
};

export default GPTSearch;
