import { Meta, Story } from '@storybook/react'
import IncomeForm from '../../forms/IncomeForm/IncomeForm'
import BottomDrawer, { BottomDrawerProps } from './BottomDrawer'

const storyConfig: Meta = {
  title: 'Base/BottomDrawer',
  component: BottomDrawer,
  parameters: {
    componentSubtitle: 'A reusable bottom drawer component',
  },
}

const Template: Story<BottomDrawerProps> = (args) => (
  <div className="absolute top-0 left-0 w-screen h-screen bg-dark-25">
    <BottomDrawer {...args} />
  </div>
)

const BottomDrawerExample = Template.bind({})

BottomDrawerExample.args = {
  children: <IncomeForm />,
} as BottomDrawerProps

export default storyConfig
export { BottomDrawerExample }
