import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'

export const apiSlice = createApi({
    reducerPath: 'productApi',
    baseQuery: fetchBaseQuery({ baseUrl: 'http://localhost:5000' }),
    tagTypes: ['Product', 'User'],
    endpoints: (builder) => ({
        getProduct: builder.query({
            query: (id) => `/products/${id}`,
            providesTags: ['Product']
        }),
        updateProduct: builder.mutation({
            query: (product) => ({
                url: `/products/${product.productId}`,
                method: 'PATCH',
                body: { quantity: product.quantity }
            }),
            invalidatesTags: ['Product']
        }),
    })
})

export const {
    useGetProductQuery,
    useUpdateProductMutation,
} = apiSlice