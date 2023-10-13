import { createSlice, PayloadAction } from "@reduxjs/toolkit";

export interface initialStateArgs {
  sort: { name: string; sort: string };
  apartmenType: string;
  range: [number, number];
  itemsPerPage: number;
  currentPage: number;
}

const initialState: initialStateArgs = {
  sort: { name: "Сначала дешевые", sort: "price&_order=asc" },
  apartmenType: "",
  range: [0, 9000],
  itemsPerPage: 4,
  currentPage: 1,
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
    setCurrentPage(state, action: PayloadAction<number>) {
      state.currentPage = action.payload;
    },
    setitemsPerPage(state, action: PayloadAction<number>) {
      state.itemsPerPage = action.payload;
    },
    setByDefault(state) {
      state.sort = { name: "Сначала дешевые", sort: "price&_order=asc" };
      state.apartmenType = "";
      state.range = [0, 9000];
      state.itemsPerPage = 4;
    },
  },
});

export const {
  setSortType,
  setApartmenType,
  setByDefault,
  setRange,
  setCurrentPage,
  setitemsPerPage,
} = filterSlice.actions;

export default filterSlice.reducer;
