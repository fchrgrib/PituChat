import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import LoginPage from "./login/page";
import {BrowserRouter, Route, Routes} from "react-router-dom";

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);
root.render(
    <BrowserRouter>
        <Routes>
            <Route path="/" element={<App />}/>
            <Route path="/login" element={<LoginPage />}/>
        </Routes>
    </BrowserRouter>
);

// export default function Root() {
//     return(
//         <BrowserRouter>
//             <Routes>
//                 <Route path="/" element={<App />}>
//                     <Route path="login" element={<LoginPage />} />
//                 </Route>
//             </Routes>
//         </BrowserRouter>
//     )
// }

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
