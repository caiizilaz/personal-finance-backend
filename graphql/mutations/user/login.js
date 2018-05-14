import { GraphQLString } from 'graphql'
import models from '../../../models/index.js'
import Auth from '../../types/auth'

export default {
  type: Auth,
  args: {
    username: { type: GraphQLString },
    password: { type: GraphQLString },
  },
  resolve(source, args) {
    return models.users
      .findOne({ where: { username: args.username } })
      .then((user) => {
        if (!user || !user.authenticate(args.password)) {
          return {
            token: null,
            error: "Username or Password is not valid"
          }
        }

        return user.createToken()
      })
  }
}