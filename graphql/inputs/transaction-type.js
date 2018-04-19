import { GraphQLInputObjectType, GraphQLString, GraphQLBoolean } from 'graphql'

export default new GraphQLInputObjectType({
  name: 'transactiontypeinput',
  fields: () => ({
    type_name: { type: GraphQLString },
    is_income: { type: GraphQLBoolean },
  })
})

