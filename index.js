//-------------

let express = require('express');
let bodyParser = require('body-parser');
let mongoose = require('mongoose');
let apiRoutes = require("./api-routes");

let app = express();

// Configure bodyparser to handle post requests
app.use(bodyParser.urlencoded({
	extended: true
}));
app.use(bodyParser.json());

// Connect to Mongoose and set connection variable
//mongoose.connect('mongodb://localhost/resthub');
mongoose.connect(
	'mongodb://johan-higuita:johandim1913@integro-test-shard-00-00-zdcy8.mongodb.net:27017,integro-test-shard-00-01-zdcy8.mongodb.net:27017,integro-test-shard-00-02-zdcy8.mongodb.net:27017/test?ssl=true&replicaSet=integro-test-shard-0&authSource=admin&retryWrites=true',
	{ useNewUrlParser: true }
	);
var db = mongoose.connection;
// Setup server port
var port = process.env.PORT || 8080;

// Send message for default URL
app.get('/', (req, res) => res.send('Hello World with Express'));

// Use Api routes in the App
app.use('/api', apiRoutes)
// Launch app to listen to specified port

app.listen(port, function () {
	console.log("Running Integ.ro test on port " + port);
});