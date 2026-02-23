import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

export const api = createApi({
  reducerPath: "api",

  baseQuery: fetchBaseQuery({
    baseUrl: "https://jsonplaceholder.typicode.com",
  }),

  tagTypes: "GET",

  endpoints: (builder) => ({
    getPost: builder.query({
      query: () => "/users",
      providesTags: ["GET"],
    }),

    deletePost: builder.mutation({
      query: (id) => ({
        url: `users/${id}`,
        method: "DELETE",
      }),
      providesTags: ["Delete"],
    }),
  }),
});

export const { useGetPostQuery, useDeletePostMutation } = api;