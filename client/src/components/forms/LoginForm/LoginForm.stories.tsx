import { Meta, Story } from '@storybook/react'
import LoginForm, { LoginFormProps } from './LoginForm'

const storyConfig: Meta = {
  title: 'Form/LoginForm',
  component: LoginForm,
  parameters: {
    componentSubtitle: 'Login form',
  },
}

const Template: Story<LoginFormProps> = (args) => <LoginForm {...args} />

const LoginFormExample = Template.bind({})

export default storyConfig
export { LoginFormExample }
