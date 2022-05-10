import React from "react";

const Register = () => {
  return (
    <div>
      <h3>Please Register Here</h3>
      <form>
        <input type="text" placeholder="Your name" />
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

export default Register;
