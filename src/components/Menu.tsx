import { useState } from "react"

function Menu(){
    const [message, messageUpdate] = useState();
    const messages = []
    return (
        <>
        <input type="text" onChange={()=>messageUpdate}/>
        <button onClick={() => {
            messages.push(message);
        }}></button>
        </>
    )
}

export default Menu;