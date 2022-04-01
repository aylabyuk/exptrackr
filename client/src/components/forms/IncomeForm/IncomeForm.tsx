import React from 'react'
import { useForm } from 'react-hook-form'
import { Card } from '../../../redux/features/card/card-api'
import AmountField from '../../base/AmountField/AmountField'
import Button from '../../base/Button/Button'
import SelectField, { IconType } from '../../base/SelectField/SelectField'
import TextField from '../../base/TextField/TextField'
import Cards from '../ExpenseForm/Cards/Cards'

export interface IncomeFormValues {
  amount: number
  wallet: string
  description: string
}

export interface IncomeFormProps {
  cards?: Card[]
}

export const IncomeForm: React.FC<IncomeFormProps> = ({ cards }) => {
  const { register, handleSubmit } = useForm<IncomeFormValues>()

  return (
    <form>
      <div className="relative">
        <AmountField
          className="absolute bottom-10"
          register={register('amount', { required: true })}
        />
      </div>

      <div className="flex flex-col gap-4">
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
      </div>
    </form>
  )
}

export default IncomeForm
