import React from "react";

const Login = () => {
  return (
    <div>
      <h1>Login</h1>

      <form class="box" action="index.html" method="post">
        <input type="text" name="" placeholder="Username" />
        <input type="password" name="" placeholder="Password" />
        <input type="submit" name="" value="Login or Signup" />
      </form>
    </div>
  );
};

export default Login;