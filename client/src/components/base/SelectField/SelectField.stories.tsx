import { Meta, Story } from '@storybook/react'
import SelectField, { SelectFieldProps } from './SelectField'
import Option from './Option/Option'

const storyConfig: Meta = {
  title: 'Base/SelectField',
  component: SelectField,
  parameters: {
    componentSubtitle: 'A custom select field component',
  },
}

const Template: Story<SelectFieldProps> = (args) => {
  return (
    <SelectField {...args}>
      <Option value={1}>Option 1</Option>
      <Option value={2}>Option 2</Option>
      <Option value={3}>Option 3</Option>
      <Option value={1}>Option 1</Option>
      <Option value={2}>Option 2</Option>
      <Option value={3}>Option 3</Option>
      <Option value={1}>Option 1</Option>
      <Option value={2}>Option 2</Option>
      <Option value={3}>Option 3</Option>
      <Option value={1}>Option 1</Option>
      <Option value={2}>Option 2</Option>
      <Option value={3}>Option 3</Option>
      <Option value={1}>Option 1</Option>
      <Option value={2}>Option 2</Option>
      <Option value={3}>Option 3</Option>
      <Option value={1}>Option 1</Option>
      <Option value={2}>Option 2</Option>
      <Option value={3}>Option 3</Option>
      <Option value={1}>Option 1</Option>
      <Option value={2}>Option 2</Option>
      <Option value={3}>Option 3</Option>
      <Option value={1}>Option 1</Option>
      <Option value={2}>Option 2</Option>
      <Option value={3}>Option 3</Option>
    </SelectField>
  )
}

const SelectFieldExample = Template.bind({})

SelectFieldExample.args = {
  placeholder: 'Select Example',
} as SelectFieldProps

export default storyConfig
export { SelectFieldExample }
