import { createSlice, PayloadAction } from "@reduxjs/toolkit";

export interface initialStateArgs {
  sort: { name: string; sort: string };
  apartmenType: string;
  range: [number, number];
}

const initialState: initialStateArgs = {
  sort: { name: "Сначала дешевые", sort: "price&_order=asc" },
  apartmenType: "",
  range: [0, 9000],
};

const filterSlice = createSlice({
  name: "filter",
  initialState,
  reducers: {
    setSortType(state, action: PayloadAction<{ name: string; sort: string }>) {
      state.sort = action.payload;
    },
    setApartmenType(state, action: PayloadAction<string>) {
      state.apartmenType = action.payload;
    },
    setRange(state, action: PayloadAction<[number, number]>) {
      state.range = action.payload;
    },
    setByDefault(state) {
      state.sort = { name: "Сначала дешевые", sort: "price&_order=asc" };
      state.apartmenType = "";
      state.range = [0, 9000];
    },
  },
});

export const { setSortType, setApartmenType, setByDefault, setRange } =
  filterSlice.actions;

export default filterSlice.reducer;
