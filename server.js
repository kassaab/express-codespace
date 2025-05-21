//include Express
const express = require('express');

//server will listen on this port
const port = 3000;

//create instance of Express app
const app = express();

//index/home URL
app.get('/',(req,res)=>{
    res.send(`
	    <h1>Welcome to Abraham Kassa's About Page</h1>
      <p>Ola Express!</p>
  `);

});

//about page/url
app.get('/about',(req,res)=>{
    res.send(`
	    <h1>About Page</h1>
      <p>Stuff about us goes here!</p>
  `);

});


//Set server to listen for requests
app.listen(port, () => {
  console.log(`Server running at port: ${port}`);
});
