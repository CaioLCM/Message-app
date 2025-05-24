import { useState } from "react";
import { BrowserRouter as Router, Route, Link } from "react-router-dom";

function LogIn() {
  const [email, emailUpdate] = useState("");
  const [password, passwordUpdate] = useState("");
  const [text, textUpdate] = useState("");
  return (
    <>
      <input
        type="email"
        onChange={(E) => {
          emailUpdate(E.target.value);
        }}
      ></input>
      <br></br>
      <input type="password" className="password-input" onChange={(E) => passwordUpdate(E.target.value)}></input>
      <br></br>
      <button
        type="button"
        onClick={() => {
          if(email == "caio" && password == "123"){
            window.open("/Menu", "_self")}
          else {
            textUpdate("Invalid account!");
          }
        } 
      }
        className="btn btn-primary"
      >
        Log in
      </button>
      <p>{text}</p>
    </>
  );
}

export default LogIn;
