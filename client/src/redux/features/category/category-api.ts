import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'

import constants from '../../../constants'
import getCookie from '../../../utils/getCookie'

export interface Category {
  id: string
  name: string
  description: string
  icon: string
  color?: string
}

export const categoryApi = createApi({
  reducerPath: 'categoryApi',
  baseQuery: fetchBaseQuery({
    baseUrl: `${constants.apiUrl}/categories`,
    credentials: 'include',
    prepareHeaders: (headers) => {
      const token = getCookie('jwt')

      if (token) {
        headers.set('authorization', `Bearer ${token}`)
      }

      return headers
    },
  }),
  tagTypes: ['Categories'],
  endpoints: (builder) => ({
    getAllCategories: builder.query<Category[], unknown>({
      query: () => '/',
      providesTags: ['Categories'],
      transformResponse: (response: Category[]) => {
        const colors = ['violet', 'blue', 'red', 'green', 'yellow']
        let colorIndex = 0
        const transformed = response.map((category) => {
          if (colorIndex !== 4) {
            colorIndex += 1
          } else {
            colorIndex = 0
          }

          return {
            ...category,
            color: colors[colorIndex],
          }
        })

        console.log(transformed)

        return transformed
      },
    }),
  }),
})

export const { useGetAllCategoriesQuery } = categoryApi
