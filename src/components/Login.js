import React, { useState } from "react";
import Header from "./Header";

const Login = () => {
    const [isLogInToggle, setIsLogInToggle] = useState(false);

    const loginToggleHandler = () => {
        setIsLogInToggle(!isLogInToggle);
    }

  return (
    <div className="relative">
      <Header />
      <div>
        <img
          src="https://assets.nflxext.com/ffe/siteui/vlv3/4da5d2b1-1b22-498d-90c0-4d86701dffcc/98a1cb1e-5a1d-4b98-a46f-995272b632dd/IN-en-20240129-popsignuptwoweeks-perspective_alpha_website_small.jpg"
          alt="backgroundImg"
        />
      </div>
      <div className="absolute top-[40%] left-[50%] bg-[rgba(0,0,0,0.7)] w-[28%] px-16 py-8 translate-x-[-50%] translate-y-[-50%] rounded-sm">
        <form>
          <h1 className="text-[34px] font-bold text-white mb-5">{isLogInToggle ? 'Sign Up': 'Sign In'}</h1>

          {isLogInToggle && <input
            className="w-full p-3 mb-5 border bg-transparent text-white border-gray-400 rounded-sm"
            type="text"
            placeholder="Name"
          />}
          <input
            className="w-full p-3 mb-5 border bg-transparent text-white border-gray-400 rounded-sm"
            type="text"
            placeholder="Email or phone number"
          />
          <input
            className="w-full p-3 mb-5 border bg-transparent text-white border-gray-400 rounded-sm"
            type="password"
            placeholder="Password"
          />
          <button
            className="p-2 bg-[#ff0000] mb-5 text-[16px] font-bold text-white rounded-sm w-full hover:bg-red-600"
            type="submit"
          >
            {isLogInToggle ? 'Sign Up': 'Sign In'}
          </button>
          {!isLogInToggle && <div className="text-white text-[16px] text-end hover:underline cursor-pointer">
            Forgot password?
          </div>}
          <div className="text-gray-400 text-center text-[16px] mt-6 mb-4">
            {isLogInToggle ? 'Already on Netflix?':'New to Netflix?'}
            <a className=" text-[16px] text-white hover:underline cursor-pointer" onClick={loginToggleHandler}>
              {" "}{isLogInToggle ? 'Sign In Now':'Sign Up Now'}
              
            </a>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Login;
