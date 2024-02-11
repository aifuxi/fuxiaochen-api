const jwt = require("jsonwebtoken")

const User = require("../models/user")
const catchAsync = require("../utils/ catchAsync")
const AppError = require("../utils/appError")
const createResp = require("../utils/createResp")

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
  const token = jwt.sign({ id: user.id }, "jwt secret", { expiresIn: "1h" })

  res.json(createResp({ token }))
}

module.exports = {
  login: catchAsync(login),
}
