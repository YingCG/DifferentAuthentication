const express = require("express");
const app = express();
require("dotenv").config();
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// //Allow cross origin requests.
// let cors = require("cors");
// app.use(cors());

const admin = require("firebase-admin");
const userCredential = require("./sandwich-app-808be-firebase-adminsdk-mare3-a701a20cbf.json");

admin.initializeApp({
  credential: admin.credential.cert(userCredential),
});

app.use(async (req, res, next) => {
  const { authtoken } = req.headers;

  if (authtoken) {
    try {
      req.user = await admin.auth().verifyIdToken(authtoken);
    } catch (e) {
      res.sendStatus(400);
    }
  }
  next();
});

app.post("/signup", async (req, res) => {
  const user = {
    email: req.params.email,
    password: req.params.password,
  };
  const userResponse = await admin.auth().createUser({
    email: user.email,
    password: user.password,
    emailVerified: false,
    disable: false,
  });
  res.json(userResponse);
});

PORT = 4000;
app.listen(4000, () => console.log(`Server started at PORT ${PORT}`));
