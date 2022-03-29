import { Meta, Story } from '@storybook/react'
import MainLayout, { MainLayoutProps } from './MainLayout'

const storyConfig: Meta = {
  title: 'Layout/MainLayout',
  component: MainLayout,
  parameters: {
    componentSubtitle: 'Default layout for the app',
  },
}

const Template: Story<MainLayoutProps> = (args) => <MainLayout {...args} />

const MainLayoutExample = Template.bind({})

MainLayoutExample.args = {
  children: 'content',
} as MainLayoutProps

export default storyConfig
export { MainLayoutExample }
