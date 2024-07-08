import icCheck from '../../storage/img/ic/check-small.svg'

export const TokoBox = (props: {name:string, ic_store:string, logo_store:string, bg_color:string}) => {
    return(
        <div className="w-52 h-60 bg-white flex flex-col justify-center p-5">
            <img
                src={props.logo_store}
                alt="toko"/>
            <div className="w-full h-20 flex items-center justify-center">
                <div className={`w-28 h-6 ${props.bg_color} rounded-md flex items-center justify-center`}>
                    <img src={props.ic_store} alt="store" className="w-4 h-4 me-2"/>
                    <p className="font-semibold text-xs"> {props.name} </p>
                </div>
            </div>
            <div className="w-full h-10 flex items-center justify-center">
                <button className="w-full h-12 bg-blue-600 text-white rounded-md opacity-50 ps-3">Tersambung</button>
                <img src={icCheck} alt="check" className="w-7 h-7 absolute me-28"/>
            </div>
        </div>
    )
}