import emptySlc from '../storage/img/pana.svg';
import ellipseBg from '../storage/img/ellipse_bg.svg';
import {useState} from "react";
import icSearch from '../storage/img/ic/search.svg';
import icSlider from '../storage/img/ic/slider.svg';

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

    const handleItem = (name:string) =>{
        setItems(items.map((item) => {
            if (item.name === name){
                return {...item, selected: true}
            }
            return {...item, selected: false}
        }))
    }


    return (
        <div className="w-full h-full flex">
            <div className="w-1/4 flex-col h-full border-r-2 border-gray-200 flex">
                <div className="w-full h-20 flex items-center justify-between font-semibold text-xl p-3">
                    <p>Chat</p>
                    <div className="w-20 h-full flex items-center justify-between cursor-pointer select-none">
                        <img
                            src={icSearch}
                            className="w-6 h-6"
                            alt="search"/>
                        <img
                            src={icSlider}
                            className="w-6 h-6"
                            alt="slider"/>
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
                                                className="bg-blue-600 rounded-xl ms-2 min-w-4 h-4 flex flex-col items-center justify-center
                                                 text-white text-sm font-sans">1</div>
                                    )
                                    :null
                                }
                            </div>
                            )
                        )
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