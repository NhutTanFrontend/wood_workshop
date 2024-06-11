import { Link } from "react-router-dom";
import imgs from "../../assets/imgs";
import { useState } from "react";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

function Footer() {

    const [emailValue, setEmailValue] = useState("")

    function notify() {
        if (emailValue.length > 0) {
            toast.success('Đã đăng ký thành công', {
                position: "top-right",
                autoClose: 3000,
                hideProgressBar: false,
                closeOnClick: true,
                pauseOnHover: true,
                draggable: true,
                progress: undefined,
                theme: "light",
            });
        } else {
            toast.error('Vui lòng nhập email của bạn', {
                position: "top-right",
                autoClose: 3000,
                hideProgressBar: false,
                closeOnClick: true,
                pauseOnHover: true,
                draggable: true,
                progress: undefined,
                theme: "light",
            });
        }
    }

    return (
        <div className="mt-20 w-screen xl:w-full bg-cover bg-center bg-no-repeat py-10 relative" style={{ backgroundImage: `url(${imgs.footerbg})` }}>
            <div className="container mx-auto relative z-10">
                <div className="row grid grid-cols-1 xS:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
                    <div className="mt-10 sm:mt-0 ml-10 sm:ml-0">
                        <img loading="lazy" src={imgs.hinhanh} alt="" className="w-[80%]" />
                        <div className="flex mt-6 gap-3 items-center text-white text-sm">
                            <svg xmlns="http://www.w3.org/2000/svg" className="w-5 h-5" viewBox="0 0 576 512"><path fill="#ffffff" d="M575.8 255.5c0 18-15 32.1-32 32.1h-32l.7 160.2c0 2.7-.2 5.4-.5 8.1V472c0 22.1-17.9 40-40 40H456c-1.1 0-2.2 0-3.3-.1c-1.4 .1-2.8 .1-4.2 .1H416 392c-22.1 0-40-17.9-40-40V448 384c0-17.7-14.3-32-32-32H256c-17.7 0-32 14.3-32 32v64 24c0 22.1-17.9 40-40 40H160 128.1c-1.5 0-3-.1-4.5-.2c-1.2 .1-2.4 .2-3.6 .2H104c-22.1 0-40-17.9-40-40V360c0-.9 0-1.9 .1-2.8V287.6H32c-18 0-32-14-32-32.1c0-9 3-17 10-24L266.4 8c7-7 15-8 22-8s15 2 21 7L564.8 231.5c8 7 12 15 11 24z" /></svg>
                            <p>Số 1 Lương Yên, Q.Hai Bà Trưng, Hà Nội</p>
                        </div>
                        <div className="flex mt-4 gap-3 items-center text-white text-sm">
                            <svg xmlns="http://www.w3.org/2000/svg" className="w-5 h-5" viewBox="0 0 512 512"><path fill="#ffffff" d="M164.9 24.6c-7.7-18.6-28-28.5-47.4-23.2l-88 24C12.1 30.2 0 46 0 64C0 311.4 200.6 512 448 512c18 0 33.8-12.1 38.6-29.5l24-88c5.3-19.4-4.6-39.7-23.2-47.4l-96-40c-16.3-6.8-35.2-2.1-46.3 11.6L304.7 368C234.3 334.7 177.3 277.7 144 207.3L193.3 167c13.7-11.2 18.4-30 11.6-46.3l-40-96z" /></svg>
                            <p>(+84)934 323 882</p>
                        </div>
                        <div className="flex mt-4 gap-3 items-center text-white text-sm">
                            <svg xmlns="http://www.w3.org/2000/svg" className="w-5 h-5" viewBox="0 0 512 512"><path fill="#ffffff" d="M48 64C21.5 64 0 85.5 0 112c0 15.1 7.1 29.3 19.2 38.4L236.8 313.6c11.4 8.5 27 8.5 38.4 0L492.8 150.4c12.1-9.1 19.2-23.3 19.2-38.4c0-26.5-21.5-48-48-48H48zM0 176V384c0 35.3 28.7 64 64 64H448c35.3 0 64-28.7 64-64V176L294.4 339.2c-22.8 17.1-54 17.1-76.8 0L0 176z" /></svg>
                            <p>support@suplo.vn</p>
                        </div>
                    </div>
                    <div className="mt-10 sm:mt-0 ml-10 sm:ml-0">
                        <p className="text-base text-white font-semibold">DỊCH VỤ KHÁCH HÀNG</p>
                        <ul className="mt-5">
                            <li className="mt-3 text-white text-sm"><Link className="hover:text-main-brown-700 transition-all duration-150" to={"/"}>Hướng dẫn đặt mua hàng</Link></li>
                            <li className="mt-3 text-white text-sm"><Link className="hover:text-main-brown-700 transition-all duration-150" to={"/"}>Kinh nghiệm mua hàng</Link></li>
                            <li className="mt-3 text-white text-sm"><Link className="hover:text-main-brown-700 transition-all duration-150" to={"/"}>Đối tác và đại lý</Link></li>
                            <li className="mt-3 text-white text-sm"><Link className="hover:text-main-brown-700 transition-all duration-150" to={"/"}>Hình thức thanh toán</Link></li>
                            <li className="mt-3 text-white text-sm"><Link className="hover:text-main-brown-700 transition-all duration-150" to={"/"}>Mua hàng và đổi trả</Link></li>
                        </ul>
                    </div>
                    <div className="mt-10 md:mt-0 ml-10 sm:ml-0">
                        <p className="text-base text-white font-semibold">CÁC BỘ SƯU TẬP</p>
                        <ul className="mt-5">
                            <li className="mt-3 text-white text-sm"><Link className="hover:text-main-brown-700 transition-all duration-150" to={"/"}>Trang chủ</Link></li>
                            <li className="mt-3 text-white text-sm"><Link className="hover:text-main-brown-700 transition-all duration-150" to={"/tat-ca-san-pham"}>Tất cả sản phẩm</Link></li>
                            <li className="mt-3 text-white text-sm"><Link className="hover:text-main-brown-700 transition-all duration-150" to={"/blogs"}>Tin tức</Link></li>
                            <li className="mt-3 text-white text-sm"><Link className="hover:text-main-brown-700 transition-all duration-150" to={"/gioi-thieu"}>Giới thiệu</Link></li>
                            <li className="mt-3 text-white text-sm"><Link className="hover:text-main-brown-700 transition-all duration-150" to={"/lien-he"}>Liên hệ</Link></li>
                        </ul>
                    </div>
                    <div className="mt-10 lg:mt-0 ml-10 sm:ml-0">
                        <p className="text-base text-white font-semibold">LIKE SUPLO TRÊN MẠNG XÃ HỘI</p>
                        <div className="flex items-center gap-6 mt-5">
                            <Link to={'https://www.facebook.com/'}>
                                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 320 512" className="w-5 h-5"><path fill="#ffffff" d="M80 299.3V512H196V299.3h86.5l18-97.8H196V166.9c0-51.7 20.3-71.5 72.7-71.5c16.3 0 29.4 .4 37 1.2V7.9C291.4 4 256.4 0 236.2 0C129.3 0 80 50.5 80 159.4v42.1H14v97.8H80z" /></svg>
                            </Link>
                            <Link to={'https://www.instagram.com/'}>
                                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512" className="w-5 h-5"><path fill="#ffffff" d="M224.1 141c-63.6 0-114.9 51.3-114.9 114.9s51.3 114.9 114.9 114.9S339 319.5 339 255.9 287.7 141 224.1 141zm0 189.6c-41.1 0-74.7-33.5-74.7-74.7s33.5-74.7 74.7-74.7 74.7 33.5 74.7 74.7-33.6 74.7-74.7 74.7zm146.4-194.3c0 14.9-12 26.8-26.8 26.8-14.9 0-26.8-12-26.8-26.8s12-26.8 26.8-26.8 26.8 12 26.8 26.8zm76.1 27.2c-1.7-35.9-9.9-67.7-36.2-93.9-26.2-26.2-58-34.4-93.9-36.2-37-2.1-147.9-2.1-184.9 0-35.8 1.7-67.6 9.9-93.9 36.1s-34.4 58-36.2 93.9c-2.1 37-2.1 147.9 0 184.9 1.7 35.9 9.9 67.7 36.2 93.9s58 34.4 93.9 36.2c37 2.1 147.9 2.1 184.9 0 35.9-1.7 67.7-9.9 93.9-36.2 26.2-26.2 34.4-58 36.2-93.9 2.1-37 2.1-147.8 0-184.8zM398.8 388c-7.8 19.6-22.9 34.7-42.6 42.6-29.5 11.7-99.5 9-132.1 9s-102.7 2.6-132.1-9c-19.6-7.8-34.7-22.9-42.6-42.6-11.7-29.5-9-99.5-9-132.1s-2.6-102.7 9-132.1c7.8-19.6 22.9-34.7 42.6-42.6 29.5-11.7 99.5-9 132.1-9s102.7-2.6 132.1 9c19.6 7.8 34.7 22.9 42.6 42.6 11.7 29.5 9 99.5 9 132.1s2.7 102.7-9 132.1z" /></svg>
                            </Link>
                            <Link to={'https://www.youtube.com/'}>
                                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 576 512" className="w-5 h-5"><path fill="#ffffff" d="M549.7 124.1c-6.3-23.7-24.8-42.3-48.3-48.6C458.8 64 288 64 288 64S117.2 64 74.6 75.5c-23.5 6.3-42 24.9-48.3 48.6-11.4 42.9-11.4 132.3-11.4 132.3s0 89.4 11.4 132.3c6.3 23.7 24.8 41.5 48.3 47.8C117.2 448 288 448 288 448s170.8 0 213.4-11.5c23.5-6.3 42-24.2 48.3-47.8 11.4-42.9 11.4-132.3 11.4-132.3s0-89.4-11.4-132.3zm-317.5 213.5V175.2l142.7 81.2-142.7 81.2z" /></svg>
                            </Link>
                            <Link to={'https://x.com/home'}>
                                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512" className="w-5 h-5"><path fill="#ffffff" d="M459.4 151.7c.3 4.5 .3 9.1 .3 13.6 0 138.7-105.6 298.6-298.6 298.6-59.5 0-114.7-17.2-161.1-47.1 8.4 1 16.6 1.3 25.3 1.3 49.1 0 94.2-16.6 130.3-44.8-46.1-1-84.8-31.2-98.1-72.8 6.5 1 13 1.6 19.8 1.6 9.4 0 18.8-1.3 27.6-3.6-48.1-9.7-84.1-52-84.1-103v-1.3c14 7.8 30.2 12.7 47.4 13.3-28.3-18.8-46.8-51-46.8-87.4 0-19.5 5.2-37.4 14.3-53 51.7 63.7 129.3 105.3 216.4 109.8-1.6-7.8-2.6-15.9-2.6-24 0-57.8 46.8-104.9 104.9-104.9 30.2 0 57.5 12.7 76.7 33.1 23.7-4.5 46.5-13.3 66.6-25.3-7.8 24.4-24.4 44.8-46.1 57.8 21.1-2.3 41.6-8.1 60.4-16.2-14.3 20.8-32.2 39.3-52.6 54.3z" /></svg>
                            </Link>
                            <Link to={'https://www.google.com'}>
                                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 640 512" className="w-5 h-5"><path fill="#ffffff" d="M386.1 228.5c1.8 9.7 3.1 19.4 3.1 32C389.2 370.2 315.6 448 204.8 448c-106.1 0-192-85.9-192-192s85.9-192 192-192c51.9 0 95.1 18.9 128.6 50.3l-52.1 50c-14.1-13.6-39-29.6-76.5-29.6-65.5 0-118.9 54.2-118.9 121.3 0 67.1 53.4 121.3 118.9 121.3 76 0 104.5-54.7 109-82.8H204.8v-66h181.3zm185.4 6.4V179.2h-56v55.7h-55.7v56h55.7v55.7h56v-55.7H627.2v-56h-55.7z" /></svg>
                            </Link>
                        </div>
                        <div className="font-semibold mt-7 text-white">ĐĂNG KÝ NHẬN TIN</div>
                        <div className="flex mt-3 rounded-lg">
                            <input type="email" placeholder="Nhập email của bạn" className=" placeholder:text-sm px-3 py-2 focus:outline-none placeholder:text-gray-600 rounded-s" onChange={(e) => setEmailValue(e.target.value)}/>
                            <div onClick={notify} className="flex items-center justify-center px-2 py-2 bg-main-brown-700 rounded-r cursor-pointer"><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512" className="w-6 h-4 block rounded-r"><path fill="#ffffff" d="M498.1 5.6c10.1 7 15.4 19.1 13.5 31.2l-64 416c-1.5 9.7-7.4 18.2-16 23s-18.9 5.4-28 1.6L284 427.7l-68.5 74.1c-8.9 9.7-22.9 12.9-35.2 8.1S160 493.2 160 480V396.4c0-4 1.5-7.8 4.2-10.7L331.8 202.8c5.8-6.3 5.6-16-.4-22s-15.7-6.4-22-.7L106 360.8 17.7 316.6C7.1 311.3 .3 300.7 0 288.9s5.9-22.8 16.1-28.7l448-256c10.7-6.1 23.9-5.5 34 1.4z"/></svg></div>
                        </div>
                    </div>
                </div>
            </div>
            <div className="bg-black absolute w-full h-full top-0 opacity-60"></div>
            <ToastContainer />
        </div>
    );
}

export default Footer;