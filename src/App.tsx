import React from 'react';
import icLogo from './storage/img/logo_pitu.svg';
import profilePhoto from './storage/img/profile.png';
import icChevronDown from './storage/img/ic/chevron-down.svg';

interface NavItem {
    name: string,
    selected: boolean,
}

function App() {
    const [items, setItems] = React.useState<NavItem[]>([
        {name: "chat", selected: true},
        {name: "toko", selected: false},
    ]);
    
  return (
    <div className="w-screen h-screen bg-white flex flex-col">
        <header className="w-full h-20 flex items-center justify-between border-b-2 border-gray-200">
            <div className="flex items-center ms-8">
                <img src={icLogo} alt="logo" className="w-15 h-15 select-none"/>
                <h1 className="text-2xl font-bold select-none">PituChat</h1>
            </div>
            <div className="flex items-center me-10">
                <img src={profilePhoto} className="w-12 h-12" alt="profile"/>
                <img src={icChevronDown} alt="dropdown"/>
            </div>
        </header>
        <div className="flex-1 flex">
            <div className="w-28 h-full border-r-2 border-gray-200">
            </div>
            <div className="flex-1">
            </div>
        </div>
    </div>
  );
}

export default App;
