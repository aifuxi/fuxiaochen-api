const mongoose = require("mongoose")

const postSchema = new mongoose.Schema(
  {
    title: {
      type: String,
      unique: true,
      trim: true,
      required: true,
    },
    desc: {
      type: String,
      required: true,
    },
    cover: {
      type: String,
      trim: true,
    },
    author: {
      type: String,
      required: true,
    },
    type: {
      type: String,
      // 文章类型：原创、转载、翻译
      enum: ["original", "reprint", "translate"],
      required: true,
    },
    status: {
      type: String,
      // 文章状态：已发布、草稿、加密
      enum: ["published", "draft", "encrypted"],
      required: true,
    },
    // 文章加密的密码
    decryptKey: String,
    body: {
      type: String,
      required: true,
    },
    slug: {
      type: String,
      unique: true,
      required: true,
      trim: true,
    },
    deletedAt: {
      type: Date,
      default: null,
    },
    likes: Number,
    views: Number,
    tagIDs: Array,
    categoryIDs: Array,
  },
  { timestamps: true },
)

const Post = mongoose.model("Post", postSchema)

module.exports = Post
