const express = require('express');
const router = express.Router();
const postController = require('../controllers/postController');
const { authenticateToken } = require('../middleware/auth');

// Get all posts
router.get('/', postController.getAllPosts);

// Get a specific post
router.get('/:id', postController.getPostById);

// Create a new post (requires authentication)
router.post('/', authenticateToken, postController.createPost);

// Update a post (requires authentication)
router.put('/:id', authenticateToken, postController.updatePost);

// Delete a post (requires authentication)
router.delete('/:id', authenticateToken, postController.deletePost);

module.exports = router;
