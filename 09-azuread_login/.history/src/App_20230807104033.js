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
    console.log(e);
  }

  return <div className="App"></div>;
}

export default App;
