import DeleteIcon from "@mui/icons-material/Delete";
import VisibilityIcon from "@mui/icons-material/Visibility";
import { useDispatch } from "react-redux";
import { toggleDialog } from "../utils/viewInfoSlice";
import { Dialog, DialogContent } from "@mui/material";
import ViewInfo from "./ViewInfo";
const ShowTable = () => {
  const dispatch = useDispatch();

  const handleToggle = () => {
    dispatch(toggleDialog());
  };
  return (
    <>
      <div className="m-10 overflow-x-auto">
        <table className="w-full text-base text-left rtl:text-right text-gray-500 dark:text-gray-400">
          <thead className="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
            <tr className="">
              <th scope="col" class="px-6 py-3">
                Full Name
              </th>
              <th scope="col" class="px-6 py-3">
                Email ID
              </th>
              <th scope="col" class="px-6 py-3">
                Contact Number
              </th>
              <th scope="col" class="px-6 py-3">
                Reference
              </th>
              <th scope="col" class="px-6 py-3">
                Status
              </th>
              <th scope="col" class="px-6 py-3">
                Actions
              </th>
            </tr>
          </thead>
          <tbody>
            <tr className="bg-white border-b dark:bg-gray-800 dark:border-gray-700">
              <td className="px-6 py-4">Pooja vishwakarma</td>
              <td className="px-6 py-4">pooaj@gmail.com</td>
              <td className="px-6 py-4">8093843092</td>
              <td className="px-6 py-4">Instagram</td>
              <td className="px-6 py-4">Pending</td>
              <td className="px-6 py-4 space-x-3 cursor-pointer hover:  ">
                <button onClick={() => handleToggle()}>
                  <VisibilityIcon />
                </button>

                <DeleteIcon />
              </td>
            </tr>
            <tr className="bg-white border-b dark:bg-gray-800 dark:border-gray-700">
              <td className="px-6 py-4">Pooja vishwakarma</td>
              <td className="px-6 py-4">pooaj@gmail.com</td>
              <td className="px-6 py-4">8093843092</td>
              <td className="px-6 py-4">Instagram</td>
              <td className="px-6 py-4">Pending</td>
              <td className="px-6 py-4 space-x-3 cursor-pointer hover:touch-pinch-zoom">
                <VisibilityIcon />
                <DeleteIcon />
              </td>
            </tr>
          </tbody>
        </table>
        <Dialog>
          <DialogContent>
            <ViewInfo />
          </DialogContent>
        </Dialog>
      </div>
    </>
  );
};
export default ShowTable;
