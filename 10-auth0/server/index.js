const express = require("express");
const app = express();
const { auth } = require("express-oauth2-jwt-bearer");

// adding permission check
var guard = require("express-jwt-permissions")();

const port = process.env.PORT || 8080;

const jwtCheck = auth({
  audience: "https://www.koios-api.com",
  issuerBaseURL: "https://dev-6bft0fqbp6tzcha6.us.auth0.com/api/v2/",
  tokenSigningAlg: "RS256",
});

// enforce on all endpoints
app.use(jwtCheck);

// change to our api endpoint
app.get("/contents", guard.check(["read:contents"]), function (req, res) {
  //   res.send("Secured Resource");
  res.json({
    article1: "This is the first article",
    article2: "This is another article",
  });
});

app.listen(port);

console.log("Running on port ", port);
