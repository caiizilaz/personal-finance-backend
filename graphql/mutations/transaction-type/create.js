import models from '../../../models/index.js'
import TransactionType from '../../types/transaction-type'
import TransactionTypeInput from '../../inputs/transaction-type'

export default {
  type: TransactionType,
  args: {
    transactionType: {
      type: TransactionTypeInput
    }
  },
  resolve(source, args) {
    return models.transaction_types.build({
      type_name: args.transactionType.type_name,
      is_income: args.transactionType.is_income,
    }).save().then((data) => {
      return models.transaction_types.findById(data.id)
    })
  }
}