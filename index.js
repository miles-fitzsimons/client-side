// var xhr = require('xhr')
var catHBS = require('./views/cats.hbs')

// var endpoint = 'https://api.wheretheiss.at/v1/satellites'
var endpoint = 'http://localhost:3000/cats'

$('#btn').click(function() {
	// xhr.get(endpoint, function(err, data) {
	// 	if(err) {
	// 		console.log('ERR::', err)
	// 	}
	// 	var cats = JSON.parse(data.body)
	// 	var obj = {cats:cats}
	// 	// obj.cats = cats
	// 	$('main').append(catHBS(obj))
	// })
	fetch(endpoint)
		.then(function(result) {
			console.log(result)
			return result.json()
		})
		.then(function(result) {
					var cats = result
		var obj = {cats:cats}
		// obj.cats = cats
		$('main').append(catHBS(obj))
		})
})