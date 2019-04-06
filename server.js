var http = require('http')


var server = http.createServer(function (request, response){
	console.log(request);
	response.writeHead(200, {'content-Type':'application/json'})
        response.write('{"name": "linuxea", "sex": "boy", "time" : "' + new Date +'"}')
	response.end()
})


server.listen(8080)
