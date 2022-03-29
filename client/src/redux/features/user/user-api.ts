import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'
import { LoginFormValues } from '../../../components/forms/LoginForm/LoginForm'
import constants from '../../../constants'

interface User {
  username: string
  email: string
  avatar: string
}

interface LoginResponse {
  token: string
  expires: string
}

export const userApi = createApi({
  reducerPath: 'userApi',
  baseQuery: fetchBaseQuery({ baseUrl: `${constants.apiUrl}/user` }),
  tagTypes: ['User'],
  endpoints: (builder) => ({
    getCurrentLoggedInUser: builder.query<User, unknown>({
      query: () => '/me',
      providesTags: ['User'],
    }),
    login: builder.mutation<LoginResponse, LoginFormValues>({
      query: (credentials) => ({
        url: `/login`,
        method: 'POST',
        body: credentials,
      }),
      onQueryStarted: async (credentials, { queryFulfilled }) => {
        try {
          const { data } = await queryFulfilled
        } catch (error) {
          console.log(error)
        }
      },
      invalidatesTags: ['User'],
    }),
  }),
})

export const { useGetCurrentLoggedInUserQuery, useLoginMutation } = userApi
