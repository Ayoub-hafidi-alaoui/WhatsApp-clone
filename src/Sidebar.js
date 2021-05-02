import { Avatar, IconButton } from '@material-ui/core'
import DonutLargeIcon from '@material-ui/icons/DonutLarge';
import ChatIcon from '@material-ui/icons/Chat';
import MoreVertIcon from '@material-ui/icons/MoreVert';
import SearchIcon from '@material-ui/icons/Search';
import React, { useEffect, useState } from 'react'
import './Sidebar.css'
import SidebarChat from './SidebarChat';
// import db from './firebase';

function Sidebar() {
    const [rooms,setRooms]=useState([]);
    // useEffect(()=>{
    //     db.collection('Rooms').onSnapshot(snapshot=>{
    //         setRooms(snapshot.docs.map(
    //             doc=>({
    //                 id:doc.id,
    //                 data:doc.data()
    //             })
    //         ))
    //     })
    // },[])
    return (
        <div className="sidebar">
            <div className="sidebar__header">
                <IconButton>
                    <Avatar/>
                </IconButton>
                
                <div className="sidebar__headerRight">
                    <IconButton>
                        <DonutLargeIcon/>
                    </IconButton>
                    <IconButton>
                        <ChatIcon/>
                    </IconButton>
                    <IconButton>
                            <MoreVertIcon/>
                    </IconButton>
                </div>
            </div>
            <div className="sidebar__search">
                <div className="sidebar__searchContainer">
                    <SearchIcon/>
                    <input placeholder="Search or start new chat "/>
                </div>
            </div>
            <div className="sidebar__chats">
                    <SidebarChat addNewChat />
                    <SidebarChat/>
                    <SidebarChat/>
                    <SidebarChat/>
                   
            </div>
        </div>
    )
}

export default Sidebar
