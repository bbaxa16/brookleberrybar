//dependencies
const express 	= require('express');
const app		= express();

//middleware
app.use(express.static('public'));

//listener
app.listen(process.env.PORT || 2080,()=> {
	console.log('listening bruh');
});