import React from 'react'
import Image from 'next/image'
import { Merchant } from '../../../../redux/features/merchants/merchants-api'
import Option from '../../../base/SelectField/Option/Option'

export interface MerchantsProps {
  merchants: Merchant[]
}

export const Categories = ({ merchants }: MerchantsProps) =>
  merchants.map((merchant) => {
    return (
      <Option
        className="flex flex-row gap-2 justify-start items-center py-10 px-3 max-h-[50px]"
        key={merchant.description}
        value={merchant}
      >
        <Image
          src={merchant.icon}
          alt={merchant.name}
          width={40}
          height={40}
          className={`p-[6px] !w-10 !h-10 rounded-lg`}
        />
        <div className="flex flex-col grow gap-1 max-w-[80%] text-left">
          <span className="text-title3 font-semibold">{merchant.name}</span>
          <span className="overflow-hidden text-tiny text-light-20 text-ellipsis whitespace-nowrap">
            {merchant.description}
          </span>
        </div>
      </Option>
    )
  })

export default Categories
