import React, { useState } from 'react'
import { useForm } from 'react-hook-form'

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

export interface ExpenseFormValues {
  amount: number
  category: string
  wallet: string
  merchant: string
  description: string
}

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
  const [selectedMerchant, setSelectedMerchant] = useState<Merchant>()

  const { register, handleSubmit } = useForm<ExpenseFormValues>()

  const onSubmit = (data: ExpenseFormValues) => {
    console.log({
      categoryId: categories?.find((c) => c.name === data.category)?.id,
      cardId: cards?.find((c) => c.maskedNumber === data.wallet)?._id,
      amount: Number(data.amount),
      merchant: selectedMerchant,
      description: data.description,
    })
  }

  const onError = () => {}

  const handleMerchant = (value: Merchant) => setSelectedMerchant(value)

  return (
    <form onSubmit={handleSubmit(onSubmit, onError)}>
      <div className="relative">
        <AmountField
          className="absolute bottom-10"
          register={register('amount', { required: true })}
        />
      </div>

      <div className="flex flex-col gap-4">
        <SelectField
          placeholder="Category"
          classes={{
            selectionContainer: 'py-4 py-4 !h-screen pt-0',
          }}
          iconType={IconType.Fontawesome}
          onSearch={onCategorySearch}
          register={register('category', { required: true })}
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
          onChange={handleMerchant}
        >
          {Merchants({ merchants: merchants || [] })}
        </SelectField>

        <SelectField
          placeholder="Wallet"
          classes={{
            selectionContainer: 'py-4 !h-screen pt-0',
          }}
          iconType={IconType.Payment}
          register={register('wallet', { required: true })}
        >
          {Cards({ cards: cards || [] })}
        </SelectField>

        <TextField
          name="description"
          placeholder="Description"
          register={register('description', { required: true })}
        />
        <Button buttonType="submit" className="mt-6">
          Continue
        </Button>
        <a
          href="https://clearbit.com"
          className="w-full text-center text-dark-50"
        >
          Logos provided by Clearbit
        </a>
      </div>
    </form>
  )
}

export default ExpenseForm
