import { useState } from "react";
import { Link } from "react-router-dom";

function AllProductMenu() {

    const [open1, setOpen1] = useState(false)
    const [open2, setOpen2] = useState(false)
    const [open3, setOpen3] = useState(false)
    const [open4, setOpen4] = useState(false)
    const [open5, setOpen5] = useState(false)
    const [hover1, setHover1] = useState(false)

    return (
        <div className="uppercase text-white text-[13px] font-semibold relative" onMouseEnter={() => setHover1(true)} onMouseLeave={() => setHover1(false)}>
            <div className="absolute z-10 flex justify-between items-center w-full">
                <Link to={'/tat-ca-san-pham'} className="">Tất cả sản phẩm</Link>
                <div className=" text-2xl cursor-pointer" onClick={() => setOpen1(!open1)}>{open1 ? "-" : "+"}</div>
            </div>
            <div className={`absolute inset-0 bg-main-brown-900 transition-all duration-200 ${open1 ? 'inset-0' : 'h-11'} ${hover1 ? 'opacity-90 inset-0' : 'opacity-0'} w-[300px] top-[-10px] bottom-[-10px] left-[-20px]`}></div>
            <ul className={`mt-11 ml-4 relative ${open1 ? 'block' : 'hidden'}`}>
                <li className="flex justify-between items-start w-full">
                    <div className="flex flex-col">
                        Nội thất gỗ
                        <ul className={`ml-4 ${open2 ? 'block' : 'hidden'}`}>
                            <li className="mt-5"><Link to={'/tat-ca-san-pham'}>Nội thất phòng khách</Link></li>
                            <li className="mt-6"><Link to={'/tat-ca-san-pham'}>Nội thất phòng ngủ</Link></li>
                            <li className="mt-6"><Link to={'/tat-ca-san-pham'}>Nội thất văn phòng</Link></li>
                        </ul>
                    </div>
                    <div className=" text-2xl cursor-pointer" onClick={() => setOpen2(!open2)}>{open2 ? "-" : "+"}</div>
                </li>
                <li className="mt-4 flex justify-between items-start w-full">
                    <div className="flex flex-col">
                        Quà lưu niệm
                        <ul className={`ml-4 ${open3 ? 'block' : 'hidden'}`}>
                            <li className="mt-5"><Link to={'/tat-ca-san-pham'}>Đồ handmade</Link></li>
                            <li className="mt-6"><Link to={'/tat-ca-san-pham'}>Đồ kỹ nghệ tinh xảo</Link></li>
                            <li className="mt-6"><Link to={'/tat-ca-san-pham'}>Đồ thiết kế theo mẫu</Link></li>
                        </ul>
                    </div>
                    <div className=" text-2xl cursor-pointer" onClick={() => setOpen3(!open3)}>{open3 ? "-" : "+"}</div>
                </li>
                <li className="mt-4 flex justify-between items-start w-full">
                    <div className="flex flex-col">
                        Đồ dùng bằng gỗ
                        <ul className={`ml-4 ${open4 ? 'block' : 'hidden'}`}>
                            <li className="mt-5"><Link to={'/tat-ca-san-pham'}>Đồ dùng sinh hoạt</Link></li>
                            <li className="mt-6"><Link to={'/tat-ca-san-pham'}>Đồ dùng học tập</Link></li>
                            <li className="mt-6"><Link to={'/tat-ca-san-pham'}>Đồ chơi trẻ em</Link></li>
                        </ul>
                    </div>
                    <div className=" text-2xl cursor-pointer" onClick={() => setOpen4(!open4)}>{open4 ? "-" : "+"}</div>
                </li>
                <li className="mt-4 flex justify-between items-start w-full">
                    <div className="flex flex-col">
                    Đồ trang trí bằng gỗ
                    <ul className={`ml-4 ${open5 ? 'block' : 'hidden'}`}>
                        <li className="mt-5"><Link to={'/tat-ca-san-pham'}>Đồ trang trí tường</Link></li>
                        <li className="mt-6"><Link to={'/tat-ca-san-pham'}>Đồ dùng học tập</Link></li>
                        <li className="mt-6"><Link to={'/tat-ca-san-pham'}>Đồ chơi trẻ em</Link></li>
                    </ul>
                    </div>
                    <div className=" text-2xl cursor-pointer" onClick={() => setOpen5(!open5)}>{open5 ? "-" : "+"}</div>
                </li>
            </ul>
        </div>
    );
}

export default AllProductMenu;