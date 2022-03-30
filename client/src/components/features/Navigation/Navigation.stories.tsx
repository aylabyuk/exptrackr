import { Meta, Story } from '@storybook/react'
import Navigation, { NavigationProps } from './Navigation'

const storyConfig: Meta = {
  title: 'Feature/Navigation',
  component: Navigation,
  parameters: {
    componentSubtitle: 'Bottom bar navigation',
  },
}

const Template: Story<NavigationProps> = (args) => <Navigation {...args} />

const NavigationExample = Template.bind({})

NavigationExample.args = {
  children: 'content',
} as NavigationProps

export default storyConfig
export { NavigationExample }
