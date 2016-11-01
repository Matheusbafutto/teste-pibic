var express = require('express'),
	app = express();
	
app.get('/', function(req, res) {
	res.send("teste");
});

app.listen(3000);
