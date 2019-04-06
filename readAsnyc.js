var fs = require('fs')


var readMe = fs.readFile('./readme.txt', 'utf8', function(err, data){
	console.log(data);
})



console.log('finish')


