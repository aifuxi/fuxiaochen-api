const catchAsync = require("../utils/ catchAsync")
const AppError = require("../utils/appError")
const User = require("../models/user")
const createResp = require("../utils/createResp")

/** @type {import('express').IRouterHandler} */
const getUsers = async (req, resp, next) => {
  resp.json({
    code: 0,
    msg: "get users",
  })
}

/** @type {import('express').IRouterHandler} */
const createUser = async (req, res, next) => {
  const { username, password } = req.body

  const user = await User.create({
    username,
    password,
  })

  res.json(createResp({ user }))
}

/** @type {import('express').IRouterHandler} */
const updateUser = (req, resp) => {
  resp.json({
    code: 0,
    msg: "update users",
  })
}

/** @type {import('express').IRouterHandler} */
const deleteUser = (req, resp) => {
  resp.json({
    code: 0,
    msg: "delete users",
  })
}

module.exports = {
  getUsers: catchAsync(getUsers),
  createUser: catchAsync(createUser),
  updateUser: catchAsync(updateUser),
  deleteUser: catchAsync(deleteUser),
}
