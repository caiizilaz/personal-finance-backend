import express from 'express'
import bodyParser from 'body-parser'
import jwt from 'jsonwebtoken'
import models from './models/index.js'
import GraphHTTP from 'express-graphql'
import Schema from './graphql'
import constants from './config/constants'

const app = express()

const auth = async (req) => {
  const bearerLength = "Bearer ".length;
  const token = req.headers.authorization.slice(bearerLength)
  try {
    const { username } = await jwt.verify(token, constants.JWT_SECRET)
    req.user = username
  } catch (err) {
    console.log(err)
  }
  req.next()
}

app.use(auth)

const server = port =>
  app.listen(port, () => console.log('Server is listening on port ' + port))


models.sequelize.sync()
  .then(() => server(8080))
  .catch((e) => {
    throw new Error(e)
  })

app.use(bodyParser.json())
app.use(bodyParser.urlencoded({ extended: false }))

app.use('/graphql', GraphHTTP((req) => ({
  schema: Schema,
  context: { user: req.user },
  pretty: true,
  graphiql: true
})))