const express = require('express')
const app = express()
const port = process.env.PORT || 3003
var cors = require('cors')
const parser = require('body-parser')
const knex= require('./knex');
require('dotenv').config()

app.use(cors())
app.use(parser.json())

app.get('/sellers/:char', (req, res)=> {
  knex('sellers').where('sellers.name', 'like', `${(req.params.char).charAt(0).toUpperCase()}%`)
  .then((rows) => {
    res.send(rows);
  })
  .catch((err) => {
    next(err);
  });
})

app.get('/markets', (req, res) => {
  return knex('markets')
  .returning('id', 'name')
  .then(items => {
    const nestedShops = items.map(item => {
      return knex('sellers').where('sellers.market_id', item.id)
      .then(stores => {
        item.stores = stores
        return item
    })
    })
    return Promise.all(nestedShops)
  })
  .then((rows) => {
    res.send(rows);
  })
  .catch((err) => {
    next(err);
  });
})

app.get('/ingredients', (req, res) => {
  knex('items')
  .then((rows) => {
    res.send(rows);
  })
  .catch((err) => {
    next(err);
  });
})

app.get('/ingredients/:char', (req, res) => {
    return knex('items').where('items.name', 'like', `${req.params.char}%`)
    .returning('id', 'name')
    .then(items => {
        const nestedStores = items.map(item =>{
            return knex('menu').join('sellers', 'menu.stall_id', 'sellers.id').where('menu.item_id', item.item_id)
            .then(stores => {
                item.stores = stores
                return item
            })
        }) 
      return Promise.all(nestedStores)
    })
      .then((rows) => {
        res.send(rows);
      })
      .catch((err) => {
        next(err);
      });
    })

app.listen(port, () => console.log(`Example app listening on port ${port}! Yay SQL!`))
