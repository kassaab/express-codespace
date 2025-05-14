//include Express
const express = require('express');

//set port
const port = 3000;

const app = express();

app.get('/', (req.res) => {
	res.send(`
	  <h1>Here’s my home page</h1>
	  <p>Welcome to Express!</p>
`)
});


//Set server to listen for requests
app.listen(port, () => {
  console.log(`Server running at port: ${port}`);
});
