const catchAsync = require("../utils/ catchAsync")
const AppError = require("../utils/appError")

/** @type {import('express').IRouterHandler} */
const getPosts = async (req, resp, next) => {
  const p = new Promise((resolve) => {
    setTimeout(() => {
      resolve()
    }, 1000)
  })
  await p

  return next(new AppError(6666, "我是测试"))

  resp.json({
    code: 0,
    msg: "get posts",
  })
}

/** @type {import('express').IRouterHandler} */
const createPost = (req, resp) => {
  resp.json({
    code: 0,
    msg: "create posts",
  })
}

/** @type {import('express').IRouterHandler} */
const updatePost = (req, resp) => {
  resp.json({
    code: 0,
    msg: "update posts",
  })
}

/** @type {import('express').IRouterHandler} */
const deletePost = (req, resp) => {
  resp.json({
    code: 0,
    msg: "delete posts",
  })
}

module.exports = {
  getPosts: catchAsync(getPosts),
  createPost: catchAsync(createPost),
  updatePost: catchAsync(updatePost),
  deletePost: catchAsync(deletePost),
}
