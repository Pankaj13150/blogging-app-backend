const express = require('express');
const router = express.Router();
const postController = require('../controllers/postController');

// Get all posts by a specific user
router.get('/:userId/posts', postController.getPostsByUser);

module.exports = router;
