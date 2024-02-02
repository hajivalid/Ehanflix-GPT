import React, { useEffect } from "react";
import logo from "../utils/images/EHANFLIX.png";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faUser, faSignOutAlt } from "@fortawesome/free-solid-svg-icons";
import { onAuthStateChanged, signOut } from "firebase/auth";
import { auth } from "../utils/firebase";
import { useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { addUser, removeUser } from "../utils/redux/userSlice";

const Header = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const user = useSelector((store) => store.user);

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
        navigate("/");
      }
    });

    //unSubscribe when the component is unMount
    return () => unSubscribe();
  }, []);

  return (
    <div className="absolute px-8 bg-gradient-to-b from-black w-full">
      <div className="flex justify-between items-center">
        <img className="w-[200px] p-3 z-10" src={logo} alt="logo" />
        {user && (
          <div className="flex items-center">
            <FontAwesomeIcon
              className="text-[26px] text-[#ff0000] font-extrabold px-2"
              icon={faUser}
            />
            <h3 className="pr-3 text-white font-extrabold text-[20px]">
              {user.displayName}
            </h3>
            <button className="z-10" onClick={signOutHandler}>
              <FontAwesomeIcon
                className="text-[26px] text-[#ff0000] font-extrabold px-2 hover:text-red-600"
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
