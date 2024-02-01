import React from "react";
import logo from "../utils/images/EHANFLIX.png";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faUser, faSignOutAlt } from "@fortawesome/free-solid-svg-icons";
import { signOut } from "firebase/auth";
import { auth } from "../utils/firebase";
import { useNavigate } from "react-router-dom";
import { useSelector } from "react-redux";

const Header = () => {
  const navigate = useNavigate();
  const user = useSelector((store) => store.user);

  const signOutHandler = () => {
    signOut(auth).then(() => {
      // Sign-out successful.
      navigate('/');
    }).catch((error) => {
      // An error happened.
    });
  }

  return (
    <div className="absolute px-8 bg-gradient-to-b from-black w-full">
      <div className="flex justify-between items-center">
        <img className="w-[200px] p-3" src={logo} alt="logo" />
        {user && <div className="flex items-center">
          <FontAwesomeIcon
            className="text-[26px] text-[#ff0000] font-extrabold px-2"
            icon={faUser}
          />
          <h3 className="pr-3 font-extrabold text-[20px]">{user.displayName}</h3>
          <button className="" onClick={signOutHandler}>
            <FontAwesomeIcon
              className="text-[26px] text-[#ff0000] font-extrabold px-2 hover:text-red-600"
              icon={faSignOutAlt}
            />
          </button>
        </div>}
      </div>
    </div>
  );
};

export default Header;
