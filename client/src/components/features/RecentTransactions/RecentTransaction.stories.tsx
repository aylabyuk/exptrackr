import { Meta, Story } from '@storybook/react'
import RecentTransaction, { RecentTransactionProps } from './RecentTransaction'

const storyConfig: Meta = {
  title: 'Feature/RecentTransaction',
  component: RecentTransaction,
  parameters: {
    componentSubtitle: 'Recent Transaction component',
  },
}

const Template: Story<RecentTransactionProps> = (args) => (
  <RecentTransaction {...args} />
)

const RecentTransactionExample = Template.bind({})

RecentTransactionExample.args = {
  children: 'content',
} as RecentTransactionProps

export default storyConfig
export { RecentTransactionExample }
