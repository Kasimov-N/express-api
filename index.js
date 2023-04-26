const express = require('express')
const app = express()
const DATA = require('./data')

app.use(express.json())
app.use(express.urlencoded({extended: false}))
app.use('/', require('./routes'))

app.listen(3003, ()=>{`Listening on port: 3003`})