import models from '../../../models/index.js'
import User from '../../types/user'
import UserInput from '../../inputs/user'

export default {
  type: User,
  args: {
    user: {
      type: UserInput
    }
  },
  resolve(source, args) {
    return models.users.build({
      username: args.user.username,
      password: args.user.password,
      email: args.user.email,
      is_admin: args.user.is_admin,
    }).save().then((data) => {
      return models.users.findById(data.id)
    })
  }
}