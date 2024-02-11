const mongoose = require("mongoose")
const bcrypt = require("bcryptjs")

const userSchema = new mongoose.Schema(
  {
    username: {
      type: String,
      required: [true, "用户名必填"],
      unique: [true, "用户名已存在"],
      lowercase: true,
      minLength: [3, "用户名过短，最少3个字符"],
      maxLength: [10, "用户名过长，最多10个字符"],
    },
    password: {
      type: String,
      required: [true, "密码必填"],
      minLength: [6, "密码过短，最少6个字符"],
    },
    deletedAt: {
      type: Date,
      default: null,
    },
  },
  {
    timestamps: true,
  },
)

userSchema.pre("save", function (next) {
  // 用户数据插入数据库前，把密码加密
  const hashedPassword = bcrypt.hashSync(this.password, 12)
  this.password = hashedPassword

  next()
})

userSchema.methods.correctPassword = function (pwd) {
  return bcrypt.compareSync(pwd, this.password)
}

const User = mongoose.model("User", userSchema)

module.exports = User
