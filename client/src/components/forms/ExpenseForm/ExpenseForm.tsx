import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import React from 'react'
import { useGetAllCategoriesQuery } from '../../../redux/features/category/category-api'
import camelize from '../../../utils/camelize'
import BottomDrawer from '../../base/BottomDrawer/BottomDrawer'
import Button from '../../base/Button/Button'
import Option from '../../base/SelectField/Option/Option'
import SelectField from '../../base/SelectField/SelectField'
import TextField from '../../base/TextField/TextField'

import twConfig from '../../../../tailwind.config'

export interface ExpenseFormProps {}

export const ExpenseForm: React.FC<ExpenseFormProps> = ({}) => {
  const { data: categories, isSuccess } = useGetAllCategoriesQuery({})

  return (
    <BottomDrawer show={isSuccess}>
      <div className="flex flex-col gap-4">
        <SelectField
          placeholder="Category"
          classes={{
            selectionContainer: 'py-4',
          }}
        >
          {categories?.map((category) => {
            const color = twConfig.theme.colors[category.color || '']

            return (
              <Option
                className="flex flex-row gap-2 justify-start items-center py-10 px-3"
                key={category.id}
                value={category}
              >
                <FontAwesomeIcon
                  className={`p-[6px] !w-10 !h-10 rounded-lg`}
                  color={color?.[100]}
                  style={{ backgroundColor: color?.[20] }}
                  icon={
                    require('@fortawesome/free-solid-svg-icons')[
                      camelize(category.icon)
                    ]
                  }
                />
                <div className="flex flex-col grow gap-1 max-w-[80%] text-left">
                  <span className="text-title3 font-semibold">
                    {category.name}
                  </span>
                  <span className="overflow-hidden text-tiny text-light-20 text-ellipsis whitespace-nowrap">
                    {category.description}
                  </span>
                </div>
              </Option>
            )
          })}
        </SelectField>

        <TextField name="description" placeholder="Description" />
        <TextField name="wallet" placeholder="Wallet" />
        <Button className="mt-6">Continue</Button>
      </div>
    </BottomDrawer>
  )
}

export default ExpenseForm
