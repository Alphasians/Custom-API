const express = require('express');
const route = express.Router();

const operationsFeed = require('../controllers/operationsFeed.js');


route
	.route('/feed')
	.get(operationsFeed.getFeed)
	.post(operationsFeed.createFeed)
	.put(operationsFeed.updateFeed)
	.delete(operationsFeed.deleteFeed);

module.exports = route;

// Assignment
//const operationsController = require('../controllers/operationsController.js');
// route
// 	.route("/tasks")
// 	.get(operationsController.getTasks)
// 	.post(operationsController.createTask);
