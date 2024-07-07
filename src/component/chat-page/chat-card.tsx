import icTokped from '../../storage/img/tokped.png'

export const ChatCard = (props: { name:string, message:string, time:string, unread:number, selected:boolean,path_photo: string, onClick:()=>void }) => {
    return(
        <div
            className={`w-full min-h-20 max-h-32 h-1/4 flex-col border-b-2 border-gray-200 ${props.selected?"bg-gray-100":null}`}
            onClick={props.onClick}>
            <div className="w-full h-full flex">
                <div className="w-16 h-14 flex-col ps-2 pt-6">
                    <img src={props.path_photo} className="rounded-full w-12 h-12" alt="profile"/>
                </div>
                <div className="w-full h-full flex-col">
                    <div className="w-full h-3/6 flex-col">
                        <div className="w-full h-auto flex justify-between items-center ps-3 pe-3 pt-5">
                            <p className="font-semibold text-lg">{props.name}</p>
                            <p className="text-gray-500 text-xs">{props.time}</p>
                        </div>
                        <div className="w-full h-auto flex justify-between items-center ps-3 pe-3">
                            <p className="text-gray-500 text-sm">{`${props.message.slice(0,34)}...`}</p>
                            {
                                props.unread>0
                                ?(
                                    <div className="w-6 h-6 flex items-center justify-center bg-blue-600 rounded-full text-white text-xs font-sans">{props.unread}</div>
                                )
                                :null
                            }
                        </div>
                    </div>
                    <div className="w-full h-3/6 flex items-center">
                        <div className="w-28 h-6 bg-green-200 ms-3 rounded-md flex justify-between items-center opacity-70 p-1">
                            <img src={icTokped} alt="tokped" className="w-3 h-3"/>
                            <p className="text-sm font-semibold">Beauty Lovers</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}