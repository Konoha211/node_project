// Import the express library and assign it to a variable
import fetch from 'node-fetch'
import express from 'express'


// Create an instance of an express application 
const app = express()
app.use(express.json())

// Set the port the application will be running on
const port = process.env.PORT || 3001

// Set up a response for the root path of the application
app.get('/', (req, res) => {
  var colors = require('colors');
 
console.log('hello'.green); 
console.log('i like cake and pies'.underline.red) 
console.log('inverse the color'.inverse); 
console.log('OMG Rainbows!'.rainbow);
console.log('Run the trap'.trap); 
  res.json({ data: "response goes here" })
  console.log("this is about the endpoint")
})

// Set the application to listen a port
app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})

// Example of an application route that makes a request to another server
app.get('/advice', async (req, res) => {
  // Make a request to another wbesite and wait for a response
  const response = await fetch('http://149.31.107.85:3001/advice')

  // Read the response
  const body = await response.json()

  // Print the repsonse body to the console
  console.log(body)

  // Get the advice text string from the response body object
  const advice = body.slip.advice

  res.json({ data: advice })
})