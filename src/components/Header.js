import React, { useEffect } from "react";
import logo from "../utils/images/EHANFLIX.png";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faUser,
  faSignOutAlt,
  faSearch,
  faHome,
} from "@fortawesome/free-solid-svg-icons";
import { onAuthStateChanged, signOut } from "firebase/auth";
import { auth } from "../utils/firebase";
import { useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { addUser, removeUser } from "../utils/redux/userSlice";
import { removeMovies } from "../utils/redux/movieSlice";
import { defaultSearchToggle, toggleSearch } from "../utils/redux/searchSlice";
import { defaultLanguage } from "../utils/redux/configSlice";

const Header = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const user = useSelector((store) => store.user);
  const searchToggle = useSelector((store) => store.search.searchToggle);
  const togglePosition = (searchToggle)? "bottom-[0px] md:top-0 right-8 md:right-0" : "top-[186px] md:top-0 right-6 md:right-0";

  const toggleSearchHandler = () => {
    dispatch(toggleSearch());
    dispatch(defaultLanguage());
  };

  const signOutHandler = () => {
    signOut(auth)
      .then(() => {})
      .catch((error) => {});
  };

  // Validating user Authentication on every page load
  useEffect(() => {
    const unSubscribe = onAuthStateChanged(auth, (user) => {
      if (user) {
        const { displayName, email, uid } = user;
        dispatch(addUser({ displayName: displayName, email: email, uid: uid }));
        navigate("/browse");
      } else {
        dispatch(removeUser());
        dispatch(removeMovies());
        dispatch(defaultSearchToggle());
        dispatch(defaultLanguage());
        navigate("/");
      }
    });

    //unSubscribe when the component is unMount
    return () => unSubscribe();
  }, []);

  return (
    <div className="fixed px-4 md:px-8 pt-3 md:pt-0 bg-gradient-to-b from-black w-full z-20">
      <div className="flex justify-between items-center">
        <img className="w-[150px] sm-[180px] md:w-[200px] p-3 z-10" src={logo} alt="logo" />
        {user && (
          <div className="flex items-center">
            <button
              onClick={toggleSearchHandler}
              className={`text-[#ff0000] font-extrabold text-[16px] md:text-[18px] bg-[rgba(0,0,0,0.3)] p-2 rounded-md z-10 hover:text-white`}
            >
              {!searchToggle && <span className="pr-1 md:pr-2">GPT</span>}
              <FontAwesomeIcon
                className="text-[16px] md:text-[18px] font-extrabold px-1"
                icon={!searchToggle ? faSearch : faHome}
              />
            </button>
            <div className="block text-center md:flex  bg-[rgba(0,0,0,0.3)] p-2 mx-2 rounded-md z-10">
              <FontAwesomeIcon
                className="text-[16px] md:text-[22px] text-[#ff0000] font-extrabold pr-0 md:pr-2"
                icon={faUser}
              />
              <h3 className="text-gray-400 font-extrabold text-[12px] md:text-[18px]">
                {user.displayName}
              </h3>
            </div>
            <button
              className="text-[#ff0000] font-extrabold bg-[rgba(0,0,0,0.3)] px-2 py-[11px] rounded-md z-10 flex hover:text-white mr-0 md:mr-5"
              onClick={signOutHandler}
            >
              <FontAwesomeIcon
                className="text-[22px] px-1"
                icon={faSignOutAlt}
              />
            </button>
          </div>
        )}
      </div>
    </div>
  );
};

export default Header;
