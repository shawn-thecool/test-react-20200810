// import modules
const express = require('express')
const logger = require('morgan')
const app = express()

// constants
const { SERVER_PORT } = require('./constants')

// middlewares
app.use(require('cors')())
app.use(logger('dev'))
app.use(express.json())

// index
app.get('/', (req, res) =>
  res.json({
    msg: 'check routers',
    routers: [
      'http://localhost:4000/api/v1/action-banners',
      'http://localhost:4000/api/v1/action-messages'
    ]
  })
)

// routers
app.use('/api/v1/action-banners', require('./api/v1/actionBanners'))
app.use('/api/v1/action-messages', require('./api/v1/actionMessages'))

// not found
app.get('*', (req, res) => res.json({ msg: 'page not found' }))

//server
app.listen(SERVER_PORT, () =>
  console.log(`server is listing on port ${SERVER_PORT}`)
)
