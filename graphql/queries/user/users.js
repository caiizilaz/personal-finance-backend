import {
  GraphQLList,
  GraphQLInt,
} from 'graphql'

import models from '../../../models/index.js'
import User from '../../types/user'

export default {
    type: new GraphQLList(User),
    args: {
        id: {
            type: GraphQLInt
        }
    },
    resolve(root, args) {
        return models.users.findAll({where: args })
    }
}