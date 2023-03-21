const express = require("express");
const app = express();
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

const admin = require("firebase-admin");
const credential = require("./sandwich-app-808be-firebase-adminsdk-mare3-a701a20cbf.json");

admin.initializeApp({
  credential: admin.credential.cert(credential),
});

app.post("/signup", async (req, res) => {
  const user = {
    email: req.body.email,
    password: req.body.password,
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
