var path = require('path')
var express = require('express')
var hbs = require('express-handlebars')
var bodyParser = require('body-parser')
var morgan = require('morgan')

var routes = require ('./routes')

var PORT = 3000
var app = express()
app.use(morgan('combined'))
app.engine('hbs', hbs())
app.set('set engine', 'hbs')
app.set('views', path.join(__dirname, 'views'))
app.use(bodyParser.urlencoded())
app.use(express.static(path.join(__dirname, 'public')))

 ///routes


 ////////

 app.listen(PORT, function (){
   console.log('holla on port', PORT)
 })
