import React, { useState, useEffect } from "react";
import { useAuth0 } from "@auth0/auth0-react";
import LoginButton from "./LoginButton";
import LogoutButton from "./LogoutButton";

function Contents() {
  const { user, isAuthenticated } = useAuth0();

  return (
    !isAuthenticated && (
      <div>
        {JSON.stringify(user)}
        <h2>{user?.name}</h2>
        <ul></ul>
        <LoginButton />
      </div>
    )
  );
}

export default Contents;