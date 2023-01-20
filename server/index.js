const express = require('express')
const cors = require('cors')
const db = require('./util/database')
const {User, Shoe, Cart} = require('./util/models')
const seed = require('./util/seed')
const {signUp, login} = require('./controllers/users')
const {getAllShoes, getShoe} = require('./controllers/shoe')

const server = express() 
server.use(express.json())
server.use(cors())

User.hasMany(Cart)
Cart.belongsTo(User)

Shoe.hasMany(Cart)
Cart.belongsTo(Shoe)

server.get('/api/allShoes', getAllShoes)
server.get('/api/shoes/:id', getShoe)
server.post('/api/signup', signUp)
server.post('/api/login', login)

// db.sync()
db.sync({force: true})
.then(() => seed())
server.listen(4000, () => console.log('Server runs on 4000'))