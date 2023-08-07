const admin = require("firebase-admin");

const express = require("express");
const app = express();
const PORT = 8080;
const { db } = require("./firebase");

app.use(express.json());

app.use(async (req, res, next) => {
  // this shall come from front end
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

// const friends = {
//     'tomato': [{'enermy'},{}],
//     'feijoa': 'foodie gang',
//     'strawberry': 'gardening friend',
//     'jimmy': 'coding friend',
//     'banana': 'provide growth feedback',
// }

app.get("/friends", async (req, res) => {
  const peopleRef = db.collection("people").doc("associates");
  const doc = await peopleRef.get();
  if (!doc.exists) {
    res.sendStatus(400);
  }
  // res.status(200).send(friends)
  res.status(200).send(doc.data());
});

app.get("/friends/:name", (req, res) => {
  const { name } = req.params;
  if (!name || !(name in friends)) {
    return res.sendStatus(404);
  }
  res.status(200).send({ [name]: friends[name] }, { merge: true });
});

app.post("/addfriend", async (req, res) => {
  const { name, status } = req.body;
  const peopleRef = db.collection("people").doc("associates");

  const response = await peopleRef.set(
    {
      [name]: status,
    },
    { merge: true }
  );
  // friends[name] = status
  res.status(200).send(friends);
});

app.patch("/changestatus", async (req, res) => {
  const { name, newStatus } = req.body;
  const peopleRef = db.collection("people").doc("associates");
  const response = await peopleRef.set(
    {
      [name]: newStatus,
    },
    { merge: true }
  );
  // friends[name] = newStatus
  res.status(200).send(friends);
});

app.delete("/friends", async (req, res) => {
  const { name } = req.body;
  const peopleRef = db.collection("people").doc("associates");
  const response = await peopleRef.update({
    [name]: FieldValue.delete(),
  });
  // delete friends[name]
  res.status(200).send(friends);
});

app.listen(PORT, () => console.log(`Server has started on port: ${PORT}`));
