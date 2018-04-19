import {
  GraphQLObjectType,
  GraphQLString,
  GraphQLInt,
  GraphQLBoolean
} from 'graphql'

export default new GraphQLObjectType({
  name: 'transactionType',
  description: 'transactionType',
  fields() {
    return {
      id: {
        type: GraphQLInt,
        description: "transactionType ID",
        resolve(transactionType) {
          return transactionType.id
        }
      },
      type_name: {
        type: GraphQLString,
        description: "type_name",
        resolve(transactionType) {
          return transactionType.type_name
        }
      },
      is_income: {
        type: GraphQLBoolean,
        description: "is_income ?",
        resolve(transactionType) {
          return transactionType.is_income
        }
      },
    }
  }
})