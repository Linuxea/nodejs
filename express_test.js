var ex = require('express')

var app = ex()
app.get("/hello", function(req, resp){
 resp.send("Hello express")
})


app.listen(8080)

