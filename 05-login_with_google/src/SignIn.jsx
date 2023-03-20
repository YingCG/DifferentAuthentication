import React from "react";
import {
  signInWithGooglePopup,
  createUserDocumentFromAuth,
} from "./utils/firebase/firebaseUtil";

function SignIn() {
  const logGoggleUser = async () => {
    const { user } = await signInWithGooglePopup();
    const userDocRef = await createUserDocumentFromAuth(user);
    console.log(userDocRef);
  };

  return (
    <div>
      <h1>Sign In As user</h1>
      <button onClick={logGoggleUser}>Sign In With Google Account</button>
    </div>
  );
}

export default SignIn;
