const catchAsync = require("../utils/catch_async")
const User = require("../models/user")
const createResp = require("../utils/create_resp")

/** @type {import('express').IRouterHandler} */
const getUsers = async (req, resp) => {
  const limit = Number(req.limit) || 10
  const skip = Number(req.query) - 1 * limit

  console.log(req.query)
  const users = await User.find().skip(skip).limit(limit)

  resp.json(createResp({ users }))
}

/** @type {import('express').IRouterHandler} */
const createUser = async (req, res) => {
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
