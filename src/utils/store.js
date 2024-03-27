import { configureStore } from "@reduxjs/toolkit";
import appSlice from "./appSlice";
import viewInfoSlice from "./viewInfoSlice";

const store = configureStore({
  reducer: {
    app: appSlice,
    info: viewInfoSlice,
  },
});
export default store;
