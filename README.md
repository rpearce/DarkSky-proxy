# DarkSky-proxy
Node.JS proxy for [DarkSky's Forecast API](https://darksky.net/dev/docs/forecast)

## Installation
* clone the repository
* install dependencies by running `$ yarn` or `$ npm i`

## Usage
* get an API key from DarkSky
* Edit the server configuration in `index.js` to your liking
* `$ DARK_SKY_SECRET=abc123 npm start`
* send a request to `http://localhost:5050/darksky/[lat],[lng]`
