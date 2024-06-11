import { Link, useNavigate } from "react-router-dom";
import BannerAllProducts from "../../component/AllProducts/BannerAllProducts";
import Footer from "../../component/Footer";
import Header from "../../component/Header";
import AboveHeader from "../../component/homepage/AboveHeader";
import HeaderRes from "../../component/homepage/HeaderRes";
import { useState } from "react";

function Login() {

    const [getEmail, setGetEmail] = useState("")
    const [noticeEmail, setNoticeEmail] = useState("")
    const [getPassword, setGetPassword] = useState("")
    const [noticePassword, setNoticePassword] = useState("")
    const navigate = useNavigate()

    const handleSubmit = () => {
        if (getEmail.length === 0) {
            setNoticeEmail("Vui lòng điền email")
        }
        if (getPassword.length === 0) {
            setNoticePassword("Vui lòng điền mật khẩu")
        }
        if (getEmail.length !== 0 && getPassword.length !== 0){
            navigate("/")
        }
    }

    return (
        <>
            <div className=" bg-black pb-4">
                <AboveHeader />
                <Header />
            </div>
            <HeaderRes />
            <BannerAllProducts title="Đăng nhập" />
            <div className="container mx-auto mt-10 flex flex-col items-center gap-4">
                <h2 className="text-xl font-semibold">ĐĂNG NHẬP</h2>
                {noticeEmail && <p className="text-sm text-red-500">{noticeEmail}</p>}
                <input className="focus:outline-none border py-2 px-4 sm:w-96 w-80 placeholder:text-sm placeholder:text-gray-600 border-gray-400" type="email" placeholder="Email" onChange={(e) => setGetEmail(e.target.value)} onClick={() => setNoticeEmail("")}/>
                {noticePassword && <p className="text-sm text-red-500">{noticePassword}</p>}
                <input className="focus:outline-none border py-2 px-4 sm:w-96 w-80 placeholder:text-sm placeholder:text-gray-600 border-gray-400" type="password" name="" id="" placeholder="Mật khẩu" onChange={(e) => setGetPassword(e.target.value)} onClick={() => setNoticePassword("")}/>
                <button onClick={handleSubmit} className="block sm:w-96 w-80 py-3 bg-main-brown-700 text-white font-semibold text-sm">Đăng nhập</button>
                <Link to={'/'} className="block text-[15px] hover:text-main-brown-700">Trở về</Link>
                <Link to={'/'} className="block text-[15px] hover:text-main-brown-700">Đăng kí</Link>
                <Link to={'/'} className="block text-[15px] hover:text-main-brown-700">Quên mật khẩu</Link>
            </div>
            <Footer />
        </>
    );
}

export default Login;