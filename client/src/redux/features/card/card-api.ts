import { createApi } from '@reduxjs/toolkit/query/react'
import { getBaseQuery } from '../utils'

export interface Card {
  _id: string
  nameOnCard: string
  cardType: string
  maskedNumber: string
  description: string
  balance: number
  ownerId: string
  createdAt: Date
  updatedAt: Date
  icon?: string
  name?: string
}

export const cardApi = createApi({
  reducerPath: 'cardApi',
  baseQuery: getBaseQuery('/cards'),
  tagTypes: ['Cards'],
  endpoints: (builder) => ({
    getCards: builder.query<Card[], unknown>({
      query: () => '/',
      providesTags: ['Cards'],
      transformResponse: (response: Card[]) => {
        const transformed: Card[] = response.map((card) => ({
          ...card,
          name: card.maskedNumber,
          icon: card.cardType,
        }))

        return transformed
      },
    }),
  }),
})

export const { useGetCardsQuery } = cardApi
