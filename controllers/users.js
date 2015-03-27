var User = require('../models/user');

exports.getUsers = function(req, res) {
	// body...
	// res.send(["jesus", "nevarez", "pedro", "juan"]);
	/*
	User.find().exec()
	.then(function(response) {

	})
	.then(function(error) {

	});
	*/
	User.find(function(error, response) {
		if (error)	
			res.status(404).end();
		else
			res.status(200).send(response);
	});
};

exports.getUserById = function(req, res) {
	// body...
	User.findById(req.param('id'), function(error, response) {
		if (error)	
			res.status(404).end();
		else
			res.status(200).send(response);
	});
};

exports.create = function(req, res) {
	// body...
	User.create(req.body)
	.then(function(response) {
		// success
		res.status(201).send(response);
	})
	.then(undefined, function(error) {
		// error
		res.status(500).send(error);
	});
};

exports.update = function(req, res) {
	// body...
	/*
	User.findByIdAndUpdate(req.param('id'), req.body, function(error, response) {
		if (error)
			res.status(404).end();
		else
			res.status(200).send(response);
	});
	*/
	User.findById(req.param('id'), function(error, response) {
		if (error)	
			res.status(500).end();
		else {
			req.body._id = req.param('id');
			var user = new User(req.body);
			user.save(function(error, response) {
				if (error)	
					res.status(500).end();
				else
					res.status(200).send(response);
			});
		}
	});
};

exports.delete = function(req, res) {
	// body...
};
