import { Meta, Story } from '@storybook/react'
import { useState } from 'react'
import EyeIcon from '../../vectors/EyeIcon'
import EyeOffIcon from '../../vectors/EyeOffIcon'
import TextField, { TextFieldProps } from './TextField'

const storyConfig: Meta = {
  title: 'Base/TextField',
  component: TextField,
  parameters: {
    componentSubtitle: 'Default input component',
  },
}

const Template: Story<TextFieldProps> = (args) => <TextField {...args} />

const RegularField = Template.bind({})
RegularField.args = {
  placeholder: 'Text input',
  name: 'input',
  type: 'text',
} as TextFieldProps

const PasswordField = Template.bind({})
PasswordField.args = {
  placeholder: 'Password',
  name: 'password',
  type: 'password',
} as TextFieldProps

const AdornmentExample: Story = () => {
  const [show, setShow] = useState(false)

  const toggle = () => {
    setShow((current) => !current)
  }

  return (
    <TextField
      name="password"
      placeholder="Password"
      type={show ? 'text' : 'password'}
      endAdornment={
        <button onClick={toggle}>{show ? <EyeIcon /> : <EyeOffIcon />}</button>
      }
    />
  )
}

export default storyConfig
export { RegularField, PasswordField, AdornmentExample }
