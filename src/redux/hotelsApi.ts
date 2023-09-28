import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

export interface elementApi {
  id: number;
  name: string;
  type: string;
  price: string;
  rate: number;
  image: string;
}

export const hotelsApi = createApi({
  reducerPath: "hotelsApi",
  baseQuery: fetchBaseQuery({ baseUrl: "http://localhost:3001/" }),
  endpoints: (builder) => ({
    getHotels: builder.query<elementApi[], string>({
      query: (sort) => `hotels?_sort=${sort}`,
    }),
  }),
});

export const { useGetHotelsQuery } = hotelsApi;
