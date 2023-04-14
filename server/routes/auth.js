const { OAuth2Client } = require("google-auth-library");
require("dotenv").config;

const client = new OAuth2Client(process.env.CLIENT_ID);
async function tokenVerification(token) {
  const ticket = await client.verifyIdToken({ idToken: token });
  const payload = ticket.getPayload();
  //   console.log(payload);
  return payload;
}

module.exports.tokenVerification = tokenVerification;
