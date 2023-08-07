import logo from "./logo.svg";
import "./App.css";
import { useMsal, useMsalAuthentication } from "@azure/msal-react";
import { InteractionType } from "@azure/msal-browser";
import { useState } from "react";
import Hom from "./Hom";

function App() {
  console.log("id", process.env.REACT_APP_AZURE_AD_CLIENT_ID);
  console.log("tenant id", process.env.REACT_APP_AZURE_AD_AUTHORITY);

  useMsalAuthentication(InteractionType.Redirect);
  const [user, setUser] = useState("");

  function Userlogin() {
    const { accounts } = useMsal();

    try {
      const username = accounts[0].username;
      setUser(username);
    } catch (e) {
      console.log(e);
    }
  }

  // if (user !== "")
  return (
    <div className="App">
      <div> User: {user}</div>
      <Hom />
    </div>
  );
  // else
  //   return (
  //     <>
  //       <h1>{Userlogin()}</h1>
  //     </>
  //   );
}

export default App;
