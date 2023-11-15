// api.js
import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';

export const api = createApi({
    baseQuery: fetchBaseQuery({ baseUrl: 'https://ratingkorea.pythonanywhere.com/api/v1/' }), // Set your API
    reducerPath: 'ReatingData',
    tagTypes: ['Reating'],
    endpoints: (builder) => ({
        getTable1: builder.query({
            query: () => 'custom-users/',
            providesTags: ['Reating'],
        }),
        createTable2: builder.mutation({
            query: (body) => ({
                url: 'custom-users/',
                method: 'POST',
                body,
            }),
            invalidatesTags: ['Reating'],
        }),
        deleteTbale2: builder.mutation({
            query: (body) => ({
                url: `custom-users/${body.id}`,
                method: 'DELETE',
                body,
            }),
            invalidatesTags: ['Reating']
        }),
    }),
});

export const {
    useGetTable1Query,
    useCreateTable2Mutation,
    useDeleteTbale2Mutation,
} = api;
