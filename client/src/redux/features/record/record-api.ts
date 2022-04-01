import { createApi } from '@reduxjs/toolkit/query/react'

import { getBaseQuery } from '../utils'

export interface ExpenseRequestPayload {
  amount: number
  cardId: string
  categoryId: string
  merchantWebsite: string
  merchantName: string
  merchantLogo: string
  description: string
}

export const recordApi = createApi({
  reducerPath: 'recordApi',
  baseQuery: getBaseQuery('/record'),
  tagTypes: ['Records'],
  endpoints: (builder) => ({
    getRecentTransactions: builder.query<any, any>({
      query: () => '/recent',
      providesTags: ['Records'],
    }),
    recordExpense: builder.mutation<unknown, ExpenseRequestPayload>({
      query: (expense) => ({
        url: `/expense`,
        method: 'POST',
        body: expense,
      }),
      invalidatesTags: ['Records'],
    }),
  }),
})

export const { useRecordExpenseMutation, useGetRecentTransactionsQuery } =
  recordApi
