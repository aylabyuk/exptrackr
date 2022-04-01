import { Meta, Story } from '@storybook/react'
import RecentTransaction from './RecentTransaction'

const storyConfig: Meta = {
  title: 'Feature/RecentTransaction',
  component: RecentTransaction,
  parameters: {
    componentSubtitle: 'Recent Transaction component',
  },
}

const Template: Story = (args) => <RecentTransaction {...args} />

const RecentTransactionExample = Template.bind({})

RecentTransactionExample.args = {
  children: 'content',
}

export default storyConfig
export { RecentTransactionExample }
