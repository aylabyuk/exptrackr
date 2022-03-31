import React from 'react'
import BottomDrawer from '../../base/BottomDrawer/BottomDrawer'
import Button from '../../base/Button/Button'

import TextField from '../../base/TextField/TextField'

export interface IncomeFormProps {}

export const IncomeForm: React.FC<IncomeFormProps> = ({}) => {
  return (
    <BottomDrawer show={true}>
      <div className="flex flex-col gap-4">
        <TextField name="description" placeholder="Description" />
        <TextField name="wallet" placeholder="Wallet" />
        <Button className="mt-6">Continue</Button>
      </div>
    </BottomDrawer>
  )
}

export default IncomeForm
