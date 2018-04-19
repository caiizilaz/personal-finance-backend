import {
  GraphQLList,
  GraphQLInt,
} from 'graphql'

import models from '../../../models/index.js'
import TransactionType from '../../types/transaction-type'

export default {
    type: new GraphQLList(TransactionType),
    args: {
        id: {
            type: GraphQLInt
        }
    },
    resolve(root, args) {
        return models.transaction_types.findAll({where: args })
    }
}