import models from '../../../models/index.js'
import Auth from '../../types/auth'
import UserInput from '../../inputs/user'

export default {
  type: Auth,
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
    }).save().then(user => {
      return user.createToken()
    })
  }
}