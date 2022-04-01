import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'

export interface Merchant {
  name: string
  description: string
  icon: string
}

export const merchantApi = createApi({
  reducerPath: 'merchantApi',
  baseQuery: fetchBaseQuery({ baseUrl: '' }),
  tagTypes: ['Merchants'],
  endpoints: (builder) => ({
    searchMerchant: builder.mutation<Merchant[], string>({
      queryFn: async (searchString) => {
        try {
          const result = await fetch(
            `https://autocomplete.clearbit.com/v1/companies/suggest?query=${searchString}`,
          )

          const merchants: any[] = await result.json()

          return {
            data: merchants.map((merchant) => ({
              name: merchant.name,
              description: merchant.domain,
              icon: merchant.logo,
            })),
          }
        } catch (error) {
          return {
            error: {
              error: 'No merchant found',
              status: 'FETCH_ERROR',
            },
          }
        }
      },
      invalidatesTags: ['Merchants'],
    }),
  }),
})

export const { useSearchMerchantMutation } = merchantApi
