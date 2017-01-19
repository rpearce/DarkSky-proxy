'use strict';

const Hapi = require('hapi')
const request = require('request')

const server = new Hapi.Server()
const DARK_SKY_SECRET = process.env.DARK_SKY_SECRET
const forecastUri = `https://api.darksky.net/forecast/${DARK_SKY_SECRET}`

server.connection({
  host: 'localhost',
  port: 5050,
  routes: {
    cors: true
  }
})

server.route({
  method: 'GET',
  path: '/darksky/{lat},{lng}',
  config: {
    cors: {
      origin: ['*']
    }
  },
  handler(req, reply) {
    const { lat, lng } = req.params
    const uri = forecastUri.concat(`/${lat},${lng}`)
    return request(uri, (error, response, body) => {
      if (!error && response.statusCode === 200) {
        reply(body)
      }
      // TODO: handle errors
    })
  }
})

// Start the server
server.start((err) => {
  if (err) throw err

  console.log('Server running at:', server.info.uri)
})
