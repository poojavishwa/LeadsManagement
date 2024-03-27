import AddNewLeads from "./AddNewLeads";
import ShowTable from "./ShowTable";

const LeadsPage = () => {
  return (
    <div className="m-14 space-y-3">
      <div className="flex justify-end">
        <AddNewLeads />
      </div>
      <div className=" p-5  w-full border rounded-md shadow-xl">
        <div className="flex justify-center space-x-5 ">
          <h1>Filter :</h1>
          <label>All:</label>
          <input type="text" className="border border-gray-400 rounded-md" />
          <label>Email:</label>
          <input type="text" className="border border-gray-400  rounded-md" />
          <button className="px-3 bg-gray-300  hover:bg-slate-400 rounded-md">
            Go
          </button>
        </div>
        <div>
          <ShowTable />
        </div>
      </div>
    </div>
  );
};
export default LeadsPage;
