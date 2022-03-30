import { Meta, Story } from '@storybook/react'
import { useState } from 'react'
import Tabs, { TabsProps } from './Tabs'

const storyConfig: Meta = {
  title: 'Base/Tabs',
  component: Tabs,
  parameters: {
    componentSubtitle: 'A reausable tab component',
  },
}

const Template: Story<TabsProps> = (args) => {
  const [activeindex, setActiveIndex] = useState(args.activeIndex)
  const handleChange = (index: number) => {
    setActiveIndex(index)
  }

  return <Tabs {...args} onChange={handleChange} activeIndex={activeindex} />
}

const TabsExample = Template.bind({})

TabsExample.args = {
  activeIndex: 0,
  tabs: ['Today', 'Week', 'Month', 'Year'],
} as TabsProps

export default storyConfig
export { TabsExample }
