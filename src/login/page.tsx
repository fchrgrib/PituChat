import loginImg from "../storage/img/login_img.svg";
import logoPitu from "../storage/img/logo_pitu.svg";
import icMail from "../storage/img/ic/mail.svg";
import icLock from "../storage/img/ic/lock.svg";
import icEye from "../storage/img/ic/eye.svg";
import icEyeSlash from "../storage/img/ic/eye-slash.svg";
import {useState} from "react";

export function LoginPage() {
    const [showPassword, setShowPassword] = useState(false)
    const [email, setEmail] = useState("")
    const [password, setPassword] = useState("")
    const [error, setError] = useState({email: false, password: false})
    const handlePost = () =>{
        if (email === ""){
            setError({...error, email: true})
            return
        }
        if (password === ""){
            setError({...error, password: true})
            return
        }

        // compare here
    }
    return (
        <div className="min-w-screen h-screen flex bg-white">
            <div className="w-1/2 h-screen flex items-start justify-start">
                <img src={loginImg}  alt={""} className="w-auto h-full"/>
            </div>
            <div className="w-1/2 h-screen flex items-center justify-center">
                <div className="w-96 h-auto col justify-center items-center">
                    <img src={logoPitu} className="select-none"/>
                    <h1 className="text-3xl font-semibold mt-2 mb-1 select-none">Login ke akunmu</h1>
                    <p className="mb-10 select-none">Masuk akun utnuk menggunakan PituChat</p>
                    <label className="font-semibold mt-10 ms-2 select-none">Email</label>
                    <div className="w-full h-auto mb-3">
                        <img
                            src={icMail}
                            className="absolute mt-3.5 ms-3"/>
                        <input
                            value={email}
                            onChange={(e)=>{setError({...error, email: false});setEmail(e.target.value)}}
                            type="text"
                            name="password"
                            placeholder="Email akun PituChat"
                            className={`w-full h-10 mt-1 border-2 ${(error.email)?"border-red-600":"border-gray-400"} ps-10 pe-2 rounded-lg`}/>
                        {
                            (error.email)?
                                <p className="text-red-600 text-xs mt-1 ms-2">Email tidak boleh kosong</p>
                                :null
                        }
                    </div>
                    <label className="font-semibold ms-2 select-none">Password</label>
                    <div className="w-full h-auto">
                        <img
                            src={icLock}
                            className="absolute mt-3.5 ms-3"/>
                        <img
                            src={(showPassword) ?icEyeSlash:icEye}
                            className="mt-3  absolute ms-[21.5rem] "
                            onClick={()=>{setShowPassword(!showPassword)}}/>
                        <input
                            value={password}
                            onChange={(e)=>{setError({...error, password: false});setPassword(e.target.value)}}
                            type={(showPassword)?"text":"password"}
                            name="password"
                            placeholder="Password"
                            className={`w-full h-10 mt-1 border-2 ${(error.password)?"border-red-600":"border-gray-400"} ps-10 pe-12 rounded-lg`}/>
                        {
                            (error.password)?
                                <p className="text-red-600 text-xs mt-1 ms-2">Password tidak boleh kosong</p>
                                :null
                        }
                    </div>
                    <div className="w-full items-end justify-end flex mt-2">
                        <a href="#" className="text-blue-500 select-none">Lupa password?</a>
                    </div>
                    <button className="w-full h-10 bg-blue-500 text-white rounded-lg mt-5" onClick={handlePost}>Masuk</button>
                </div>
            </div>
        </div>
    )
}