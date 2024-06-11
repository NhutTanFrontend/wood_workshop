import { useState } from "react";
import { Link } from "react-router-dom";

function NewsMenu() {

    const [open1, setOpen1] = useState(false)
    const [open2, setOpen2] = useState(false)
    const [hover1, setHover1] = useState(false)

    return (
        <div className="uppercase text-white text-[13px] font-semibold relative" onMouseEnter={() => setHover1(true)} onMouseLeave={() => setHover1(false)}>
            <div className="absolute z-10 flex justify-between items-center w-full">
                <Link to={'/blogs'} className="">Tin tức</Link>
                <div className={`text-2xl cursor-pointer`} onClick={() => setOpen1(!open1)}>{open1 ? "-" : "+"}</div>
            </div>
            <div className={`absolute inset-0 bg-main-brown-900 transition-all duration-200 ${open1 ? 'inset-0' : 'h-11'} ${hover1 ? 'opacity-90 inset-0' : 'opacity-0'} w-[300px] top-[-10px] bottom-[-10px] left-[-20px]`}></div>
            <ul className={`mt-11 ml-4 relative ${open1 ? 'block' : 'hidden'}`}>
                <li className="flex justify-between items-start w-full">
                    <div className="flex flex-col">
                        Tin tức
                        <ul className={`ml-4 ${open2 ? 'block' : 'hidden'}`}>
                            <li className="mt-5"><Link to={'/blogs/news'}>Tin tức</Link></li>
                            <li className="mt-6"><Link to={'/blogs/trick'}>Mẹo</Link></li>
                            <li className="mt-6"><Link to={'/blogs/popular'}>Tin nổi bật</Link></li>
                        </ul>
                    </div>
                    <div className=" text-2xl cursor-pointer" onClick={() => setOpen2(!open2)}>{open2 ? "-" : "+"}</div>
                </li>
                <li className="mt-2">
                    <Link to={'/blogs/trick'}>Mẹo</Link>
                </li>
                <li className="mt-4">
                    <Link to={'/blogs/popular'}>Tin nổi bật</Link>
                </li>
            </ul>
        </div>
    );
}

export default NewsMenu;