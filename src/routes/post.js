const express = require("express")
const postRouter = express.Router()
const postController = require("../controllers/post")
const authController = require("../controllers/auth")

postRouter.use(authController.checkLogin)

postRouter
  .route("/")
  .get(postController.getPosts)
  .post(postController.createPost)

postRouter
  .route("/:id")
  .get(postController.getPost)
  .patch(postController.updatePost)
  .delete(postController.deletePost)

module.exports = postRouter
