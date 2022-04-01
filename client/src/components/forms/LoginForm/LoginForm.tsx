import React, { useState } from 'react'
import { useForm } from 'react-hook-form'
import Button from '../../base/Button/Button'
import TextField from '../../base/TextField/TextField'
import EyeIcon from '../../vectors/EyeIcon'
import EyeOffIcon from '../../vectors/EyeOffIcon'

export interface LoginFormValues {
  email: string
  password: string
}

export interface LoginFormProps {
  onSubmit: (data: LoginFormValues) => void
}

export const LoginForm: React.FC<LoginFormProps> = ({ onSubmit }) => {
  const { register, handleSubmit } = useForm<LoginFormValues>()
  const [showPassword, setShowPassword] = useState(false)

  const toggleShowPassword = () => {
    setShowPassword((current) => !current)
  }

  return (
    <form
      className="flex flex-col gap-6 items-center mt-14"
      onSubmit={handleSubmit((data) => onSubmit(data))}
      autoComplete="new-password"
    >
      <TextField
        name="email"
        placeholder="Email"
        register={register('email', {
          required: { message: 'email is required', value: true },
        })}
      />
      <TextField
        name="password"
        placeholder="Password"
        type={showPassword ? 'text' : 'password'}
        endAdornment={
          <button type="button" onClick={toggleShowPassword}>
            {showPassword ? <EyeIcon /> : <EyeOffIcon />}
          </button>
        }
        register={register('password', {
          required: { message: 'password is required', value: true },
        })}
      />
      <Button buttonType="submit" className="mt-10">
        Login
      </Button>

      <a className="text-title3 font-semibold text-violet-100 cursor-pointer">
        Forgot Password
      </a>

      <span className="mt-9 font-medium text-light-20">
        {`Don't have an account yet? `}
        <a className="text-violet-100 underline cursor-pointer">Sign up</a>
      </span>
    </form>
  )
}

export default LoginForm
