const express = require('express')
const app = express()
const port = 3001
var cors = require('cors')
const parser = require('body-parser')
const knex= require('./knex');

app.use(cors())
app.use(parser.json())

app.get('/markets', (req, res) => {
    knex('markets').select('markets.name', 'sellers.name')
    .join('sellers', 'sellers.market_id', 'markets.id')
    .then((rows) => {
      res.send(rows);
    })
    .catch((err) => {
      next(err);
    });
})

// app.get('/ingredients/:char', (req, res) => {
//     return knex('items').where('items.name', 'like', `${req.params.char}%`)
//     .returning('id')
//     .then((responce) => {
//        return knex.select('*').from('menu').join('sellers', 'menu.stall_id', 'sellers.id').where('menu.item_id', responce[0].item_id)
//     })
//     .then((rows) => {
//         res.send(rows);
//     })
//     .catch((err) => {
//         next(err);
//       })
//     })

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
        }).then((rows) => {
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