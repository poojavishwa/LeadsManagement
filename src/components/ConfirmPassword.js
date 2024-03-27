import { Link, useNavigate } from "react-router-dom";

const ConfirmPassword = () => {
  return (
    <div>
      <form className="w-8/12 text-black bg-[#8c6c95] absolute md:w-4/12 my-24 md:my-36 p-12 mx-auto right-0 left-0 flex-col space-y-7 rounded-lg">
        <input
          className="p-2 w-full bg-[#d9c2ea] text-black rounded-md"
          type="text"
          placeholder="New Password"
        />
        <input
          className="p-2 w-full bg-[#d9c2ea] text-black rounded-md"
          type="text"
          placeholder="Confirm Password"
        />
        <div>
          <Link to="/successpage">
            <button className="w-full bg-[#7d4ace] p-2 rounded-md">
              Change Password
            </button>
          </Link>
        </div>
      </form>
    </div>
  );
};
export default ConfirmPassword;
