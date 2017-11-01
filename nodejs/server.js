const http = require('http');
const routing = require('./routing');


let server = new http.Server(function(req, res){

		 var jssonString = '';
		 res.setHeader('Content-Type', 'application/json');

		 req.on('data', (data) => {

        jssonString += data;

		 });

		 req.on('end', () => {

         routing.define(req, res, jssonString);

		 });

});

server.listen(8000, 'localhost');