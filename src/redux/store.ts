import { configureStore } from "@reduxjs/toolkit";
import { hotelsApi } from "./hotelsApi";
import filterSlice from "./slices/filterSlice";
import { useDispatch } from "react-redux";
import { favoritesApi } from "./favoritesApi";

export type RootState = ReturnType<typeof store.getState>;

export type AppDispatch = typeof store.dispatch;
export const useAppDispatch = () => useDispatch<AppDispatch>();

export const store = configureStore({
  reducer: {
    [hotelsApi.reducerPath]: hotelsApi.reducer,
    [favoritesApi.reducerPath]: favoritesApi.reducer,
    filter: filterSlice,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware()
      .concat(hotelsApi.middleware)
      .concat(favoritesApi.middleware),
});
