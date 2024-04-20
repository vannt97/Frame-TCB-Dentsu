import { configureStore } from "@reduxjs/toolkit";
import DemoSlice from "./demoSlice";

const store = configureStore({
  reducer: {
    demoStore: DemoSlice.reducer,
  },
});
export default store;
