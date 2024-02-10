const AppError = require("../utils/appError")

exports.globalErrorHandler = (err, req, resp, next) => {
  resp.json({
    code: err.code || 5000,
    msg: err.message || "服务器内部错误",
    stack: err.stack,
  })
}

exports.notFoundHandler = (req, resp, next) => {
  next(new AppError(4004, `路径: ${req.originalUrl} 未找到`))
}
