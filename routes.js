var users = require('./controllers/users');

module.exports = function(app) {
	app.get('/', function(req, res) {
		console.log("Aquí no hay nada!");
		// res.send("Hola");
		res.sendfile('templates/index.html');
	});

	// users

	app.get('/users', users.getUsers);
	app.get('/users/:id', users.getUserById);
	app.post('/users', users.create);
	app.put('/users/:id', users.update);
	app.delete('/users/:id', users.delete);
};
