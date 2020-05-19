exports.handler = async (...args) => {
  consolelog(JSON.stringify(args, null, 2))

  return {
    statusCode: 200,
    body: "ok",
  }
}
