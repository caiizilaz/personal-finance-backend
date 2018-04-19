import { GraphQLNonNull, GraphQLInt } from 'graphql'
import models from '../../../models/index.js'
import User from '../../types/user'

export default {
  type: User,
  args: {
    id: { type: new GraphQLNonNull(GraphQLInt) },
  },
  resolve(source, args) {
    return models.users
      .findById(args.id)
      .then((user) => {
        return user.destroy({ force: true });
      });
  }
}