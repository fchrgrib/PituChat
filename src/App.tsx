import React, {useCallback, useEffect, useState} from 'react';
import icLogo from './storage/img/logo_pitu.svg';
import profilePhoto from './storage/img/profile.png';
import icChevronDown from './storage/img/ic/chevron-down.svg';
import {NavBoxItem} from "./component/chat-page/nav-box-item";
import icToko from './storage/img/ic/store.svg';
import icTokoSelected from './storage/img/ic/store-clicked.svg';
import icChat from './storage/img/ic/message-square-dots.svg';
import icChatSelected from './storage/img/ic/message-square-dots-clicked.svg';
import icLogout from './storage/img/ic/logout.svg';
import ChatDashboard from "./home/chat";
import TokoDashboard from "./home/toko";
import {useNavigate} from "react-router-dom";
import Cookies from "js-cookie";

interface NavItem {
    name: string,
    selected: boolean,
    ic_selected: string,
    ic_unselected: string
}

function App() {
    const [items, setItems] = useState<NavItem[]>([
        {name: "Chat", selected: true, ic_selected: icChatSelected, ic_unselected: icChat},
        {name: "Toko", selected: false, ic_selected: icTokoSelected, ic_unselected: icToko},
    ]);
    const token = Cookies.get('token')
    const navigate = useNavigate()

    useEffect(()=>{
        if (!token){
            navigate('/login', {replace: true})
        }
    },[])

    const handleItem = useCallback((name:string) =>{
        setItems(items.map((item) => {
            if (item.name === name){
                return {...item, selected: true}
            }
            return {...item, selected: false}
        }))
    },[items])

  return (
    <div className="w-screen h-screen bg-white flex flex-col">
        <header className="w-full h-20 flex items-center justify-between border-b-2 border-gray-200">
            <div className="flex items-center ms-8">
                <img src={icLogo} alt="logo" className="w-15 h-15 select-none"/>
                <h1 className="text-2xl font-bold select-none">PituChat</h1>
            </div>
            <div className="flex items-center me-10 select-none">
                <img src={profilePhoto} className="w-12 h-12" alt="profile"/>
                <img src={icChevronDown} alt="dropdown"/>
            </div>
        </header>
        <div className="flex-1 flex">
            <div className="w-28 h-full border-r-2 border-gray-200 flex flex-col justify-between">
                <div className="w-full h-auto">
                    {items.map((item,index)=>(
                        <NavBoxItem
                            name={item.name}
                            selected={item.selected}
                            ic_selected={item.ic_selected}
                            ic_unselected={item.ic_unselected}
                            onClick={()=>{handleItem(item.name)}}
                            key={index}/>
                    ))}
                </div>
                <div className="w-full h-auto">
                    <NavBoxItem
                        name={"Keluar"}
                        selected={false}
                        ic_selected={icLogout}
                        ic_unselected={icLogout}
                        onClick={()=>{
                            navigate('/login', {replace: true})
                            Cookies.remove('token')
                        }}/>
                </div>
            </div>
            <div className="flex-1">
                {(items[0].selected)?<ChatDashboard/>:<TokoDashboard/>}
            </div>
        </div>
    </div>
  );
}

export default App;
