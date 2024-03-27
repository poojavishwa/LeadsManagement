import { StyledEngineProvider } from "@mui/material";
import Pie_Chart from "./Pie_Chart";

const LeadManagement3 = () => {
  return (
    <div className="flex">
      <div className="mt-5 space-y-5">
        <div className="w-[660px] border-t-4 h-60 p-3 space-y-1 border-purple-500 shadow-lg shadow-gray-400">
          <div className="flex justify-center ">
            <div className="flex p-2 ">
              <Pie_Chart />
            </div>
          </div>
        </div>
        <div className="flex space-x-4">
          <div className="w-80 border-t-4 p-3 space-y-3 border-orange-500 h-28 shadow-lg shadow-gray-400">
            <p className=" text-center text-orange-500"># of lost leads</p>
            <h1 className=" text-center text-orange-500">2</h1>
          </div>
          <div className="w-80 border-t-4 p-3 space-y-3 border-orange-400 h-28 shadow-lg shadow-gray-400">
            <p className=" text-center text-orange-400">Lost lead budget</p>
            <h1 className=" text-center text-orange-400">$ 14,400.00</h1>
          </div>
        </div>
        <div className="flex  mr-5 space-x-4">
          <div className="w-80 border-t-4 p-3 space-y-3 border-blue-500 h-28 shadow-lg shadow-gray-400">
            <p className=" text-center text-blue-500">Average lead budget</p>
            <h1 className=" text-center text-blue-500">$ 3,315.85</h1>
          </div>
          <div className="w-80 border-t-4 p-3 space-y-3 border-sky-400 h-28 shadow-lg shadow-gray-400">
            <p className=" text-center text-sky-400">
              Current month average lead budget
            </p>
            <h1 className=" text-center text-sky-400">$ 15,740.90</h1>
          </div>
        </div>
      </div>
      <div className="w-[660px] border-t-4 mt-5 h-[500px] p-3 space-y-1 border-blue-300 shadow-lg shadow-gray-400">
        <p className="text-blue-500"></p>
        <div className="flex space-x-2"></div>
      </div>
    </div>
  );
};
export default LeadManagement3;
