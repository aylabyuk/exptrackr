import { Meta, Story } from '@storybook/react'
import Topbar, { TopbarProps } from './Topbar'

const storyConfig: Meta = {
  title: 'Base/Topbar',
  component: Topbar,
  parameters: {
    componentSubtitle: 'Topbar component for the main layout',
  },
}

const Template: Story<TopbarProps> = (args) => <Topbar {...args} />

const TopbarExample = Template.bind({})

TopbarExample.args = {
  user: {
    username: 'thevinci',
    avatar: 'https://i.pravatar.cc/100',
    email: 'oriel.absin@gmail.com',
  },
} as TopbarProps

export default storyConfig
export { TopbarExample }
