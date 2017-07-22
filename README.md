# DarkSky-proxy
Node.JS proxy for [DarkSky's Forecast API](https://darksky.net/dev/docs/forecast)

## Setup
1. clone the repository
1. make it the current working directory: `$ cd DarkSky-proxy`
1. install dependencies: `$ npm i` or `$ yarn`
1. get an API key: [https://darksky.net/dev/](https://darksky.net/dev/)
1. copy `.env` file: `$ cp .env.example .env`
1. add your DarkSky API key to `.env`: `DARK_SKY_SECRET=abcdefg`
1. start the server: `$ node index.js`
1. from another terminal, try it: `$ curl http://localhost:5051/forecast/[lat],[lng]`
  * example: `$ curl http://localhost:5051/forecast/32.7765,79.9311`
