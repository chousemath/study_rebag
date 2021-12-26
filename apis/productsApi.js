import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';

export const productsApi = createApi({
    reducerPath: 'productsApi',
    baseQuery: fetchBaseQuery({
        baseUrl: 'http://localhost:3000',
    }),
    endpoints: builder => ({
        getProducts: builder.query({
            query: (qstring = '') => `/products${qstring ? qstring : ''}`
        }),
    }),
});

export const { useGetProductsQuery } = productsApi;