import emptySlc from '../storage/img/pana.svg';
import ellipseBg from '../storage/img/ellipse_bg.svg';
import {useCallback, useState} from "react";
import icSearch from '../storage/img/ic/search.svg';
import icSlider from '../storage/img/ic/slider.svg';
import {chatPreviewSeed} from "../storage/seed/chat";
import {ChatCard} from "../component/chat-page/chat-card";

interface NavItem {
    name: string,
    selected: boolean,
}

export default function ChatDashboard() {
    const [selected, setSelected] = useState(false)
    const [items, setItems] = useState<NavItem[]>([
        {name: "Perlu balas", selected: true},
        {name: "Terbalas", selected: false},
        {name: "Semua chat", selected: false},
    ]);
    const [multiSelected, setMultiSelected] = useState<NavItem[]>([
        {
            name: "Shopee - Beauty Lovers",
            selected: false
        },
        {
            name: "Tokopedia - Beauty Lovers",
            selected: false
        }
    ])
    const [chatPreview, setChatPreview] = useState(chatPreviewSeed)
    const [searchClicked, setSearchClicked] = useState(false)
    const [optionClicked, setOptionClicked] = useState(false)

    const handleItem = (name:string) =>{
        setItems(items.map((item) => {
            if (item.name === name){
                return {...item, selected: true}
            }
            return {...item, selected: false}
        }))
    }

    const handleChatPrev = useCallback((idx:number)=>{
        setChatPreview(chatPreview.map((chat,index)=>{
            if (index === idx){
                return {...chat, selected: true}
            }
            return {...chat, selected: false}
        }))
        // setSelected(true)
    },[chatPreview])


    return (
        <div className="w-full h-full flex">
            <div className="w-1/4 flex-col h-full border-r-2 border-gray-200 flex">
                <div className="w-full h-20 flex items-center justify-between p-3 select-none">
                    <p className="font-semibold text-xl">Chat</p>
                    <div className="min-w-20 h-full flex items-center justify-between select-none">
                        <div className="w-40 h-7 flex items-end justify-end">
                            {searchClicked
                            ?(
                                    <div className="w-full h-full pe-3 relative">
                                        <img
                                            src={icSearch}
                                            className="w-8 h-8 absolute ps-1 cursor-pointer"
                                            alt="search"
                                            onClick={()=>setSearchClicked(!searchClicked)}/>
                                        <input
                                            type="text"
                                            className=" w-full h-full bg-gray-100 p-2 ps-8 rounded-md focus:border-red-500 focus:border-2"/>
                                    </div>
                                )
                            :(
                                <img
                                    src={icSearch}
                                    className="w-10 h-6 pe-4 cursor-pointer"
                                    alt="search"
                                    onClick={()=>setSearchClicked(!searchClicked)}/>
                                )
                            }
                        </div>
                        <div className="relative inline-block text-left">
                            <img
                                src={icSlider}
                                className="w-6 h-6 cursor-pointer"
                                alt="slider"
                                onClick={()=>setOptionClicked(!optionClicked)}/>
                            {
                                optionClicked
                                ?(
                                        <div className="absolute right-0 mt-2 w-60 bg-white col border-2 border-gray-200  rounded-md">
                                            {multiSelected.map((item,index)=>(
                                                    <div className="w-full h-10 flex items-center border-b-2 border-gray-200 p-2" key={index}>
                                                        <input type="checkbox" className="w-4 h-4"/>
                                                        <p className="ms-3 text-sm">{item.name}</p>
                                                    </div>
                                                )
                                            )}
                                            <div className="w-full h-7 flex items-start justify-start ps-3">
                                                <p className="font-semibold text-blue-700">Pilih Semua</p>
                                            </div>
                                        </div>
                                    )
                                :null
                            }
                        </div>
                    </div>
                </div>
                <div className="w-full h-12 flex items-center justify-center">
                    {
                        items.map((item,index)=>(
                            <div
                                onClick={()=>{handleItem(item.name)}}
                                className={`w-2/3 h-full flex items-center justify-center cursor-pointer
                                ${(item.selected)
                                    ?"border-b-4 border-blue-600 font-semibold"
                                    :"border-b-4 border-gray-100 font-semibold text-gray-500 select-none"}`}
                                key={index}>
                                <p>{item.name}</p>
                                {
                                    item.name === "Perlu balas"
                                    ?(
                                            <div
                                                className="bg-blue-600 rounded-full ms-2 min-w-4 h-4 flex flex-col items-center justify-center
                                                 text-white text-sm font-sans p-1">2</div>
                                    )
                                    :null
                                }
                            </div>
                            )
                        )
                    }
                </div>
                <div className="w-full flex-grow select-none overflow-y-scroll scroll-smooth">
                    {
                        chatPreview.map((chat,index)=>(
                            <ChatCard
                                name={chat.name}
                                path_photo={chat.path}
                                message={chat.lastMessage}
                                time={chat.time}
                                unread={chat.unread}
                                selected={chat.selected}
                                onClick={()=>{handleChatPrev(index)}}
                                key={index}/>
                        ))
                    }
                </div>
            </div>
            {
                selected
                    ?null
                    :(
                        <div className="w-3/4 bg-gray-100 h-full flex flex-col justify-center items-center select-none">
                            <div className="w-1/3 h-1/3 relative">
                                <img
                                    src={emptySlc}
                                    className="w-full h-full absolute top-0 left-0 z-10"
                                    alt="empty"/>
                                <img
                                    src={ellipseBg}
                                    className="w-full h-full"
                                    alt="bg"/>

                            </div>
                            <p className="font-normal mt-8">Tidak ada pesan terpilih</p>
                            <p className="font-semibold mt-1 text-lg">Pilih pesan untuk dibaca</p>
                        </div>
                    )
            }
        </div>
    )
}