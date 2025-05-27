import { useState } from "react";
import "./LogInStyle.css"

function LogIn() {
  const [email, emailUpdate] = useState("");
  const [password, passwordUpdate] = useState("");
  const [text, textUpdate] = useState("");
  return (
    <>
    <h1 className="LogInMenu">Log in</h1>
    <div className="LogInMenu" id="items-login">
      <input className="LogInMenu"
        type="email"
        onChange={(E) => {
          emailUpdate(E.target.value);
        }}
        ></input>
      <br></br>
      <input type="password" className="password-input LogInMenu" onChange={(E) => passwordUpdate(E.target.value)}></input>
      <br></br>
      <button 
        type="button"
        onClick={() => {
          if(email != "" && email != null){
          window.open(`/menu/${email}`, "_self")
          }
            else {
              textUpdate("Invalid account!");
            }
          } 
        }
        className="btn btn-primary LogInMenu"
        >
        Log in
      </button>
      <p className="LogInMenu">{text}</p>
        </div>
          </>

  );
}

export default LogIn;
