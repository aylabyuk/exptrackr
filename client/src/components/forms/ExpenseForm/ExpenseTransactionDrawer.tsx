import React, { useCallback, useEffect, useState } from 'react'

import { useGetCardsQuery } from '../../../redux/features/card/card-api'
import { useGetAllCategoriesQuery } from '../../../redux/features/category/category-api'
import { useSearchMerchantMutation } from '../../../redux/features/merchants/merchants-api'
import BottomDrawer from '../../base/BottomDrawer/BottomDrawer'
import ExpenseForm from './ExpenseForm'

export const ExpenseTransactionDrawer: React.FC = ({}) => {
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
    <div className="flex flex-col justify-end">
      <BottomDrawer show={isSuccess}>
        <ExpenseForm
          categories={filteredCat}
          cards={cards}
          merchants={merchants}
          onMerchantSearch={handleMerchantSearch}
          onCategorySearch={handleCategorySearch}
        />
      </BottomDrawer>
    </div>
  )
}

export default ExpenseTransactionDrawer
