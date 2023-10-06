import { createSlice, PayloadAction } from "@reduxjs/toolkit";

export interface initialStateArgs {
  sort: { name: string; sort: string };
  apartmenType: string;
}

const initialState: initialStateArgs = {
  sort: { name: "Сначала дешевые", sort: "price&_order=asc" },
  apartmenType: "",
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
      console.log(state.apartmenType);
    },
  },
});

export const { setSortType, setApartmenType } = filterSlice.actions;

export default filterSlice.reducer;