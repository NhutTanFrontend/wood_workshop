import { useState } from "react";
import imgs from "../../assets/imgs";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

function SubcriseNotice() {

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
        <div className="container mx-auto">
            <div className="row bg-center bg-cover bg-no-repeat w-full h-[380px] flex justify-center py-16 relative" style={{ backgroundImage: `url(.${imgs.subcrise})` }}>
                <div className="w-full h-full absolute bg-black opacity-50 top-0"></div>
                <div className="w-[60%] flex flex-col items-center justify-center relative z-20">
                    <div className="uppercase text-white font-semibold text-2xl">ĐĂNG KÝ NHẬN TIN</div>
                    <div className="text-white text-center mt-5">Đăng ký với chúng tôi để nhận thông tin mới nhất về khuyến mãi, các sản phẩm mới và tin tức bạn cần. Nhập email tại đây</div>
                    <div className="relative w-full mt-5">
                        <div className="absolute inset-0 h-[60px] bg-main-brown-700 opacity-60 z-0"></div>
                        <div className="absolute w-full flex items-center justify-center mx-auto top-2">
                            <input onChange={(e) => setEmailValue(e.target.value)} type="email" className="text-white block w-[80%] bg-transparent border border-white px-4 py-2 z-10" />
                            <button type="submit" className="uppercase min-w-max px-3 font-semibold text-white bg-main-brown-700 text-center py-2 z-10 ml-2" onClick={notify}>Đăng ký</button>
                        </div>
                    </div>
                </div>
            </div>
            <ToastContainer />
        </div>

    );
}

export default SubcriseNotice;