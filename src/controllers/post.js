const catchAsync = require("../utils/catch_async")
const AppError = require("../utils/app_error")

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

const createPost = (req, resp) => {
  resp.json({
    code: 0,
    msg: "create posts",
  })
}

const updatePost = (req, resp) => {
  resp.json({
    code: 0,
    msg: "update posts",
  })
}

const getPost = (req, resp) => {
  resp.json({
    code: 0,
    msg: "get post",
  })
}

const deletePost = (req, resp) => {
  resp.json({
    code: 0,
    msg: "delete posts",
  })
}

module.exports = {
  getPosts: catchAsync(getPosts),
  createPost: catchAsync(createPost),
  getPost: catchAsync(getPost),
  updatePost: catchAsync(updatePost),
  deletePost: catchAsync(deletePost),
}
