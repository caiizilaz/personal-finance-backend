import { GraphQLInputObjectType, GraphQLString, GraphQLBoolean } from 'graphql'

export default new GraphQLInputObjectType({
  name: 'userinput',
  fields: () => ({
    username: { type: GraphQLString },
    password: { type: GraphQLString },
    email: { type: GraphQLString },
    is_admin: { type: GraphQLBoolean },
  })
})

