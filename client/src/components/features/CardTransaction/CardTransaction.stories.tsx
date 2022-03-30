import { Meta, Story } from '@storybook/react'
import CardTransaction, { CardTransactionProps } from './CardTransaction'

const storyConfig: Meta = {
  title: 'Base/CardTransaction',
  component: CardTransaction,
  parameters: {
    componentSubtitle: 'Card Transaction component',
  },
}

const Template: Story<CardTransactionProps> = (args) => (
  <CardTransaction {...args} />
)

const CardTransactionExample = Template.bind({})

CardTransactionExample.args = {
  amount: -80,
  category: 'Food',
  description: `Macdonald lunch out with friends`,
  icon: 'fa-utensils',
  date: new Date(),
} as CardTransactionProps

export default storyConfig
export { CardTransactionExample }
