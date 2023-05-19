import { createSlice } from "@reduxjs/toolkit";

export const displaySlice = createSlice({
  name: "display",
  initialState: {
    value: "Drum Machine"
  },
  reducers: {
    drumPadSelect: (state, action) => {
      state.value = action.payload
    },
  }
})

export const { drumPadSelect } = displaySlice.actions;
export default displaySlice.reducer;
