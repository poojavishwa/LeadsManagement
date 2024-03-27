import TableforLeads from "./TableforLeads";
import TableforLeads1 from "./TableforLeads1";

const LeadManagement4 = () => {
  return (
    <div>
      <div className="flex space-x-4 ">
        <div className="w-[660px] border-t-4 mt-5 h-60 p-3 space-y-1 border-green-500 shadow-lg shadow-gray-400">
          <TableforLeads />
        </div>
        <div className="w-[660px] border-t-4 mt-5 h-60 p-3 space-y-1 border-green-500 shadow-lg shadow-gray-400">
          <TableforLeads1 />
        </div>
      </div>
    </div>
  );
};
export default LeadManagement4;
