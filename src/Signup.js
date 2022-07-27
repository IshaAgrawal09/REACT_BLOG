import React, { useState } from "react";
import { Link } from "react-router-dom";
import CartContext from "./Context";
import { useContext } from "react";
const Signup = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmpassword, setConfirmpassword] = useState("");
  const [error, setError] = useState("");
  const [success, setSuccess] = useState("");

  const { userArr, setUserArr, count, setCount } = useContext(CartContext);

  const signup = () => {
    if (email == "" || password == "" || confirmpassword == "") {
      setError("Fields can't be Empty!");
      setSuccess("");
    } else if (password != confirmpassword) {
      setError("Password didn't match!");
      setPassword("");
      setConfirmpassword("");
      setSuccess("");
    } else {
      setUserArr(...userArr, [
        {
          id: count,
          email: email,
          password: password,
        },
      ]);
      setCount(count + 1);
      setError("");
      setEmail("")
      setPassword("")
      setConfirmpassword("")
      setSuccess("Account created Successfully!");
    }
  };
  console.log(userArr);

  return (
    <div className="signInCenter">
      <div className="signin">
        <p id="success">{success}</p>
        <h1>Sign Up</h1>
        <p id="error">{error}</p>
        <div className="entry">
          <p>Enter Email: </p>
          <input
            type="email"
            id="email"
            value={email}
            onChange={(event) => setEmail(event.target.value)}
          />
        </div>
        <div className="entry">
          <p>Enter Password:</p>
          <input
            type="password"
            id="password"
            value={password}
            onChange={(event) => setPassword(event.target.value)}
          />
        </div>
        <div className="entry">
          <p>Enter Confirm Password:</p>
          <input
            type="password"
            id="repassword"
            value={confirmpassword}
            onChange={(event) => setConfirmpassword(event.target.value)}
          />
        </div>
        <p className="newUser">
          Already have an Account? <Link to="/signin">Sign In</Link>
        </p>

        <button onClick={signup}>Sign Up</button>
      </div>
    </div>
  );
};

export default Signup;
