'use strict';

// Make our .env configuration file available
require('dotenv').config()

// Import libraries
const http = require('http')
const axios = require('axios')
const { compose, composeP, curryN, pick, prop } = require('ramda')
const { cors, json, logger, methods, mount, parseJson, routes } = require('paperplane')


// Application-specific code
const getForecast = curryN(2, (key, { params, query }) =>
  axios({
    method: 'GET',
    url: `https://api.darksky.net/forecast/${key}/${params.coords}`,
    params: query
  })
  .then(prop('data'))
)

const forecast = compose(
  composeP(
    json,
    getForecast(process.env.DARK_SKY_SECRET)
  ),
  pick(['params', 'query'])
)

const endpoints = routes({
  '/forecast/:coords': methods({
    GET: forecast
  })
})

const app = compose(endpoints, parseJson)


// Server options
const corsOpts = { methods: 'GET' }
const corsApp = cors(app, corsOpts)
const opts = { errLogger: logger, logger }
const port = process.env.PORT || 3000
const listening = err => err ? console.error(err) : console.info(`Listening on port: ${port}`)


// Start the server
http.createServer(mount(corsApp, opts)).listen(port, listening)
