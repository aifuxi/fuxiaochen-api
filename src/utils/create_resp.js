const createResp = (data, code, msg) => {
  return {
    code: code || 0,
    msg: msg || "success",
    data: data || null,
  }
}

module.exports = createResp
