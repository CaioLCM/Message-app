import { useState, useRef } from "react";
import MessageList from "./MessageList";
import { useParams } from "react-router-dom";
import "./menuStyle.css"

function Menu() {
  const [message, messageUpdate] = useState<string>("");
  const [messages, messageAdd] = useState<string[]>([]);

  let { name } = useParams();

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
          <input type="text" className="menu-style" value={message} onChange={(E) => {messageUpdate(E.target.value)}} placeholder="Insert a message" />
          <button
            className="btn btn-primary menu-style"
            onClick={() => {
              if (message != null && message != "") {
                const pre_messages: string[] = []
                messages.forEach((msg) => {
                  pre_messages.push(msg)
                })
                pre_messages.push(message)
                messageAdd(pre_messages)
                messageUpdate("")
              }
            }}
            
            >Submit</button>
        </div>
      </div>
    </div>
  );
}

export default Menu;
