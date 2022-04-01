import React from 'react'
import { useForm } from 'react-hook-form'
import { Card } from '../../../redux/features/card/card-api'
import {
  IncomeRequestPayload,
  useRecordIncomeMutation,
} from '../../../redux/features/record/record-api'
import { hideModal, ModalEnum } from '../../../redux/features/ui/ui-reducer'
import { useAppDispatch } from '../../../redux/hooks'
import AmountField from '../../base/AmountField/AmountField'
import Button from '../../base/Button/Button'
import Modal from '../../base/Modal/Modal'
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
  const dispatch = useAppDispatch()
  const [recordIncome, { isError, isLoading, isSuccess, error }] =
    useRecordIncomeMutation()
  const { register, handleSubmit } = useForm<IncomeFormValues>()

  const onSubmit = (data: IncomeFormValues) => {
    const income: IncomeRequestPayload = {
      amount: data.amount,
      cardId: cards?.find((c) => c.maskedNumber === data.wallet)?._id || '',
      description: data.description,
    }

    recordIncome(income)
  }

  if (isSuccess) {
    dispatch(hideModal(ModalEnum.Income))
  }

  if (isError) {
    dispatch(hideModal(ModalEnum.Income))
  }

  return (
    <>
      <Modal show={isLoading} message="loading" />
      <form onSubmit={handleSubmit(onSubmit)}>
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
    </>
  )
}

export default IncomeForm
