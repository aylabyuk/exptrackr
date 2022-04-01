import { Meta, Story } from '@storybook/react'
import AmountField, { AmountFieldProps } from './AmountField'

const storyConfig: Meta = {
  title: 'Base/AmountField',
  component: AmountField,
  parameters: {
    componentSubtitle: 'Field for entering monetary values',
  },
}

const Template: Story<AmountFieldProps> = (args) => (
  <div className="bg-red-100">
    <AmountField {...args} />
  </div>
)

const AmountFieldExample = Template.bind({})

AmountFieldExample.args = {} as AmountFieldProps

export default storyConfig
export { AmountFieldExample }
