import { Meta, Story } from '@storybook/react'
import Fab, { FabProps } from './Fab'

const storyConfig: Meta = {
  title: 'Feature/Fab',
  component: Fab,
  parameters: {
    componentSubtitle:
      'Add button for selecting expense and income transactions',
  },
}

const FabExample: Story<FabProps> = (args) => {
  return (
    <div className="flex flex-row justify-center">
      <Fab {...args} />
    </div>
  )
}

export default storyConfig
export { FabExample }
