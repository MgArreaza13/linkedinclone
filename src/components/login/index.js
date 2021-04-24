import React, { useState } from "react";
import { LoginContainer, Register } from "./styles";
import { auth } from "../../firebase";
import { useDispatch } from "react-redux";
import { login } from "../../features/userSlice";
function Login() {
  const [name, setName] = useState("");
  const [photoUrl, setPhotoUrl] = useState("");
  const [email, setEmail] = useState("");
  const [passoword, setPassword] = useState("");

  const dispatch = useDispatch();

  const register = () => {
    if (!name) {
      return alert("Please enter a full name");
    }

    auth
      .createUserWithEmailAndPassword(email, passoword)
      .then((userAuth) => {
        userAuth.user
          .updateProfile({
            displayName: name,
            photoURL: photoUrl,
          })
          .then(() => {
            dispatch(
              login({
                email: userAuth.user.email,
                uid: userAuth.user.uid,
                displayName: name,
                photoUrl: photoUrl,
              })
            );
          });
      })
      .catch((error) => {
        console.log(error);
      });
  };

  const loginToApp = (e) => {
    e.preventDefault();

    auth.signInWithEmailAndPassword(email,passoword)
      .then(userAuth => {
        dispatch(
          login({
            email: userAuth.user.email,
            uid: userAuth.user.uid,
            displayName: userAuth.user.displayName,
            photoUrl: userAuth.user.photoURL,
          })
        );
      })
      .catch(error => console.log(error))

  };

  return (
    <LoginContainer>
      <img
        src="https://news.hitb.org/sites/default/files/styles/large/public/field/image/500px-LinkedIn_Logo.svg__1.png?itok=q_lR0Vks"
        alt=""
      />
      <form>
        <input
          type="text"
          value={name}
          onChange={(e) => setName(e.target.value)}
          placeholder="Full name (required if registering)"
        />
        <input
          type="text"
          value={photoUrl}
          onChange={(e) => setPhotoUrl(e.target.value)}
          placeholder="Profile pic Url (optional)"
        />
        <input
          type="mail"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          placeholder="email"
        />
        <input
          type="password"
          value={passoword}
          onChange={(e) => setPassword(e.target.value)}
          placeholder="password"
        />

        <button type="submit" onClick={loginToApp}>
          Sign In
        </button>
      </form>

      <p>
        Not a remember? <Register onClick={register}>Register Now</Register>
      </p>
    </LoginContainer>
  );
}

export default Login;
