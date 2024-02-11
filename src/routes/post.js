const express = require("express")
const postRouter = express.Router()
const postController = require("../controllers/post")

postRouter
  .route("/")
  .get(postController.getPosts)
  .post(postController.createPost)

postRouter
  .route("/:id")
  .patch(postController.updatePost)
  .delete(postController.deletePost)

module.exports = postRouter
