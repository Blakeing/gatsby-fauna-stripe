const stripe = require("stripe")(process.env.STRIPE_SECRET_KEY)
const { faunaFetch } = require("./utils/fauna")

exports.handler = async (event, context) => {
  const { user } = context.clientContext

  return {
    statusCode: 200,
    body: JSON.stringify(user),
  }
}
