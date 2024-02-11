const express = require("express")
const morgan = require("morgan")
const mongoose = require("mongoose")

const postRouter = require("./routes/post")
const userRouter = require("./routes/user")
const AppError = require("./utils/appError")
const { globalErrorHandler, notFoundHandler } = require("./controllers/error")

const app = express()

const PORT = 6122
const ADMIN_API_V1 = "/admin-api/v1"

async function main() {
  // 连接 MongoDB
  await mongoose.connect("mongodb://127.0.0.1:27017/fuxiaochen-api")

  // 请求日志中间件
  app.use(morgan("dev"))

  // 解析json body中间件
  app.use(express.json())

  app.use(`${ADMIN_API_V1}/posts`, postRouter)
  app.use(`${ADMIN_API_V1}/users`, userRouter)

  // 兜底路由
  app.all("*", notFoundHandler)

  // 全局错误处理中间件
  app.use(globalErrorHandler)

  app.listen(PORT, () => {
    console.log(`服务已启动: http://127.0.0.1:${PORT}`)
  })
}

main().catch((err) => {
  console.log("服务器错误: ", err)
})
