import React from 'react';
import icLogo from './storage/img/logo_pitu.svg';
import profilePhoto from './storage/img/profile.png';
import icChevronDown from './storage/img/ic/chevron-down.svg';

function App() {
  return (
    <div className="w-screen h-screen bg-white">
        <header className="w-full h-14 flex items-center justify-between pt-5">
            <div className="flex items-center ms-8">
                <img src={icLogo} alt="logo" className="w-15 h-15 select-none"/>
                <h1 className="text-2xl font-bold select-none">PituChat</h1>
            </div>
            <div className="flex items-center me-10">
                <img src={profilePhoto} className="w-12 h-12"/>
                <img src={icChevronDown}/>
            </div>
        </header>
    </div>
  );
}

export default App;
