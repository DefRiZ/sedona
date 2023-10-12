import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

export interface elementApi {
  id: number;
  name: string;
  type: string;
  price: string;
  rate: number;
  image: string;
}

export interface getArgs {
  sortType?: string;
  apartmenType?: string;
  range?: [number, number];
  currentPage?: number;
  itemsPerPage?: number;
}

export const hotelsApi = createApi({
  reducerPath: "hotelsApi",
  tagTypes: ["Hotels"],
  baseQuery: fetchBaseQuery({ baseUrl: "http://localhost:3001/" }),
  endpoints: (builder) => ({
    getHotels: builder.query<elementApi[], getArgs>({
      query: ({ sortType, apartmenType, range, currentPage, itemsPerPage }) =>
        `hotels?_sort=${sortType}${apartmenType && `&type=${apartmenType}`}${
          range && `&price_gte=${range[0]}&price_lte=${range[1]}`
        }&_page=${currentPage}&_limit=${itemsPerPage}`,
      providesTags: (result) =>
        result
          ? [
              ...result.map(({ id }) => ({ type: "Hotels" as const, id })),
              { type: "Hotels", id: "LIST" },
            ]
          : [{ type: "Hotels", id: "LIST" }],
    }),
  }),
});

export const { useGetHotelsQuery } = hotelsApi;
