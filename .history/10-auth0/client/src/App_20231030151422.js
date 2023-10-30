import { Route, Routes } from "react-router-dom";
import "./App.css";
import LoginButton from "./components/LoginButton";
import LogoutButton from "./components/LogoutButton";
import Contents from "./components/Contents";
import { useAuth0 } from "@auth0/auth0-react";

function App() {
  const { isLoading, error } = useAuth0();

  return (
    <div className="App">
      <p>Landing page to the courses</p>
      <>
        <LoginButton />
        <LogoutButton />
        <Routes>
          <Route exact path="/contents" element={<Contents />} />
        </Routes>
      </>
    </div>
  );
}

export default App;
