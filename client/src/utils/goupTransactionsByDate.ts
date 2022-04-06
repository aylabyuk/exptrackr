import { FilteredRecordResponse } from '../redux/features/record/record-api'
import formatDistanceToNow from 'date-fns/formatDistanceToNow'
import isToday from 'date-fns/isToday'
import isYesterday from 'date-fns/isYesterday'
import parseISO from 'date-fns/parseISO'

interface Groups {
  [x: string]: FilteredRecordResponse[]
}

const group = (transactions: FilteredRecordResponse[]) => {
  return transactions.reduce((groups: Groups, transaction) => {
    let date: string = ''

    if (isToday(parseISO(transaction.date))) {
      date = 'Today'
    } else if (isYesterday(parseISO(transaction.date))) {
      date = 'Yesterday'
    } else {
      date = formatDistanceToNow(parseISO(transaction.date), {
        includeSeconds: true,
        addSuffix: true,
      })
    }

    groups[date] = groups[date] || []
    groups[date].push(transaction)

    return groups
  }, {})
}

const groupTransactionsByDate = (transactions: FilteredRecordResponse[]) => {
  if (!transactions.length) return []

  const grouped = group(transactions)

  const groupArrays = Object.keys(grouped).map((date) => {
    return {
      date,
      transactions: grouped[date],
    }
  })

  return groupArrays
}

export default groupTransactionsByDate
