//dependencies
const express 	= require('express');
const app		= express();
const port  	= process.env.PORT || 8000;

//middleware
app.use(express.static('public'));

//listener
app.listen(port, ()=> {
	console.log('listening bruh');
});