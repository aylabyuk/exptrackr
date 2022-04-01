import React from 'react'

import { Card } from '../../../redux/features/card/card-api'
import { Category } from '../../../redux/features/category/category-api'
import { Merchant } from '../../../redux/features/merchants/merchants-api'
import AmountField from '../../base/AmountField/AmountField'
import Button from '../../base/Button/Button'
import SelectField, { IconType } from '../../base/SelectField/SelectField'
import TextField from '../../base/TextField/TextField'
import Cards from './Cards/Cards'
import Categories from './Categories/Categories'
import Merchants from './Merchants/Merchants'

export interface ExpenseFormProps {
  categories?: Category[]
  merchants?: Merchant[]
  cards?: Card[]
  onCategorySearch: (e: React.ChangeEvent) => void
  onMerchantSearch: (e: React.ChangeEvent) => void
}

export const ExpenseForm: React.FC<ExpenseFormProps> = ({
  categories,
  merchants,
  cards,
  onCategorySearch,
  onMerchantSearch,
}) => {
  return (
    <>
      <div className="relative">
        <AmountField className="absolute bottom-10" />
      </div>

      <div className="flex flex-col gap-4">
        <SelectField
          placeholder="Category"
          classes={{
            selectionContainer: 'py-4 py-4 !h-screen pt-0',
          }}
          iconType={IconType.Fontawesome}
          onSearch={onCategorySearch}
        >
          {Categories({ categories: categories || [] })}
        </SelectField>

        <SelectField
          placeholder="Merchant"
          classes={{
            selectionContainer: 'py-4 !h-screen pt-0',
          }}
          iconType={IconType.Image}
          onSearch={onMerchantSearch}
        >
          {Merchants({ merchants: merchants || [] })}
        </SelectField>

        <SelectField
          placeholder="Wallet"
          classes={{
            selectionContainer: 'py-4 !h-screen pt-0',
          }}
          iconType={IconType.Payment}
        >
          {Cards({ cards: cards || [] })}
        </SelectField>

        <TextField name="description" placeholder="Description" />
        <Button className="mt-6">Continue</Button>
        <a
          href="https://clearbit.com"
          className="w-full text-center text-dark-50"
        >
          Logos provided by Clearbit
        </a>
      </div>
    </>
  )
}

export default ExpenseForm
