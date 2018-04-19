import express from 'express'
import bodyParser from 'body-parser'
import models from './models/index.js'
import GraphHTTP from 'express-graphql'
import Schema from './graphql'

const app = express()
const router = express.Router()

const server = port =>
  app.listen(port, () => console.log('Server is listening on port ' + port))


models.sequelize.sync()
  .then(() => server(8080))
  .catch((e) => {
    throw new Error(e)
  })

app.use(bodyParser.json())
app.use(bodyParser.urlencoded({ extended: false }))

app.use('/graphql', GraphHTTP((request) => ({
  schema: Schema,
  context: { user: request.user },
  pretty: true,
  graphiql: true
})))