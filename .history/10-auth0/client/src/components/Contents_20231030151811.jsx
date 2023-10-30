import React, { useState, useEffect } from "react";
import { useAuth0 } from "@auth0/auth0-react";
import LoginButton from "./LoginButton";
import LogoutButton from "./LogoutButton";
import Article from "./Article";

function Contents() {
  const { user, isAuthenticated } = useAuth0();

  return (
    !isAuthenticated && (
      <div>
        <Article />
      </div>
    )
  );
}

export default Contents;
