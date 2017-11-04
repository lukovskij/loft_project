let express = require('express');

let app = express();

let port = process.env.PORT || 3000;


app.use(express.static('app'))

app.use('/app', express.static(__dirname + '/app'));

app.get('/', function(req, res) {

	res.sendFile('index.html', {root: __dirname + '/app/'});

});

app.listen(port, function(){

	console.log('listen port ', port);

});




