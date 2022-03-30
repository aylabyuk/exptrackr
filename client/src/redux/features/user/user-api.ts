import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'
import { HYDRATE } from 'next-redux-wrapper'

import { LoginFormValues } from '../../../components/forms/LoginForm/LoginForm'
import constants from '../../../constants'
import { LoginResponse, User } from '../../../models'
import { removeCurrentUser, setCurrentUser } from './user-reducer'

export const userApi = createApi({
  reducerPath: 'userApi',
  baseQuery: fetchBaseQuery({
    baseUrl: `${constants.apiUrl}/user`,
    credentials: 'include',
  }),
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
        console.log('query has started')

        try {
          const { data } = await queryFulfilled
          dispatch(setCurrentUser(data))
        } catch (error) {
          console.log(error)
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
  }),
})

export const {
  useGetCurrentLoggedInUserQuery,
  useLoginMutation,
  endpoints: { getCurrentLoggedInUser },
} = userApi
