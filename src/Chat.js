import { Avatar, IconButton } from '@material-ui/core'
import React, { useState } from 'react'
import SearchIcon from '@material-ui/icons/Search';
import AttachFileIcon from '@material-ui/icons/AttachFile';
import MoreVertIcon from '@material-ui/icons/MoreVert';
import InsertEmoticonIcon from '@material-ui/icons/InsertEmoticon';
import MicIcon from '@material-ui/icons/Mic';
import "./Chat.css"

function Chat() {
    const [input,setInput]=useState("");
    const sendMessage=(e)=>{
            e.preventDefault();
            setInput(e.target.value);
            console.log("you send the message");
            setInput("");
    }
    return (
        <div className="chat">
           <div className="chat__header">
                <Avatar/>
                <div className="chat__headerInfo">
                    <h3>Room Name</h3>
                    <p>Last scene at ... </p>
                </div>
                <div className="chat__headerRight">
                    <IconButton>
                        <SearchIcon/>
                    </IconButton>
                    <IconButton>
                        <AttachFileIcon/>
                    </IconButton>
                    <IconButton>
                        <MoreVertIcon/>
                    </IconButton>
                </div>
           </div>
           <div className="chat__body">
                <p className={`chat__message ${true &&  "chat__reciever"}`}>
                <span className="chat__name">ayoub hafidi-alaoui</span>
                    hello
                    {input}
                    <span className="chat__timestamp">3.52pm</span>
                    </p>
              
           </div>
           <div className="chat__footer">
                <InsertEmoticonIcon/>
                <form>
                    <input type="text" placeholder="type a message..." value={input} onChange={(e)=>setInput(e.target.value)} />
                    <button onClick={sendMessage} type="submit" >send the message</button>
                </form>

                <MicIcon/>
           </div>
        </div>
    )
}

export default Chat
