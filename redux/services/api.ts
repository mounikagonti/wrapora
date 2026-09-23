import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import type { Product } from "@/types/product";

export const api = createApi({
  reducerPath: "api",

  baseQuery: fetchBaseQuery({
    baseUrl: "/api/",
  }),

  endpoints: (builder) => ({
    getBestSellers: builder.query<Product[], void>({
      query: () => "best-sellers",
    }),
  }),
});

export const { useGetBestSellersQuery } = api;
