const express = require('express');
const server = require('./index.js');

const port = process.env.PORT;

console.log('Application started');

server.listen(port, () => {
	console.log(`Server started on port ${port}`);
});
