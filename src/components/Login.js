import { Link } from "react-router-dom";

const Login = () => {
  return (
    <div>
      <form className="w-8/12 text-black bg-[#8c6c95] absolute md:w-3/12 my-24 md:my-36 p-12 mx-auto right-0 left-0 flex-col space-y-7 rounded-lg">
        <h1 className="text-white text-4xl text-center font-bold">Login</h1>
        <input
          className="p-2 w-full bg-[#d9c2ea] text-black rounded-md"
          type="text"
          placeholder="Email"
        />

        <input
          className="p-2 w-full bg-[#d9c2ea] text-black rounded-md"
          type="text"
          placeholder="Password"
        />
        <p className="cursor-pointer text-blue-50">
          <Link to="/forgotpassword">Forgot Password?</Link>
        </p>
        <button className="w-10/12 mx-3 bg-[#7d4ace] p-2 rounded-md ">
          Login
        </button>
      </form>
    </div>
  );
};
export default Login;
