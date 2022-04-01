import React, { useCallback, useEffect, useState } from 'react'
import { useGetCardsQuery } from '../../../redux/features/card/card-api'
import { useGetAllCategoriesQuery } from '../../../redux/features/category/category-api'
import { useSearchMerchantMutation } from '../../../redux/features/merchants/merchants-api'
import BottomDrawer from '../../base/BottomDrawer/BottomDrawer'
import Button from '../../base/Button/Button'

import SelectField, { IconType } from '../../base/SelectField/SelectField'
import TextField from '../../base/TextField/TextField'
import Cards from './Cards/Cards'
import Categories from './Categories/Categories'
import Merchants from './Merchants/Merchants'

export interface ExpenseFormProps {}

export const ExpenseForm: React.FC<ExpenseFormProps> = ({}) => {
  const { data: categories, isSuccess } = useGetAllCategoriesQuery({})
  const [updateSearch, { data: merchants }] = useSearchMerchantMutation()
  const { data: cards } = useGetCardsQuery({})
  const [filteredCat, setFilteredCat] = useState(categories)

  const handleCategorySearch = useCallback(
    (e) => {
      if (!e.target.value) {
        setFilteredCat(categories)
        return
      }

      const filtered = categories?.filter((cat) => {
        const search = e.target.value.toLowerCase()
        return (
          cat.name.toLowerCase().includes(search) ||
          cat.description.toLocaleLowerCase().includes(search)
        )
      })

      setFilteredCat(filtered)
    },
    [categories],
  )

  const handleMerchantSearch = useCallback(
    async (e) => {
      await updateSearch(e.target.value)
    },
    [updateSearch],
  )

  useEffect(() => {
    setFilteredCat(categories)
  }, [categories])

  return (
    <BottomDrawer show={isSuccess}>
      <div className="flex flex-col gap-4">
        <SelectField
          placeholder="Category"
          classes={{
            selectionContainer: 'py-4 py-4 !h-screen pt-0',
          }}
          iconType={IconType.Fontawesome}
          onSearch={handleCategorySearch}
        >
          {Categories({ categories: filteredCat || [] })}
        </SelectField>

        <SelectField
          placeholder="Merchant"
          classes={{
            selectionContainer: 'py-4 !h-screen pt-0',
          }}
          onSearch={handleMerchantSearch}
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
    </BottomDrawer>
  )
}

export default ExpenseForm
