const express = require('express')
const app = express()
const port = 3001
var cors = require('cors')
const parser = require('body-parser')
const knex= require('./knex');

app.use(cors())
app.use(parser.json())

app.get('/markets', (req, res) => {
    knex('markets').select('markets.name', 'sellers.name', 'city', 'state', 'url')
    .join('sellers', 'sellers.market_id', 'markets.id')
    .then((rows) => {
      res.send(rows);
    })
    .catch((err) => {
      next(err);
    });
})

app.get('/business/:char', (req, res) => {
    knex('sellers').join('markets', '')
    .then((rows) => {
      res.send(rows);
    })
    .catch((err) => {
      next(err);
    });
})



app.listen(port, () => console.log(`Example app listening on port ${port}! Yay SQL!`))