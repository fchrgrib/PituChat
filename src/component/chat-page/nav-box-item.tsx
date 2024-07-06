
export const NavBoxItem = (props: { name:string, selected:boolean, ic_selected:string, ic_unselected:string, onClick:()=>void }) => {
    return (
        <div onClick={props.onClick} className={`w-28 h-28 flex flex-col items-center justify-center cursor-pointer ${(props.selected)?"bg-blue-100 border-s-4 border-blue-600":null}`}>
            <img src={props.selected?props.ic_selected:props.ic_unselected} alt="icon" className="w-8 h-8"/>
            <p className="text-sm mt-1 font-semibold text-blue-700">{props.name}</p>
        </div>
    );
}