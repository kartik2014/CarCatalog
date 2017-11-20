var express = require('express');
var router = express.Router();

router.get('/', function(req, res, next) {
	res.json([
	{
		"id": 10,
		"name": "Porsche"
	},
	{
		"id": 20,
		"name": "Nissan"
	},
	{
		"id": 30,
		"name": "BMW"
	},
	{
		"id": 40,
		"name": "Audi"
	},
	{
		"id": 50,
		"name": "Mazda"
	}
	]);
});

module.exports = router;
