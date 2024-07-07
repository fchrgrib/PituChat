
export const ChatBox= (props: {name?:string, path_photo?:string, message:string, time:string, self:boolean}) => {
    return(
        <div className={`w-full h-auto flex flex-col ${props.self?"items-end":"items-start pt-2"}`}>
            {
                props.self
                ?(
                    <div className="min-w-0 max-w-[40rem] w-auto h-auto flex flex-col items-end">
                        <div className="w-auto h-auto bg-blue-700 rounded-l-2xl rounded-t-2xl p-3">
                            <p className="text-white">{props.message}</p>
                        </div>
                        <p className="text-xs text-gray-800">{`Sent . ${props.time}`}</p>
                    </div>
                ):
                (
                    <div className="min-w-0 max-w-[40rem] w-auto h-auto flex items-center pb-2">
                        <div className="w-10 h-10 flex-col ps-2 pt-2">
                            <img src={props.path_photo} className="rounded-full w-8 h-8" alt="profile"/>
                        </div>
                        <div className="w-auto h-auto flex-col ps-2">
                            <p className="font-semibold pb-1 ps-2">{props.name}</p>
                            <div className="w-auto h-auto bg-white rounded-r-2xl rounded-t-2xl p-2">
                                <p className="text-black">{props.message}</p>
                            </div>
                            <p className="text-xs text-gray-800 pt-1 ps-2">{`Received . ${props.time}`}</p>
                        </div>
                    </div>
                )
            }
        </div>
    )
}