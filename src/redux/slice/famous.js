// api.js
import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';

export const famous = createApi({
    baseQuery: fetchBaseQuery({ baseUrl: 'https://ratingkorea.pythonanywhere.com/api/v1/' }),
    reducerPath: 'FamousData',
    tagTypes: ['Famous'],
    endpoints: (builder) => ({
        getFamous: builder.query({
            query: () => 'famous-sports/',
            providesTags: ['Famous'],
        }),
        createFamous: builder.mutation({
            query: (body) => ({
                url: `famous-sports/`,
                method: "POST",
                body,
            }),
            invalidatesTags: ['Famous'],
        }),
        deleteFamous: builder.mutation({
            query: (body) => ({
                url: `famous-sports/${body.id}`,
                method: 'DELETE',
                body,
            }),
            invalidatesTags: ['Famous']
        }),
    }),
});

export const {
    useGetFamousQuery,
    useDeleteFamousMutation,
    useCreateFamousMutation,
} = famous;
