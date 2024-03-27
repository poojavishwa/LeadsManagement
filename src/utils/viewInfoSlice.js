import { createSlice } from "@reduxjs/toolkit";

const viewInfoSlice = createSlice({
  name: "info",
  initialState: {
    isDialogOpen: false,
  },
  reducers: {
    toggleDialog: (state) => {
      state.isDialogOpen = !state.isDialogOpen;
    },
    dialogClose: (state) => {
      state.isDialogOpen = true;
    },
  },
});
export const { toggleDialog, dialogClose } = viewInfoSlice.actions;
export default viewInfoSlice.reducer;
