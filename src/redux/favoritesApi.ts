import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import { elementApi } from "./hotelsApi";

export const favoritesApi = createApi({
  reducerPath: "favoritesApi",
  tagTypes: ["Favorites"],
  baseQuery: fetchBaseQuery({ baseUrl: "http://localhost:3001/" }),
  endpoints: (builder) => ({
    getFavorites: builder.query<elementApi[], null>({
      query: () => `favorites`,
      providesTags: (result) =>
        result
          ? [
              ...result.map(({ id }) => ({ type: "Favorites" as const, id })),
              { type: "Favorites", id: "LIST" },
            ]
          : [{ type: "Favorites", id: "LIST" }],
    }),
    addToFavorite: builder.mutation({
      query: (body: elementApi) => ({
        url: "favorites",
        method: "POST",
        body,
      }),
      invalidatesTags: [{ type: "Favorites", id: "LIST" }],
    }),
    deleteFromFavorite: builder.mutation({
      query: (id: number) => ({
        url: `favorites/${id}`,
        method: "DELETE",
      }),
      invalidatesTags: [{ type: "Favorites", id: "LIST" }],
    }),
  }),
});

export const {
  useGetFavoritesQuery,
  useAddToFavoriteMutation,
  useDeleteFromFavoriteMutation,
} = favoritesApi;
