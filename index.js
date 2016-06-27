var xhr = require('xhr')
var greeting = require('./views/greeting.hbs')
var catHBS = require('./views/cats.hbs')

// var endpoint = 'https://api.wheretheiss.at/v1/satellites'
var endpoint = 'http://localhost:3000/cats'

xhr.get(endpoint, function (err, data) {
  if (err) {
    console.error("ERR::", err)
  }
  console.log(data.body)
  var cats = JSON.parse(data.body)
  var obj = {}
  obj.cats = cats
  console.log("AAAA::", obj)
  var target = document.getElementsByTagName('main')[0]
  target.innerHTML = catHBS(obj)
})
