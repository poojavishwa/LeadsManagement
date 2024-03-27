import { Dialog, DialogActions, DialogContent, TextField } from "@mui/material";
import React, { useState } from "react";

export default function FormDialog() {
  const [open, setOpen] = useState(false);

  const handleClickOpen = () => {
    setOpen(true);
  };
  const handleClickClose = () => {
    setOpen(false);
  };

  return (
    <React.Fragment>
      <button
        className="text-xl px-3 py-2 bg-gray-400 rounded-md hover:bg-slate-200"
        onClick={handleClickOpen}>
        Add+
      </button>
      <Dialog open={open} onClose={handleClickClose}>
        <h1 className="text-2xl mx-6 mt-4 font-bold">Add New Leads</h1>
        <DialogContent>
          <TextField
            margin="dense"
            required
            label="Full Name"
            type="text"
            fullWidth
            variant="filled"
          />
          <TextField
            margin="dense"
            required
            label="Email Address"
            type="text"
            fullWidth
            variant="filled"
          />
          <TextField
            margin="dense"
            required
            label="Contact Number"
            type="text"
            fullWidth
            variant="filled"
          />
          <TextField
            margin="dense"
            required
            label="Reference"
            type="text"
            fullWidth
            variant="filled"
          />
          <TextField
            margin="dense"
            required
            label="Status"
            type="text"
            fullWidth
            variant="filled"
          />
          <TextField
            margin="dense"
            required
            label="Remark"
            type="text"
            fullWidth
            variant="filled"
          />
        </DialogContent>
        <DialogActions>
          <button
            onClick={handleClickClose}
            className="bg-blue-500 px-4 py-2 rounded-md text-white">
            Cancel
          </button>
          <button
            onClick={handleClickClose}
            className="bg-blue-500 px-4 py-2 rounded-md text-white">
            Save
          </button>
        </DialogActions>
      </Dialog>
    </React.Fragment>
  );
}
