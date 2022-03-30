import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'
import { LoginFormValues } from '../../../components/forms/LoginForm/LoginForm'
import constants from '../../../constants'
import { LoginResponse, User } from '../../../models'
import { setCurrentUser } from './user-reducer'

export const userApi = createApi({
  reducerPath: 'userApi',
  baseQuery: fetchBaseQuery({ baseUrl: `${constants.apiUrl}/user` }),
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
          console.log(error)
          dispatch(setCurrentUser())
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

export const { useGetCurrentLoggedInUserQuery, useLoginMutation } = userApi
