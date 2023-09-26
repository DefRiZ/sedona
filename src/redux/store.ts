import { configureStore } from "@reduxjs/toolkit";
import { hotelsApi } from "./hotelsApi";

export const store = configureStore({
  reducer: {
    [hotelsApi.reducerPath]: hotelsApi.reducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(hotelsApi.middleware),
});
