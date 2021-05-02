import { Avatar } from '@material-ui/core'
import React from 'react'
import "./SidebarChat.css"

function SidebarChat({addNewChat}) {
    const createChat=()=>{
            const roomName=prompt("please enter name for the chat");
            // console.log(roomName)
            if(roomName) {
                //do something in the data base
            }
    }
    return !addNewChat ? (
        <div className="sidebarChat">
            <Avatar src="ayoub2.svg" />
            <div className="sidebarChat__info">
                <h2>Room name </h2>
                <p>Last message ...</p>
            </div>
        </div>):(
            <div className="sidebarChat" onClick={createChat}>
                <h2>Add new Chat</h2>
            </div>
        )
    
}

export default SidebarChat
