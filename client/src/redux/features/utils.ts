import { fetchBaseQuery } from '@reduxjs/toolkit/query/react'
import constants from '../../constants'
import getCookie from '../../utils/getCookie'

export const getBaseQuery = (path: string) =>
  fetchBaseQuery({
    baseUrl: `${constants.apiUrl}/${path}`,
    credentials: 'include',
    prepareHeaders: (headers) => {
      const token = getCookie('jwt')

      if (token) {
        headers.set('authorization', `Bearer ${token}`)
      }

      return headers
    },
  })
