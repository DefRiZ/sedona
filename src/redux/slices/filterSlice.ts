import { createSlice, PayloadAction } from "@reduxjs/toolkit";

export interface initialStateArgs {
  sort: { name: string; sort: string };
}

const initialState: initialStateArgs = {
  sort: { name: "Сначала дешевые", sort: "-price" },
};

const filterSlice = createSlice({
  name: "filter",
  initialState,
  reducers: {
    setSortType(state, action: PayloadAction<{ name: string; sort: string }>) {
      state.sort = action.payload;
    },
  },
});

export const { setSortType } = filterSlice.actions;

export default filterSlice.reducer;
