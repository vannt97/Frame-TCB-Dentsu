import { createSlice } from "@reduxjs/toolkit";

interface DemoState {
  name: string;
}
const initialState: DemoState = {
  name: "Van",
};
const DemoSlice = createSlice({
  name: "demo",
  initialState: initialState,
  reducers: {
    login(state, action) {
      state.name = action.payload;
    },
    logout(state, action) {
      state.name = action.payload;
    },
  },
});
export const DemoActions = DemoSlice.actions;
export default DemoSlice;
