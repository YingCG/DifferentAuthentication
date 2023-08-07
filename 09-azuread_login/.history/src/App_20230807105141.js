import logo from "./logo.svg";
import "./App.css";
import { useMsal, useMsalAuthentication } from "@azure/msal-react";
import { InteractionType } from "@azure/msal-browser";
import { useState } from "react";

function App() {
  useMsalAuthentication(InteractionType.Redirect);
  const [user, setUser] = useState("");

  const { accounts } = useMsal();

  try {
    const username = accounts[0].username;
    setUser(username);
  } catch (e) {
    console.log("Please log in with your username or Sign up as user");
  }

  if (user !== "")
    return (
      <div className="App">
        <div> User: {user}</div>
      </div>
    );
  else
    return (
      <>
        <h1>Please login...</h1>
      </>
    );
}

export default App;
