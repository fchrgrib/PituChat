import emptySlc from '../storage/img/pana.svg';
import ellipseBg from '../storage/img/ellipse_bg.svg';
import {useState} from "react";

export default function ChatDashboard() {
    const [selected, setSelected] = useState(false)
    return (
        <div className="w-full h-full flex">
            <div className="w-1/4 h-full border-r-2 border-gray-200">
            </div>
            {
                selected
                    ?null
                    :(
                        <div className="w-3/4 bg-gray-100 h-full flex flex-col justify-center items-center">
                            <div className="w-1/3 h-1/3 relative">
                                <img src={emptySlc} className="w-full h-full select-none absolute top-0 left-0 z-10" alt="empty"/>
                                <img src={ellipseBg} className="w-full h-full select-none" alt="bg"/>
                            </div>
                            <p className="font-normal mt-8">Tidak ada pesan terpilih</p>
                            <p className="font-semibold mt-1 text-lg">Pilih pesan untuk dibaca</p>
                        </div>
                    )
            }
        </div>
    )
}