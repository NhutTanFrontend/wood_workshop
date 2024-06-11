import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import PropTypes from 'prop-types'

function DropdownMenu(props) {

    const [isHover, setIsHover] = useState(false)
    const [hoverBlog, setHoverBlog] = useState(false)
    const {pageSelected} = props
    const selectPage = (x) => {
        sessionStorage.setItem("pageSelected", x)
    }

    return (
        <div className="lg:flex gap-8 hidden text-white">
            <Link to={'//'} className={`${pageSelected === 0 ? "text-main-brown-700" : "text-main-brown-300"} text-sm font-bold block uppercase cursor-pointer hover:text-main-brown-700`} onClick={() => selectPage(0)}>Trang chủ</Link>
            <div className={`relative inline-block`}>
                <div className="flex items-center gap-1" onClick={() => selectPage(1)}>
                    <Link to={'/tat-ca-san-pham'} onClick={() => selectPage(1)} className={`${pageSelected === 1 ? "text-main-brown-700" : "text-main-brown-300"} cursor-pointer text-sm font-bold uppercase hover:text-main-brown-700`}>Tất cả sản phẩm</Link>
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-4 h-4">
                        <path strokeLinecap="round" strokeLinejoin="round" d="m19.5 8.25-7.5 7.5-7.5-7.5" />
                    </svg>
                </div>
                <div className="absolute w-full h-5" onMouseEnter={() => setIsHover(true)} onMouseLeave={() => setIsHover(false)}></div>
                <div className={`${isHover ? "flex" : "hidden"} rounded left-[-150%] bg-white absolute w-max gap-5 shadow-xl z-50 py-5 px-8 mt-5`} onMouseEnter={() => setIsHover(true)} onMouseLeave={() => setIsHover(false)}>
                    <div className="flex flex-col gap-2 text-black">
                        <Link onClick={() => selectPage(1)} to={'/tat-ca-san-pham'} className=" font-semibold text-base hover:text-main-brown-700 transition-all duration-200">Nội Thất Gỗ</Link>
                        <Link onClick={() => selectPage(1)} to={'/tat-ca-san-pham'} className="text-sm hover:text-main-brown-700 transition-all duration-200 ml-2 leading-7">- Nội thất phòng khách</Link>
                        <Link onClick={() => selectPage(1)} to={'/tat-ca-san-pham'} className="text-sm hover:text-main-brown-700 transition-all duration-200 ml-2 leading-7">- Nội thất phòng ngủ</Link>
                        <Link onClick={() => selectPage(1)} to={'/tat-ca-san-pham'} className="text-sm hover:text-main-brown-700 transition-all duration-200 ml-2 leading-7">- Nội thất văn phòng</Link>
                    </div>
                    <div className="flex flex-col gap-2 text-black">
                        <Link onClick={() => selectPage(1)} to={'/tat-ca-san-pham'} className=" font-semibold text-base hover:text-main-brown-700 transition-all duration-200">Quà Lưu Niệm</Link>
                        <Link onClick={() => selectPage(1)} to={'/tat-ca-san-pham'} className="text-sm hover:text-main-brown-700 transition-all duration-200 ml-2 leading-7">- Đồ handmade</Link>
                        <Link onClick={() => selectPage(1)} to={'/tat-ca-san-pham'} className="text-sm hover:text-main-brown-700 transition-all duration-200 ml-2 leading-7">- Đồ kỹ nghệ tinh xảo</Link>
                        <Link onClick={() => selectPage(1)} to={'/tat-ca-san-pham'} className="text-sm hover:text-main-brown-700 transition-all duration-200 ml-2 leading-7">- Đồ thiết kế theo mẫu</Link>
                    </div>
                    <div className="flex flex-col gap-2 text-black">
                        <Link onClick={() => selectPage(1)} to={'/tat-ca-san-pham'} className=" font-semibold text-base hover:text-main-brown-700 transition-all duration-200">Đồ Dùng Bằng Gỗ</Link>
                        <Link onClick={() => selectPage(1)} to={'/tat-ca-san-pham'} className="text-sm hover:text-main-brown-700 transition-all duration-200 ml-2 leading-7">- Đồ dùng sinh hoạt</Link>
                        <Link onClick={() => selectPage(1)} to={'/tat-ca-san-pham'} className="text-sm hover:text-main-brown-700 transition-all duration-200 ml-2 leading-7">- Đồ dùng học tập</Link>
                        <Link onClick={() => selectPage(1)} to={'/tat-ca-san-pham'} className="text-sm hover:text-main-brown-700 transition-all duration-200 ml-2 leading-7">- Đồ chơi trẻ em</Link>
                    </div>
                    <div className="flex flex-col gap-2 text-black">
                        <Link onClick={() => selectPage(1)} to={'/tat-ca-san-pham'} className=" font-semibold text-base hover:text-main-brown-700 transition-all duration-200">Đồ Trang Trí Bằng Gỗ</Link>
                        <Link onClick={() => selectPage(1)} to={'/tat-ca-san-pham'} className="text-sm hover:text-main-brown-700 transition-all duration-200 ml-2 leading-7">- Đồ trang trí tường</Link>
                        <Link onClick={() => selectPage(1)} to={'/tat-ca-san-pham'} className="text-sm hover:text-main-brown-700 transition-all duration-200 ml-2 leading-7">- Đồ trang trí phòng ngủ</Link>
                        <Link onClick={() => selectPage(1)} to={'/tat-ca-san-pham'} className="text-sm hover:text-main-brown-700 transition-all duration-200 ml-2 leading-7">- Đồ trang trí phòng khách</Link>
                    </div>
                </div>
            </div>
            <div className={`relative inline-block hover:text-main-brown-700`}>
                <div className="flex items-center gap-1" onClick={() => selectPage(2)}>
                    <Link to={'/blogs'} className={`${pageSelected === 2 ? "text-main-brown-700" : "text-main-brown-300"} cursor-pointer text-sm font-bold uppercase hover:text-main-brown-700`}>Tin tức</Link>
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-4 h-4">
                        <path strokeLinecap="round" strokeLinejoin="round" d="m19.5 8.25-7.5 7.5-7.5-7.5" />
                    </svg>
                </div>
                <div className="absolute w-full h-5" onMouseEnter={() => setHoverBlog(true)} onMouseLeave={() => setHoverBlog(false)}></div>
                <div className={`${hoverBlog ? "flex" : "hidden"} absolute flex-col gap-4 min-w-[160px] shadow-lg py-5 mt-5 rounded text-black px-4 z-10 bg-white`} onMouseEnter={() => setHoverBlog(true)} onMouseLeave={() => setHoverBlog(false)}>
                    <Link to={'/blogs/news'} className="">Tin tức</Link>
                    <Link to={'/blogs/trick'} className="">Mẹo</Link>
                    <Link to={'/blogs/popular'} className="">Bài viết nổi bật</Link>
                </div>
            </div>
            <Link to={'/gioi-thieu'} className={`${pageSelected === 3 ? "text-main-brown-700" : "text-main-brown-300"} cursor-pointer text-sm font-bold uppercase hover:text-main-brown-700`} onClick={() => selectPage(3)}>Giới thiệu</Link>
            <Link to={'/lien-he'} className={`${pageSelected === 4 ? "text-main-brown-700" : "text-main-brown-300"} cursor-pointer text-sm font-bold uppercase hover:text-main-brown-700`} onClick={() => selectPage(4)}>Liên hệ</Link>
        </div>
    );
}

DropdownMenu.propTypes = {
    pageSelected: PropTypes.any,
};

export default DropdownMenu;