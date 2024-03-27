import CloseIcon from "@mui/icons-material/Close";
import { Dropdown, DropdownItem } from "flowbite-react";
import { USER_IMG } from "../utils/constants";
import { useSelector } from "react-redux";
import { Dialog } from "@mui/material";

export default function ViewInfo() {
  const isDialogOpen = useSelector((store) => store.info.isDialogOpen);

  //early return
  if (!isDialogOpen) return null;

  return (
    <div className="m-10 h-[420px] w-1/2  shadow-lg absolute">
      <div className="flex justify-between  p-5">
        <h1 className="text-xl font-bold">Leads Information</h1>
        <CloseIcon />
      </div>
      <div className="flex justify-between">
        <div className="ml-10 space-y-4">
          <h1>Name - Pooja vishwakarma</h1>
          <h1>Email Id - pooja@gmail.com</h1>
          <h1>Contact Number - 41434032323</h1>
          <h1>Reference - Instagram</h1>
        </div>
        <div className="mr-10  ">
          <Dropdown label="Update Status" inline>
            <DropdownItem>New</DropdownItem>
            <DropdownItem>Qualified</DropdownItem>
            <DropdownItem>Discussion</DropdownItem>
            <DropdownItem>Negotitaion</DropdownItem>
            <DropdownItem>Won</DropdownItem>
          </Dropdown>
        </div>
      </div>
      <div className="m-10 flex">
        <img src={USER_IMG} className="w-12 h-12 bg-slate-500" />
        <input
          type="text"
          className="w-60 border border-black rounded-lg"
          placeholder="Chat..."
        />
        <button className="px-4 py-2 bg-slate-400 rounded-lg ml-2">Send</button>
      </div>
      <div className=" flex justify-end m-5 space-x-4">
        <button className="px-4 py-2 text-white bg-slate-400 rounded-lg">
          Update
        </button>
        <button className="px-4 py-2 text-white bg-slate-400 rounded-lg">
          Save
        </button>
      </div>
    </div>
  );
}
