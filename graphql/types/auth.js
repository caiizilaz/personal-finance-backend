import {
  GraphQLObjectType,
  GraphQLString,
} from 'graphql'

export default new GraphQLObjectType({
  name: 'auth',
  description: 'auth',
  fields() {
    return {
      token: {
        type: GraphQLString,
        description: "token",
      },
    }
  }
})