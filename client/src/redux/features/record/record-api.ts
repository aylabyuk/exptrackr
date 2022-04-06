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

export interface IncomeRequestPayload {
  amount: number
  cardId: string
  description: string
}

export interface CategoryResponse {
  _id: string
  name: string
  description: string
  icon: string
}

export interface FilteredRecordResponse {
  _id: string
  type: string
  date: string
  description: string
  amount: number
  accountId: string
  category: CategoryResponse
  createdAt: Date
  updatedAt: Date
  merchantWebsite: string
  merchantName: string
  merchantLogo: string
}

export interface RecentRecordResponse {
  icon: string
  description: string
  category: string
  amount: number
  date: Date
}

export interface SearchRecordsPayload {
  search?: string
  categories?: string[]
}

export const recordApi = createApi({
  reducerPath: 'recordApi',
  baseQuery: getBaseQuery('/record'),
  tagTypes: ['Records', 'SearchedRecords'],
  endpoints: (builder) => ({
    getRecentTransactions: builder.query<RecentRecordResponse[], unknown>({
      query: () => '/recent',
      providesTags: ['Records'],
    }),
    recordExpense: builder.mutation<unknown, ExpenseRequestPayload>({
      query: (expense) => ({
        url: `/expense`,
        method: 'POST',
        body: expense,
      }),
      invalidatesTags: ['Records', 'SearchedRecords'],
    }),
    recordIncome: builder.mutation<unknown, IncomeRequestPayload>({
      query: (income) => ({
        url: `/income`,
        method: 'POST',
        body: income,
      }),
      invalidatesTags: ['Records', 'SearchedRecords'],
    }),
    search: builder.query<FilteredRecordResponse[], SearchRecordsPayload>({
      query: (payload) => {
        const params = new URLSearchParams()

        if (payload.search) {
          params.append('search', payload.search)
        }

        if (payload.categories?.length) {
          payload.categories.forEach((cat) => {
            params.append('categories', cat)
          })
        }

        return {
          url: '/',
          method: 'GET',
          params,
        }
      },
      providesTags: ['SearchedRecords'],
      transformResponse: (returnValue: any) => {
        const transformed: FilteredRecordResponse[] = returnValue.map(
          (value: any) => {
            return {
              ...value,
              category: value.categoryId,
            }
          },
        )

        return transformed
      },
    }),
  }),
})

export const {
  useRecordExpenseMutation,
  useRecordIncomeMutation,
  useGetRecentTransactionsQuery,
  useSearchQuery,
} = recordApi
