import {useState} from "react";
import icTokped from '../storage/img/tokped.png';
import icShopee from '../storage/img/shopee.png';
import logoTokped from '../storage/img/tokped_with_text.png';
import logoShopee from '../storage/img/shopee_with_text.png';
import icPlus from '../storage/img/ic/plus.svg';
import {TokoBox} from "../component/toko-page/toko-box";

interface TokoItem {
    nama_toko: string,
    ic_store: string,
    logo_store: string,
    bg_color?: string
}

export default function TokoDashboard() {
    const [toko, setToko] = useState<TokoItem[]>([
            {
                nama_toko: "Beauty Lovers",
                ic_store: icTokped,
                logo_store: logoTokped,
                bg_color: "bg-green-200"
            },
            {
                nama_toko: "Beauty Lovers",
                ic_store: icShopee,
                logo_store: logoShopee,
                bg_color: "bg-orange-200"
            }
        ]
    )


    return (
        <div className="flex-1 flex-col w-full h-full bg-gray-100 p-10">
            <h1 className="text-lg font-bold select-none">Shop</h1>
            <div className="w-full h-50 flex flex-wrap gap-7 mt-5 select-none">
                {toko.map((item, index) => (
                    <TokoBox
                        name={item.nama_toko}
                        ic_store={item.ic_store}
                        logo_store={item.logo_store}
                        bg_color={item.bg_color!!}/>
                ))}
                <div className="w-52 h-60 bg-white flex flex-col justify-center items-center p-5">
                    <button className="w-full h-12 bg-white border-2 border-blue-700 text-blue-700 rounded-md ps-5">Tambah toko</button>
                    <img src={icPlus} alt="plus" className="absolute me-28"/>
                </div>
            </div>
        </div>
    )
}