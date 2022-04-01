import { Meta, Story } from '@storybook/react'
import MainLayout from './MainLayout'

const storyConfig: Meta = {
  title: 'Layout/MainLayout',
  component: MainLayout,
  parameters: {
    componentSubtitle: 'Default layout for the app',
  },
}

const Template: Story = (args) => <MainLayout {...args} />

const MainLayoutExample = Template.bind({})

MainLayoutExample.args = {
  children: 'content',
}

export default storyConfig
export { MainLayoutExample }
