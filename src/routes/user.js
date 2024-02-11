const express = require("express")
const userRouter = express.Router()
const userController = require("../controllers/user")
const authController = require("../controllers/auth")

userRouter.post("/login", authController.login)

userRouter
  .route("/")
  .get(userController.getUsers)
  .post(userController.createUser)

userRouter
  .route("/:id")
  .patch(userController.updateUser)
  .delete(userController.deleteUser)

module.exports = userRouter
