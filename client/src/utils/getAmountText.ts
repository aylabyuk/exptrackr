const getAmountText = (amount: number) =>
  (amount < 0 ? '- ' : ' ') + `$ ${Math.abs(amount).toFixed(2)}`

export default getAmountText
