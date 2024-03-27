import { useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { LEADS_LOGO } from "../utils/constants";

const Sidebar = () => {
  const isMenuOpen = useSelector((store) => store.app.isMenuOpen);

  //early return
  if (!isMenuOpen) return null;

  return (
    <div className="p-10 bg-gray-300">
      <ul>
        <div className="space-x-3 space-y-6">
          <div className="flex">
            <img src={LEADS_LOGO} className="w-8 h-8" />
            <li className="">
              <Link to="/leads">Leads</Link>
            </li>
          </div>
          <li>Accounts</li>
          <li>Contacts</li>
          <li>Activities</li>
        </div>
      </ul>
    </div>
  );
};
export default Sidebar;
