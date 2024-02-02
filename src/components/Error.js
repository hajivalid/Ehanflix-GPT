import logo from "../utils/images/EHANFLIX.png";

const ErrorMessage = () => {
  return (
    <div>
      <div className="relative bg-[rgba(0,0,0,0.7)] w-full h-[100vh] z-10">
        <div className="absolute top-[30%] left-[50%] translate-x-[-50%] translate-y-[-50%] min-w-[400px] max-w-[550px] min-h-52 pt-14">
          <div className="grid content-center bg-white p-10 min-h-52 text-center text-[16px] rounded-md font-bold">
            <img
              className="w-[200px] absolute top-[21%] left-[50%] translate-x-[-50%] translate-y-[-50%]"
              src={logo}
              alt="logo"
            />
            <h1 className="text-[20px] font-extrabold">500 Error</h1>
            <p>Oops, something went wrong!</p>
            <button className="text-[18px] font-bold text-white bg-[#ff0000] rounded-sm mt-5">
              OK
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};
export default ErrorMessage;
