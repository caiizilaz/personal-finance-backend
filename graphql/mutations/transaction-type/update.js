import { GraphQLInt, GraphQLString, GraphQLBoolean } from 'graphql'
import models from '../../../models/index.js'
import TransactionType from '../../types/transaction-type'

export default {
  type: TransactionType,
  args: {
    id: { type: GraphQLInt },
    type_name: { type: GraphQLString },
    is_income: { type: GraphQLBoolean },
  },
  resolve(source, args) {
    return models.transaction_types
      .findById(args.id)
      .then((transaction_type) => {
        return transaction_type.update({ type_name: args.type_name, is_income: args.is_income })
      })
  }
}