const express = require('express');
const Users = require('./users/userDb')
const postRouter = require('../posts/postRouter')

const router = express.Router();

router.use('/:id/posts', postRouter)
// router.use(express.json())

router.post('/', (req, res) => {
  // do your magic!

});

router.post('/:id/posts', (req, res) => {
  // do your magic!
});

router.get('/', (req, res) => {
  // do your magic!
  Users.get()
  .then( users => {
    res.status(200).json(users)
  })
  .catch(err => {
    res.status(404).json({errorMessage: 'No users found.'})
  })
});

router.get('/:id', (req, res) => {
  // do your magic!
  const {id} = req.params
  Users.getById(id)
  .then(user => {
    res.status(200).json(user)
  })
  .catch(err => {
    res.status(404).json({errorMessage: 'User with that ID not found.'})
  })
});

router.get('/:id/posts', (req, res) => {
  // do your magic!
});

router.delete('/:id', (req, res) => {
  // do your magic!
});

router.put('/:id', (req, res) => {
  // do your magic!
});

//custom middleware

function validateUserId(req, res, next) {
  // do your magic!
}

function validateUser(req, res, next) {
  // do your magic!
}

function validatePost(req, res, next) {
  // do your magic!
}

module.exports = router;
