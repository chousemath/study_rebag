import config from './apiConfig';
import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';

export const api = createApi({
    reducerPath: 'productsApi',
    baseQuery: fetchBaseQuery({ baseUrl: config.baseUrl }),
    endpoints: builder => ({
        getProducts: builder.query({
            query: (qstring = '') => `/products${qstring ? qstring : ''}`,
        }),
        getProduct: builder.query({
            query: productId => `/products/${productId ? productId : '0'}`,
        }),
        getConditions: builder.query({
            query: () => '/conditions',
        }),
        getCondition: builder.query({
            query: (conditionId) => `/conditions/${conditionId ? conditionId : '0'}`,
        }),
        getDesigners: builder.query({
            query: () => '/designers',
        }),
    }),
});

export const {
    useGetProductsQuery,
    useGetProductQuery,
    useGetConditionsQuery,
    useGetConditionQuery,
    useGetDesignersQuery,
} = api;