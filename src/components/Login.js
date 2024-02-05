import React, { useRef, useState } from "react";
import Header from "./Header";
import { inputValidation } from "../utils/validate";
import {
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  updateProfile,
} from "firebase/auth";
import { auth } from "../utils/firebase";
import { useDispatch } from "react-redux";
import { addUser } from "../utils/redux/userSlice";
import { BACKGROUND_IMG } from "../utils/constants";

const Login = () => {
  const [isLogInToggle, setIsLogInToggle] = useState(false);
  const [errMessage, setErrMessage] = useState(null);
  const dispatch = useDispatch();

  const nameRef = useRef(null);
  const emailRef = useRef(null);
  const passwordRef = useRef(null);

  const formSubmitHandler = () => {
    const userInfo = {
      name: nameRef?.current?.value,
      email: emailRef?.current?.value,
      password: passwordRef?.current?.value,
    };

    if (
      (userInfo.email !== "" &&
        userInfo.password !== "" &&
        isLogInToggle &&
        userInfo.name !== "") ||
      (userInfo.email !== "" && userInfo.password !== "" && !isLogInToggle)
    ) {
      const error = inputValidation(userInfo.email, userInfo.password);
      setErrMessage(error);

      if (error) return;

      /// Sign In/Up logic
      if (isLogInToggle) {
        createUser(userInfo); //Sign Up
      } else {
        userSignIn(userInfo); // Sign In
      }
    }
  };

  const loginToggleHandler = () => {
    setIsLogInToggle(!isLogInToggle);
  };

  // Sign Up
  const createUser = (props) => {
    const { name, email, password } = props;

    createUserWithEmailAndPassword(auth, email, password)
      .then((userCredential) => {
        const user = userCredential.user;
        updateProfile(user, {
          displayName: name,
        })
          .then(() => {
            const { displayName, email, uid } = auth.currentUser;
            dispatch(
              addUser({ displayName: displayName, email: email, uid: uid })
            );
          })
          .catch((error) => {
            console.error(error);
          });
      })
      .catch((error) => {
        const errorCode = error.code;
        const errorMessage = error.message;
        setErrMessage(errorCode + ": " + errorMessage);
      });
  };

  //Sign In
  const userSignIn = (props) => {
    const { email, password } = props;

    signInWithEmailAndPassword(auth, email, password)
      .then(() => {})
      .catch((error) => {
        const errorCode = error.code;
        const errorMessage = error.message;
        setErrMessage(errorCode + ": " + errorMessage);
      });
  };

  return (
    <div className="relative">
      <Header />
      <div>
        <img
          className="h-[100vh] w-full object-cover"
          src={BACKGROUND_IMG}
          alt="backgroundImg"
        />
      </div>
      <div className="absolute top-[50%] left-[50%] bg-[rgba(0,0,0,0.7)] w-[80%] sm:w-[60%] md:w-[28%] px-5 sm:px-8 md:px-16 py-5 md:py-8 translate-x-[-50%] translate-y-[-50%] rounded-sm">
        <form
          onSubmit={(e) => {
            e.preventDefault();
          }}
        >
          <h1 className="text-[24px] md:text-[34px] font-bold text-white mb-5">
            {isLogInToggle ? "Sign Up" : "Sign In"}
          </h1>

          {errMessage && (
            <div className="p-3 text-[#ff0000] border border-[#ff0000] bg-red-950 mb-5 text-[14px] rounded-sm">
              {errMessage}
            </div>
          )}

          {isLogInToggle && (
            <input
              ref={nameRef}
              className="w-full p-3 mb-5 border bg-transparent text-white border-gray-400 rounded-sm"
              type="text"
              required
              placeholder="Full name"
            />
          )}
          <input
            ref={emailRef}
            className="w-full p-3 mb-5 border bg-transparent text-white border-gray-400 rounded-sm"
            type="text"
            required
            placeholder="Email Address"
          />
          <input
            ref={passwordRef}
            className="w-full p-3 mb-5 border bg-transparent text-white border-gray-400 rounded-sm"
            type="password"
            required
            placeholder="Password"
          />
          <button
            className="p-2 bg-[#ff0000] mb-5 text-[16px] font-bold text-white rounded-sm w-full hover:bg-red-600"
            type="submit"
            onClick={formSubmitHandler}
          >
            {isLogInToggle ? "Sign Up" : "Sign In"}
          </button>
          {!isLogInToggle && (
            <div className="text-white text-[16px] text-end hover:underline cursor-pointer">
              Forgot password?
            </div>
          )}
          <div className="text-gray-400 text-center text-[16px] mt-6 mb-4 flex justify-center">
            {isLogInToggle ? "Already on Ehanflix? " : "New to Ehanflix? "}
            <div
              className=" text-[16px] text-white hover:underline cursor-pointer ml-1"
              onClick={loginToggleHandler}
            >
              {isLogInToggle ? "Sign In Now" : "Sign Up Now"}
            </div>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Login;
