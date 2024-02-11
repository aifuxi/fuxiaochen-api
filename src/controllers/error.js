const AppError = require("../utils/app_error")

exports.globalErrorHandler = (err, req, resp, next) => {
  resp.json({
    code: err.code || 5000,
    msg: err.message || "服务器内部错误",
    err: err,
    stack: err.stack,
  })
}

exports.notFoundHandler = (req, resp, next) => {
  return next(new AppError(4004, `路径: ${req.originalUrl} 未找到`))
}
