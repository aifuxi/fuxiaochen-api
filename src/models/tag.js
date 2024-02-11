const mongoose = require("mongoose")

const tagSchema = new mongoose.Schema(
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
    icon: String,
    deletedAt: {
      type: Date,
      default: null,
    },
    postIDs: Array,
  },
  { timestamps: true },
)

const Tag = mongoose.model("Tag", tagSchema)

module.exports = Tag
