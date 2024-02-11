const jwt = require("jsonwebtoken")

const User = require("../models/user")
const catchAsync = require("../utils/catch_async")
const AppError = require("../utils/app_error")
const createResp = require("../utils/create_resp")

const JTW_SECRET = "jwt secret"

const login = async (req, res, next) => {
  const { username, password } = req.body

  if (!username || !password) {
    return next(new AppError(4000, "请求参数错误"))
  }

  const user = await User.findOne({ username })

  if (!user) {
    return next(new AppError(4000, "用户名或密码错误"))
  }

  // 检查密码是否正确
  const correct = user.correctPassword(password)

  if (!correct) {
    return next(new AppError(4000, "用户名或密码错误"))
  }

  // 生成 token
  const token = jwt.sign({ id: user.id }, JTW_SECRET, { expiresIn: "1h" })

  // 把当前 token 保存到数据库中，防止同时有多个 token 生效
  user.token = token
  user.save()

  res.json(createResp({ token }))
}

const checkLogin = async (req, res, next) => {
  // 获取 token
  const token = req.headers["x-token"]

  if (!token) {
    return next(new AppError(4001, "未登录"))
  }

  // 验证 token 是否合法
  const payload = jwt.verify(token, JTW_SECRET)

  console.log(payload)

  // 检查 token 是否过期; exp 单位是秒
  if (payload.exp * 1000 < Date.now()) {
    return next(new AppError(4001, "登录信息已过期"))
  }

  const user = await User.findById(payload.id)

  // 1. 判断 token 中用户是否存在
  // 2. 判断数据库中用户当前的 token 是否和传过来的一样
  if (!user || user.token !== token) {
    return next(new AppError(4001, "无效的token"))
  }

  next()
}

module.exports = {
  login: catchAsync(login),
  checkLogin: catchAsync(checkLogin),
}
