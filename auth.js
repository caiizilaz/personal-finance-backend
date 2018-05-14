
import constants from './config/constants'
import jwt from 'jsonwebtoken'

const auth = {
  getHeaders: async (req, res, next) => {
    let token = req.headers.authorization
    console.log(token)
    if (token) {
      const bearerLength = "Bearer ".length
      token = req.headers.authorization.slice(bearerLength)
      const { username } = await jwt.verify(token, constants.JWT_SECRET)
      req.user = username;
    }
    next();
  }
}

export default auth;