const express = require('express');

const server = express();
server.use(express.json())

server.get('/', (req, res) => {
  res.send(`<h2>Let's write some middleware!</h2>`);
});

//custom middleware


// function logger(req, res, next) {
//   console.log(`${req.method} ${req.url} [${newDate().toISOString()}] `)
//   next()
// }

// function validateUserId(req, res, next) {
//   const {id} = req.params
//   if (!id) {
//     res.send(400).json({errorMessage: 'invalid user id'})
//   } else {
//     const userData = req.user
//     next()
//   }
// }

// function validateUser(req, res, next) {
//   const userData = req.params.body
//   if (userData) {
//     next()
//   } else if (!userData.name) {
//     res.status(400).json({errorMessage: 'missing required name field'})
//   } else {
//     res.status(400).json({errorMessage: 'missing user data'})
//   }
// }

// function validatePost(req, res, next) {

// }

function logger(req, res, next) {
  console.log(`${req.method} ${req.url} [${newDate().toISOString()}]`)
}

module.exports = server;
