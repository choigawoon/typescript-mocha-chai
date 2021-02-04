export { Stack } from './stack';

const express = require("express")
const bodyParser = require("body-parser")

// Initialize express and define a port
const app = express()
const PORT = 3000

// Tell express to use body-parser's JSON parsing
app.use(bodyParser.json())

// app.post("/hook", (req, res) => {
//   console.log(req.body) // Call your action on the request here
//   //res.status(200).end() // Responding is important
//   res.json({yes:1});
// })

app.get('/', (req, res) => {
  res.send([1,2,3]);
  console.log('/')
})
app.get('/version', (req, res) => {
  res.send({version: '1.0.0'});
  console.log('/version/')
})
app.post('/event', (req, res) => {
  console.log('/event');
  console.log(req);
  console.log(res.body);
});

// Start express on the defined port
app.listen(PORT, () => console.log(`🚀 Server running on port ${PORT}`))