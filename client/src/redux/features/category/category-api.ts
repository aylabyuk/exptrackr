import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'

import constants from '../../../constants'
import getCookie from '../../../utils/getCookie'

export interface Category {
  id: string
  name: string
  description: string
  icon: string
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
    }),
  }),
})

export const { useGetAllCategoriesQuery } = categoryApi
