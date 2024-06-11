import { useState } from "react";
import AllProductMenu from "./AllProductMenu";
import NewsMenu from "./NewsMenu";
import { Link } from "react-router-dom";

function NavigeSelect() {

    const [hover1, setHover1] = useState(false)
    const [hover2, setHover2] = useState(false)
    const [hover3, setHover3] = useState(false)
    const [hover4, setHover4] = useState(false)
    const [hover5, setHover5] = useState(false)

    return (
        <div className="mt-10 flex flex-col gap-10">
            <div className="uppercase text-white text-[13px] font-semibold relative" onMouseEnter={() => setHover1(true)} onMouseLeave={() => setHover1(false)}>
                <Link to={'/'} className="absolute z-10">Trang chủ</Link>
                <div className={`absolute bg-main-brown-900 w-[300px] h-10 left-[-20px] top-[-10px] ${hover1 ? 'opacity-90': 'opacity-0'} transition-all duration-200`}></div>
            </div>
            <AllProductMenu />
            <NewsMenu />
            <div className="uppercase text-white text-[13px] font-semibold relative mt-2" onMouseEnter={() => setHover2(true)} onMouseLeave={() => setHover2(false)}>
                <Link to={'/gioi-thieu'} className="absolute z-10">Giới thiệu</Link>
                <div className={`absolute bg-main-brown-900 w-[300px] h-10 left-[-20px] top-[-10px] ${hover2 ? 'opacity-90': 'opacity-0'} transition-all duration-200`}></div>
            </div>
            <div className="uppercase text-white text-[13px] font-semibold relative" onMouseEnter={() => setHover3(true)} onMouseLeave={() => setHover3(false)}>
                <Link to={'/lien-he'} className="absolute z-10">Liên hệ</Link>
                <div className={`absolute bg-main-brown-900 w-[300px] h-10 left-[-20px] top-[-10px] ${hover3 ? 'opacity-90': 'opacity-0'} transition-all duration-200`}></div>
            </div>
            <div className="uppercase text-white text-[13px] font-semibold relative" onMouseEnter={() => setHover4(true)} onMouseLeave={() => setHover4(false)}>
                <Link to={'/auth/dang-nhap'} className="absolute z-10">Đăng nhập</Link>
                <div className={`absolute bg-main-brown-900 w-[300px] h-10 left-[-20px] top-[-10px] ${hover4 ? 'opacity-90': 'opacity-0'} transition-all duration-200`}></div>
            </div>
            <div className="uppercase text-white text-[13px] font-semibold relative" onMouseEnter={() => setHover5(true)} onMouseLeave={() => setHover5(false)}>
                <Link to={'/auth/dang-ky'} className="absolute z-10">Đăng ký</Link>
                <div className={`absolute bg-main-brown-900 w-[300px] h-10 left-[-20px] top-[-10px] ${hover5 ? 'opacity-90': 'opacity-0'} transition-all duration-200`}></div>
            </div>
        </div>
    );
}

export default NavigeSelect;