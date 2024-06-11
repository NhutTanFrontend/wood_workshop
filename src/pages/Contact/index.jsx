import Footer from "../../component/Footer";
import Header from "../../component/Header";
import AboveHeader from "../../component/homepage/AboveHeader";
import HeaderRes from "../../component/homepage/HeaderRes";
import BannerAllProducts from "../../component/AllProducts/BannerAllProducts";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { useState } from "react";

function Contact() {

    const [getName, setGetName] = useState("")
    const [getEmail, setGetEmail] = useState("")
    const [getPhone, setGetPhone] = useState("")
    const [getContent, setgetContent] = useState("")
    const [isEnough, setISEnough] = useState(false)

    const notify = () => {
        if (getName.length < 1 || getEmail.length < 1 || getPhone.length < 1 || getContent.length < 1) {
            setISEnough(true)
        } else {
            setGetName("")
            setGetPhone("")
            setGetEmail("")
            setgetContent("")
            setISEnough(false)
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
        }
    }

    return (
        <>
            <div className=" bg-black pb-4">
                <AboveHeader />
                <Header />
            </div>
            <HeaderRes />
            <BannerAllProducts title="Liên hệ" />
            <div className="container mx-auto mt-10">
                <div className="row px-4">
                    <h2 className="uppercase font-semibold text-lg">Liên hệ</h2>
                    <hr className="mt-3" />
                    <div className="flex lg:flex-row flex-col gap-10 mt-5">
                        <div className="basis-1/2">
                            <p className="uppercase font-semibold text-lg">ĐỊA CHỈ:</p>
                            <p className="text-sm">Số 1 Lương Yên, Q.Hai Bà Trưng, Hà Nội</p>
                            <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3918.3301754979943!2d106.61458427485823!3d10.86247238929159!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3175295319c4155d%3A0xae4e05f1a53decca!2sXtech789.com!5e0!3m2!1svi!2s!4v1717214243368!5m2!1svi!2s" className="w-full h-96 mt-4" allowFullScreen loading="lazy" />
                            <p className="mt-10 text-lg font-semibold">SỐ ĐIỆN THOẠI:</p>
                            <p className="text-sm">(+84)934 323 882</p>
                            <p className="mt-5 text-lg font-semibold">EMAIL:</p>
                            <p className="text-sm">support@suplo.vn</p>
                        </div>
                        <div className="basis-1/2 flex flex-col gap-3 items-end">
                            <div className="w-full">
                                {isEnough ? <p className="text-center text-red-500">Vui lòng điền đủ thông tin</p> : ""}
                            </div>
                            <input type="text" className="block placeholder:text-gray-600 placeholder:text-sm text-sm w-full border-2 px-4 py-2 rounded" onChange={(e) => setGetName(e.target.value)} placeholder="Họ tên của bạn" value={getName} />
                            <input type="email" className="block placeholder:text-gray-600 placeholder:text-sm text-sm w-full border-2 px-4 py-2 rounded" value={getEmail} onChange={(e) => setGetEmail(e.target.value)} placeholder="Địa chỉ email của bạn" />
                            <input type="text" className="block placeholder:text-gray-600 placeholder:text-sm text-sm w-full border-2 px-4 py-2 rounded" value={getPhone} onChange={(e) => setGetPhone(e.target.value)} placeholder="Số điện thoại của bạn" />
                            <textarea name="" id="" className="block placeholder:text-gray-600 placeholder:text-sm text-sm w-full border-2 px-4 py-2 rounded h-32" value={getContent} onChange={(e) => setgetContent(e.target.value)} placeholder="Nội dung"></textarea>
                            <button className="block bg-main-brown-700 px-7 py-3 text-sm text-white font-semibold rounded" onClick={notify}>Gửi</button>
                        </div>
                    </div>
                </div>
            </div>
            <Footer />
            <ToastContainer />
        </>
    );
}

export default Contact;