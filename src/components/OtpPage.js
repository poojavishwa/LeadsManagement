import { Link, useNavigate } from "react-router-dom";

const OTPPage = () => {
  return (
    <div className="w-8/12 text-white bg-[#8c6c95] absolute md:w-4/12 my-24 md:my-36 p-5 mx-auto right-0 left-0 flex-col space-y-7 rounded-lg">
      <p className="text-3xl text-center font-bold">Enter OTP</p>
      <p className="text-center">
        We sent a 6-digit code to your registerd email
      </p>
      <div className="ml-8 flex space-x-5 ">
        <input type="text" className="p-5 w-10 border border-black" />
        <input type="text" className="p-5 w-10 border border-black" />
        <input type="text" className="p-5 w-10 border border-black" />
        <input type="text" className="p-5 w-10 border border-black" />
        <input type="text" className="p-5 w-10 border border-black" />
        <input type="text" className="p-5 w-10 border border-black" />
      </div>
      <div className="">
        <Link to="/confirmPassword">
          <button className="w-56 ml-24 bg-[#7d4ace] p-2 rounded-md">
            Submit
          </button>
        </Link>
      </div>
    </div>
  );
};
export default OTPPage;
