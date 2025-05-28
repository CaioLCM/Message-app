import { useEffect, useState } from "react";
import MessageList from "./MessageList";
import { useParams, useNavigate } from "react-router-dom";
import "./menuStyle.css";
import { auth } from "../../firebase.ts";
import { onAuthStateChanged } from "firebase/auth";

function Menu() {
  const [message, messageUpdate] = useState<string>("");
  const [messages, messageAdd] = useState<string[]>([]);
  const [isAuthVerified, setIsAuthVerified] = useState(false);

  let { name } = useParams();
  const navigate = useNavigate();

  useEffect(() => {
    onAuthStateChanged(auth, (user) => {
    if (!user){
      navigate("/login");
    }
    setIsAuthVerified(true);
  })

  }, [] 
  )
  const handleSignOut = async () => {
    await auth.signOut()
  }

  return (
    <div className="container menu-style">
      <div id="options">
        <h1>menu</h1>
      </div>
      <div className="chat-area menu-style">
        <div className="message-list menu-style">
          <MessageList
            items={messages}
            name={name ? name : "Undefined"}
          ></MessageList>
        </div>
        <div id="submit-message" className="menu-style">
          <input
            type="text"
            className="menu-style"
            value={message}
            onChange={(E) => {
              messageUpdate(E.target.value);
            }}
            placeholder="Insert a message"
          />
          <button
            className="btn btn-primary menu-style"
            onClick={() => {
              if (message != null && message != "") {
                const pre_messages: string[] = [];
                messages.forEach((msg) => {
                  pre_messages.push(msg);
                });
                pre_messages.push(message);
                messageAdd(pre_messages);
                messageUpdate("");
              }
            }}
          >
            Submit
          </button>
          <button className="btn btn-primary menu-style" onClick={handleSignOut}>
            Exit
          </button>
        </div>
      </div>
    </div>
  );
}

export default Menu;
