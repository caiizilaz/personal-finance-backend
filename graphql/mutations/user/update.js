import { GraphQLInt, GraphQLString, GraphQLBoolean } from 'graphql'
import models from '../../../models/index.js'
import User from '../../types/user'

export default {
  type: User,
  args: {
    id: { type: GraphQLInt },
    username: { type: GraphQLString },
    password: { type: GraphQLString },
    email: { type: GraphQLString },
    is_admin: { type: GraphQLBoolean },
  },
  resolve(source, args) {
    return models.users
      .findById(args.id)
      .then((user) => {
        return user.update({ 
          username: args.username, 
          password: args.password, 
          email: args.email, 
          is_admin: args.is_admin 
        })
      })
  }
}