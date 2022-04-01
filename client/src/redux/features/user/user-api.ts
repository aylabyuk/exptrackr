import { createApi } from '@reduxjs/toolkit/query/react'
import { HYDRATE } from 'next-redux-wrapper'

import { LoginFormValues } from '../../../components/forms/LoginForm/LoginForm'
import { LoginResponse, User } from '../../../models'
import deleteAllCookies from '../../../utils/deleteAllCookies'
import { getBaseQuery } from '../utils'
import { removeCurrentUser, setCurrentUser } from './user-reducer'

export const userApi = createApi({
  reducerPath: 'userApi',
  baseQuery: getBaseQuery('/user'),
  extractRehydrationInfo: (action, { reducerPath }) => {
    if (action.type === HYDRATE) {
      return action.payload[reducerPath]
    }
  },
  tagTypes: ['User'],
  endpoints: (builder) => ({
    getCurrentLoggedInUser: builder.query<User, unknown>({
      query: () => '/me',
      providesTags: ['User'],
      onQueryStarted: async (__, { queryFulfilled, dispatch }) => {
        try {
          const { data } = await queryFulfilled
          dispatch(setCurrentUser(data))
        } catch (error) {
          dispatch(removeCurrentUser())
        }
      },
    }),
    login: builder.mutation<LoginResponse, LoginFormValues>({
      query: (credentials) => ({
        url: `/login`,
        method: 'POST',
        body: credentials,
      }),
      invalidatesTags: ['User'],
    }),
    logout: builder.mutation<any, any>({
      queryFn: (__, { dispatch }) => {
        deleteAllCookies()
        dispatch(removeCurrentUser())

        return {
          data: {
            succes: true,
          },
        }
      },
      invalidatesTags: ['User'],
    }),
  }),
})

export const {
  useGetCurrentLoggedInUserQuery,
  useLoginMutation,
  useLogoutMutation,
} = userApi
