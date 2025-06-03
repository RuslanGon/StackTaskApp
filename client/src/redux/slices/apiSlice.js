import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';

export const apiSlice = createApi({
  reducerPath: 'api',
  baseQuery: fetchBaseQuery({ baseUrl: '/api' }), // Заменить на актуальный baseUrl
  endpoints: (builder) => ({
    // Здесь ты опишешь свои endpoints
    getUser: builder.query({
      query: () => '/user',
    }),
  }),
});
