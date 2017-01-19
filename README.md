# DarkSky-proxy
Node.JS proxy for [DarkSky's Forecast API](https://darksky.net/dev/docs/forecast)

## Installation
* clone the repository
* install dependencies by running `$ yarn` or `$ npm i`

## Usage
* get an API key from DarkSky
* copy the `.env.example` file to be `.env` and change `abc123` to be your DarkSky API key
* edit the server configuration in `index.js` to your liking (port, CORS, etc)
* run `$ npm start` from the console
* send a request to `http://localhost:5050/forecast/[lat],[lng]`
