import { Link } from "react-router-dom";
import BannerAllProducts from "../../component/AllProducts/BannerAllProducts";
import Footer from "../../component/Footer";
import Header from "../../component/Header";
import AboveHeader from "../../component/homepage/AboveHeader";
import HeaderRes from "../../component/homepage/HeaderRes";
import { useState } from "react";
import Notice from "../../component/Notice";

function RecoverPassword() {

    const [getEmail, setGetEmail] = useState("")
    const [noticeEmail, setNoticeEmail] = useState("")
    const [showNotice, setShowNotice] = useState("")

    const handleSubmit = () => {
        if (getEmail.length === 0) {
            setNoticeEmail("Vui lòng điền email")
        } else {
            setShowNotice(true)
            setGetEmail("")
        }
    }

    return (
        <>
            <div className=" bg-black pb-4">
                <AboveHeader />
                <Header />
            </div>
            <HeaderRes />
            <BannerAllProducts title="Tài khoản" />
            <div className="container mx-auto mt-10 flex flex-col items-center gap-4">
                <h2 className="text-2xl font-semibold">Cài đặt lại mật khẩu</h2>
                <p className="text-sm">Mật khẩu mới sẽ được gửi về email của bạn.</p>
                {noticeEmail && <p className="text-sm text-red-500">{noticeEmail}</p>}
                <input className="focus:outline-none border py-2 px-4 sm:w-96 w-80 placeholder:text-sm placeholder:text-gray-600 border-gray-400" type="email" placeholder="Email" value={getEmail} onChange={(e) => setGetEmail(e.target.value)} onClick={() => setNoticeEmail("")}/>
                <button onClick={handleSubmit} className="block sm:w-96 w-80 py-3 bg-main-brown-700 text-white font-semibold text-sm">Gửi</button>
                <Link to={'/'} className="block text-[15px] hover:text-main-brown-700">Trở về</Link>
            </div>
            <Notice showNotice={showNotice} setShowNotice={setShowNotice} content="Đã ghi nhận email của bạn"/>
            <Footer />
        </>
    );
}

export default RecoverPassword;