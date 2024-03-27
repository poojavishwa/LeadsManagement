import { HAMBURGER, LOGO, SEARCH } from "../utils/constants";
import { useDispatch } from "react-redux";
import { toggleMenu } from "../utils/appSlice";
import { Link } from "react-router-dom";

const Header = () => {
  const dispatch = useDispatch();

  const handleToggleMenu = () => {
    dispatch(toggleMenu());
  };
  return (
    <div className="grid grid-flow-col p-4  ">
      <div className="flex col-span-1  ">
        <div className="flex space-x-8">
          <img
            src={HAMBURGER}
            onClick={() => {
              handleToggleMenu();
            }}
            alt="menu"
            className="h-12"
          />
          <div className="w-24 h-12 ">
            <Link to="/dashboard">
              <img src={LOGO} />
            </Link>
          </div>
        </div>
        <div className="mx-80 flex col-span-10">
          <input
            className="w-[450px] px-2 py-1 border border-black  rounded-l-lg"
            type="text"
            placeholder="Search"
          />
          <button className=" p-4 bg-slate-200 rounded-r-lg hover:bg-slate-100 ">
            <img className="h-5" src={SEARCH} />
          </button>
        </div>
        <div className="col-span-1">
          <button className="px-4 py-2 mr-4 rounded-lg bg-slate-200 hover:bg-slate-100">
            Logout
          </button>
        </div>
      </div>
    </div>
  );
};
export default Header;
