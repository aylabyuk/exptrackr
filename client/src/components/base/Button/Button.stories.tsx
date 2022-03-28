import { Meta, Story } from '@storybook/react'
import Button, { ButtonProps } from './Button'

const storyConfig: Meta = {
  title: 'Base/Button',
  component: Button,
  parameters: {
    componentSubtitle: 'A reusable button element',
  },
}

const Template: Story<ButtonProps> = (args) => <Button {...args} />

const ButtonExample = Template.bind({})
ButtonExample.args = {
  children: 'Apply',
} as ButtonProps

export default storyConfig
export { ButtonExample }
