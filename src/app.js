const express = require("express")
const morgan = require("morgan")
const postRouter = require("./routes/post")
const app = express()

async function main() {
  // 请求日志中间件
  app.use(morgan("dev"))

  // 解析json body中间件
  app.use(express.json())

  app.use("/api/v1", postRouter)

  const PORT = 6121

  app.listen(PORT, () => {
    console.log(`服务已启动: http://127.0.0.1:${PORT}`)
  })
}

main().catch((err) => {
  console.log("服务器错误: ", err)
})
