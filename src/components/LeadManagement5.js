import LeadsStagesGraph from "./LeadsStagesGraph";
import Pie_Chart from "./Pie_Chart";

const LeadManagement5 = () => {
  return (
    <div>
      <div className="flex space-x-4 ">
        <div className="w-[1335px] border-t-4 mt-5 h-80 p-3 space-y-1 border-blue-500 shadow-lg shadow-gray-400">
          <LeadsStagesGraph />
        </div>
      </div>
    </div>
  );
};
export default LeadManagement5;
