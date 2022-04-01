import React from 'react'
import * as PayIcons from 'react-pay-icons'

import Option from '../../../base/SelectField/Option/Option'
import { Card } from '../../../../redux/features/card/card-api'

export interface CardsProps {
  cards: Card[]
}

export const Cards = ({ cards }: CardsProps) =>
  cards.map((card) => {
    const Icon = PayIcons[card.icon || '']

    return (
      <Option
        className="flex flex-row gap-2 justify-start items-center py-10 px-3 max-h-[50px]"
        key={card._id}
        value={card}
      >
        <Icon className="!w-[40px] !h-[40px]" />
        <div className="flex flex-col grow gap-1 max-w-[80%] text-left">
          <span className="text-title3 font-semibold">{card.maskedNumber}</span>
          <span className="overflow-hidden text-tiny text-light-20 text-ellipsis whitespace-nowrap">
            {card.description}
          </span>
        </div>
      </Option>
    )
  })

export default Cards
