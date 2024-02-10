/** @type {import('express').IRouterHandler} */
exports.getPosts = (req, resp) => {
  resp.json({
    code: 0,
    msg: "get posts",
  })
}

/** @type {import('express').IRouterHandler} */
exports.createPost = (req, resp) => {
  resp.json({
    code: 0,
    msg: "create posts",
  })
}

/** @type {import('express').IRouterHandler} */
exports.updatePost = (req, resp) => {
  resp.json({
    code: 0,
    msg: "update posts",
  })
}

/** @type {import('express').IRouterHandler} */
exports.deletePost = (req, resp) => {
  resp.json({
    code: 0,
    msg: "delete posts",
  })
}
