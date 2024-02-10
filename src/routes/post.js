const express = require("express")
const postRouter = express.Router()
const postController = require("../controllers/post")

postRouter
  .route("/posts")
  .get(postController.getPosts)
  .post(postController.createPost)

postRouter
  .route("/posts/:id")
  .put(postController.updatePost)
  .delete(postController.deletePost)

module.exports = postRouter
