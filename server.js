var server = require('express');
var body = require('body-parser');
var mongoose = require('mongoose');
var app = server();

app.use(body.json());
require('./routes')(app);

var URI = "mongodb://root:123456@ds061188.mongolab.com:61188/cargas";
mongoose.connect(URI, function(err) {
	if (err)
		console.log(err);
	else
		console.log("Servidor de bases de datos listo!");
});

app.listen(3000, function(err) {
	if (err)
		console.log(err);
	else
		console.log("Servidor web listo!");
});
