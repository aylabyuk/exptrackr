import { createApi } from '@reduxjs/toolkit/query/react'

import { getBaseQuery } from '../utils'

export interface Category {
  id: string
  name: string
  description: string
  icon: string
  color?: string
}

export const categoryApi = createApi({
  reducerPath: 'categoryApi',
  baseQuery: getBaseQuery('/categories'),
  tagTypes: ['Categories'],
  endpoints: (builder) => ({
    getAllCategories: builder.query<Category[], unknown>({
      query: () => '/',
      providesTags: ['Categories'],
      transformResponse: (response: Category[]) => {
        const colors = ['violet', 'blue', 'red', 'yellow']
        let colorIndex = 0
        const transformed = response.map((category) => {
          if (colorIndex !== 3) {
            colorIndex += 1
          } else {
            colorIndex = 0
          }

          return {
            ...category,
            color: colors[colorIndex],
          }
        })

        return transformed
      },
    }),
  }),
})

export const { useGetAllCategoriesQuery } = categoryApi
