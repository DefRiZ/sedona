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
}

export const hotelsApi = createApi({
  reducerPath: "hotelsApi",
  tagTypes: ["Hotels"],
  baseQuery: fetchBaseQuery({ baseUrl: "http://localhost:3001/" }),
  endpoints: (builder) => ({
    getHotels: builder.query<elementApi[], getArgs>({
      query: ({ sortType, apartmenType }) =>
        `hotels?_sort=${sortType}${apartmenType && `&type=${apartmenType}`}`,
    }),
    getFavorites: builder.query<elementApi[], null>({
      query: () => `favorites`,
    }),
    addToFavorite: builder.mutation({
      query: (body: elementApi) => ({
        url: "favorites",
        method: "POST",
        body,
      }),
    }),
  }),
});

export const {
  useGetHotelsQuery,
  useGetFavoritesQuery,
  useAddToFavoriteMutation,
} = hotelsApi;
