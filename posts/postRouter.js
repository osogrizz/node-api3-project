const express = require('express');

const Posts = require('./postDb')


const router = express.Router();

router.get('/', (req, res) => {
  // do your magic!
  Posts.get()
  .then(posts => {
    res.status(200).jsaon(posts)
  })
  .catch(err => {
    res.status(400).json({errorMessage: 'Posts not found.'})
  })
});

router.get('/:id', (req, res) => {
  // do your magic!
  const {id} = req.params
  Posts.findById(id)
  .then(post => {
    res.status(200).json(post)
  })
  .catch(err => {
    res.status(400).json({errorMessage: 'Post with that ID not found.'})
  })
});

router.delete('/:id', (req, res) => {
  // do your magic!
  const {id} = req.params
  Posts.findById(id)
  .then(deleted => {
    res.status(200).json(deleted)
  })
  .catch(err => {
    res.status(400).json({errorMessage: 'Couild not delete posts with that ID.'})
  })
});

router.put('/:id', (req, res) => {
  // do your magic!
  const {id} = req.params
  const postData = req.params.body
  Posts.update(id, postData)
  .then(updated => {
    res.status(201).json(updated)
  })
  .catch(err => {
    res.status(400).json({errorMessage: 'Cannot update that post.'})
  })
});

// custom middleware

function validatePost(req, res, next) {
  // do your magic!
  const postData = req.body
  if (!postData) {
    res.status(404).json({errorMessage: 'missing post data.'})
  } 
  if (!postData.text) {
    res.status(404).json({errorMessage: 'missing required text field'})
  }

}

module.exports = router;
