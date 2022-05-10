import React from "react";
import useFirebase from "../../hooks/useFirebase";

const Login = () => {
  const handleFormSubmit = (event) => {
    event.preventDefault();
  };
  const { signInWithGoogle } = useFirebase();
  return (
    <div>
      <h1>Please Login Here</h1>
      <form onSubmit={handleFormSubmit}>
        <div style={{ margin: "20px" }}>
          <button onClick={signInWithGoogle}>Sign In with Google</button>
        </div>
        <br />
        <input type="email" placeholder="Your Email" />
        <br />
        <input type="password" placeholder="Your Password" />
        <br />
        <input type="submit" value="Register" />
      </form>
    </div>
  );
};

export default Login;
