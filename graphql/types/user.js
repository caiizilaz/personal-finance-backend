import {
  GraphQLObjectType,
  GraphQLString,
  GraphQLInt,
  GraphQLBoolean
} from 'graphql'

export default new GraphQLObjectType({
  name: 'user',
  description: 'user',
  fields() {
    return {
      id: {
        type: GraphQLInt,
        description: "user ID",
        resolve(user) {
          return user.id
        }
      },
      username: {
        type: GraphQLString,
        description: "username",
        resolve(user) {
          return user.username
        }
      },
      password: {
        type: GraphQLString,
        description: "password",
        resolve(user) {
          return user.password
        }
      },
      email: {
        type: GraphQLString,
        description: "email",
        resolve(user) {
          return user.email
        }
      },
      is_admin: {
        type: GraphQLBoolean,
        description: "is_admin ?",
        resolve(user) {
          return user.is_admin
        }
      },
    }
  }
})