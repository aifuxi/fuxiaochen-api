const mongoose = require("mongoose")

const categorySchema = new mongoose.Schema(
  {
    name: {
      type: String,
      unique: true,
      required: true,
      trim: true,
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
    postIDs: Array,
  },
  { timestamps: true },
)

const Category = mongoose.model("Category", categorySchema)

module.exports = Category
