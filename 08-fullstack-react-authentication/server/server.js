const express = require("express");
const cors = require("cors");
const { initializeApp, cert } = require("firebase-admin/app");
const { getFirestore } = require("firebase-admin/firestore");

const serviceAccount = require("./sandwich-app-808be-firebase-adminsdk-mare3-65cfc1b6cb.json");
const app = express();
const port = 4000;
app.use(cors());

const sandwichApp = initializeApp({
  credential: cert(serviceAccount),
});
const db = getFirestore(sandwichApp);

app.get("/:name", async (req, res) => {
  // this we will get from front end
  const decodedToken = await getAuth().verifyIdToken(req.headers.token);
  console.log(decodedToken);

  const querySnapshot = await db.collection("people");
});

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});
