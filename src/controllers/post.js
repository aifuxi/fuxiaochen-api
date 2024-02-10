/** @type {import('express').RequestHandler} */
exports.getPosts = (req, resp) => {
  resp.json({
    code: 0,
    msg: "get posts",
  })
}

/** @type {import('express').RequestHandler} */
exports.createPost = (req, resp) => {
  resp.json({
    code: 0,
    msg: "create posts",
  })
}

/** @type {import('express').RequestHandler} */
exports.updatePost = (req, resp) => {
  resp.json({
    code: 0,
    msg: "update posts",
  })
}

/** @type {import('express').RequestHandler} */
exports.deletePost = (req, resp) => {
  resp.json({
    code: 0,
    msg: "delete posts",
  })
}
