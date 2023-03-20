const express = require("express");
const jwt = require("jsonwebtoken");

const app = express();
app.get("/api", (req, res) => {
  res.json({
    message: "Welcome to the API",
  });
});

app.post("/api/posts", verifyToken, (req, res) => {
  jwt.verify(req.token, "secretkey", (err, authData) => {
    if (err) {
      res.sendStatus(403);
    } else {
      res.json({
        message: "Post created...",
        authData,
      });
    }
  });
});

app.post("/api/login", (req, res) => {
  const user = { id: 1, username: "jellybean", email: "jellybean@email.com" };
  jwt.sign(
    { user: user },
    "secretkey",
    { expiresIn: "30s" },
    (error, token) => {
      res.json({
        token: token,
      });
    }
  );
});

// Format of token
// Authorization: Bearer <access_token>

// Verify Token
function verifyToken(req, res, next) {
  // Get auth header value --> when we sent the token we want to sent to the header
  const bearerHeader = req.headers["authorization"];

  // Check if bearer is undefined
  if (typeof bearerHeader !== "undefined") {
    // Split at the space, and set second index which is the bearer token
    const bearer = bearerHeader.split(" ");
    const beaterToken = bearer[1];

    // Set the token
    req.token = beaterToken;

    // If token ok, move on to next
    next();
  } else {
    // Forbidden
    res.sendStatus(403);
  }
}

app.listen(5000, () => console.log(`Server started on port 5000`));
