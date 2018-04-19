import { GraphQLNonNull, GraphQLInt } from 'graphql'
import models from '../../../models/index.js'
import TransactionType from '../../types/transaction-type'

export default {
  type: TransactionType,
  args: {
    id: { type: new GraphQLNonNull(GraphQLInt) },
  },
  resolve(source, args) {
    return models.transaction_types
      .findById(args.id)
      .then((transaction_type) => {
        return transaction_type.destroy({ force: true });
      });
  }
}