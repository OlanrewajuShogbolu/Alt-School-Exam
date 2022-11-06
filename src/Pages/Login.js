import React, { useEffect, useState } from "react";
import {
  signInWithRedirect,
  auth,
  provider,
  getRedirectResult,
  onAuthStateChanged,
} from "../config";

const Homes = () => {
  const [signedIn, setSignedIn] = useState(false);
  const [user, setUser] = useState(null);

  const signIn = (event) => {
    event.preventDefault();
    signInWithRedirect(auth, provider);
  };

  const logOut = (event) => {
event.preventDefault();
auth.signOut().then(( )=> {
alert("signed out")

}

);

  };

  useEffect(() => {
    getRedirectResult(auth)
      .then((result) => {
        if (result) {
          setSignedIn(true);
        } else {
        }
      })
      .catch((error) => {});
  }, []);

  useEffect(() => {
    onAuthStateChanged(auth, (user) => {
      if (user) {
        console.log(user);
        const { displayName, email, photoURL, vid } = user;
        setUser({ displayName, email, photoURL, vid });
      } else {
        setUser(null);
      }
    });
  }, []);

  return (
    <>
      <section>
        <h1>Homes</h1>

        {user ? (
          <>
          <h2>Welcome</h2>
          <div image = {user.photoURL}></div>
          <div>{user.displayName}</div>
          <div>{user.email}</div>
          <button onClick={logOut}>Log Out</button>
          </>
        ) : (
          <div>
            <h2> Sign in to access your account</h2>

            <button onClick={signIn}>Sign in</button>
            <div style={signedIn ? {} : { display: "none" }}>
             
            </div>
          </div>
        )}
      </section>
    </>
  );
};

export default Homes;
