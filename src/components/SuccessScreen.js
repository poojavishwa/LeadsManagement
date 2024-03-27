import { Link, useNavigate } from "react-router-dom";

const SuccessScreen = () => {
  return (
    <div className="w-8/12 text-black  bg-white shadow-2xl absolute md:w-4/12 my-24 md:my-36 p-12 mx-auto right-0 left-0 flex-col space-y-7 rounded-lg">
      <h1 className="text-3xl font-bold">Password Reset</h1>
      <p>Your password has been successfully reset click below to login</p>
      <div>
        <Link to="/">
          <button className="bg-blue-500 p-3">Back to login</button>
        </Link>
      </div>
    </div>
  );
};
export default SuccessScreen;
