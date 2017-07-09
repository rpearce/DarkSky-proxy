'use strict';

// Make our .env configuration file available
require('dotenv').config()

// Import libraries
const http = require('http')
const axios = require('axios')
const { compose, composeP, curryN, path, prop } = require('ramda')
const { json, logger, methods, mount, parseJson, routes } = require('paperplane')


// Application-specific code
const getForecast = curryN(2, (key, coords) =>
  axios({
    method: 'GET',
    url: `https://api.darksky.net/forecast/${key}/${coords}`
  })
  .then(prop('data'))
)

const forecast = compose(
  composeP(
    json,
    getForecast(process.env.DARK_SKY_SECRET)
  ),
  path(['params', 'coords'])
)

const endpoints = routes({
  '/forecast/:coords': methods({
    GET: forecast
  })
})

const app = compose(endpoints, parseJson)


// Server options
const opts = { errLogger: logger, logger }
const port = process.env.PORT || 3000
const listening = err => err ? console.error(err) : console.info(`Listening on port: ${port}`)


// Start the server
http.createServer(mount(app), opts).listen(port, listening)
