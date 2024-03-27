import LeadManagement2 from "./LeadManagement2";
import LeadManagement3 from "./LeadManagement3";
import LeadManagement4 from "./LeadManagement4";
import LeadManagement5 from "./LeadManagement5";
import ViewInfo from "./ViewInfo";

const LeadManagement = () => {
  return (
    <div className="m-5">
      <div className="flex">
        <div className="mt-5 space-y-5">
          <div className="flex space-x-4">
            <div className="w-80 border-t-4 p-3 space-y-3 border-green-600 h-28 shadow-lg shadow-gray-400">
              <p className=" text-center text-green-600">Total # of leads</p>
              <h1 className=" text-center text-green-600">123</h1>
            </div>
            <div className="w-80 border-t-4 p-3 space-y-3 border-yellow-600 h-28 shadow-lg shadow-gray-400">
              <p className=" text-center text-yellow-600">
                Total # qualified leads
              </p>
              <h1 className=" text-center text-yellow-600">30</h1>
            </div>
          </div>
          <div className="flex  mr-5 space-x-4">
            <div className="w-80 border-t-4 p-3 space-y-3 border-orange-500 h-28 shadow-lg shadow-gray-400">
              <p className=" text-center text-orange-500">
                leads of current quarter
              </p>
              <h1 className=" text-center text-orange-500">27</h1>
            </div>
            <div className="w-80 border-t-4 p-3 space-y-3 border-red-500 h-28 shadow-lg shadow-gray-400">
              <p className=" text-center text-red-500">
                leads of current month
              </p>
              <h1 className=" text-center text-red-500">11</h1>
            </div>
          </div>
        </div>
        <div className="w-[660px] border-t-4 mt-5 h-60 p-3 space-y-1 border-purple-500 shadow-lg shadow-gray-400">
          <p className="text-purple-500">current quarter leads dynamic</p>
          <div className="flex space-x-2 ">
            <div className="space-y-14 mt-5">
              <h1 className="">4/2019</h1>
              <h1 className="">5/2019</h1>
            </div>
            <div className="border-l-2 h-40 border-gray-400">
              <h1 className="w-[510px] mt-5 p-5 bg-purple-500 border border-purple-500"></h1>
              <h1 className="w-[320px] mt-5 p-5 bg-purple-500 border border-purple-500"></h1>
            </div>
            <div className="mt-6">
              <p>16</p>
              <p className="mt-11">11</p>
            </div>
          </div>
          <div className="flex space-x-12">
            <h1 className="ml-[55px]">0</h1>
            <h1>2</h1>
            <h1>4</h1>
            <h1>6</h1>
            <h1>8</h1>
            <h1>10</h1>
            <h1>12</h1>
            <h1>14</h1>
            <h1>16</h1>
            <h1>18</h1>
          </div>
        </div>
      </div>
      <LeadManagement2 />
      <LeadManagement3 />
      <LeadManagement4 />
      <LeadManagement5 />
    </div>
  );
};
export default LeadManagement;
