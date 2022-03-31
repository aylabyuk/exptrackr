import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

import { Category } from '../../../../redux/features/category/category-api'
import Option from '../../../base/SelectField/Option/Option'

import twConfig from '../../../../../tailwind.config'
import camelize from '../../../../utils/camelize'

export interface CategoriesProps {
  categories: Category[]
}

export const Categories = ({ categories }: CategoriesProps) =>
  categories?.map((category) => {
    const color = twConfig.theme.colors[category.color || '']

    return (
      <Option
        className="flex flex-row gap-2 justify-start items-center py-10 px-3 max-h-[50px]"
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
          <span className="text-title3 font-semibold">{category.name}</span>
          <span className="overflow-hidden text-tiny text-light-20 text-ellipsis whitespace-nowrap">
            {category.description}
          </span>
        </div>
      </Option>
    )
  })

export default Categories
