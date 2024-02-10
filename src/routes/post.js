const express = require("express")
const postRouter = express.Router()

postRouter
  .route("/posts")
  .get((req, resp) => {
    resp.json({ code: 0, msg: "get success" })
  })
  .post((req, resp) => {
    resp.json({ code: 0, msg: "post success" })
  })

module.exports = postRouter
