import { Link } from "react-router-dom";
import BannerAllProducts from "../../component/AllProducts/BannerAllProducts";
import Footer from "../../component/Footer";
import Header from "../../component/Header";
import AboveHeader from "../../component/homepage/AboveHeader";
import HeaderRes from "../../component/homepage/HeaderRes";
import { useState } from "react";

function PaymentOption() {

    const [paymentOption, setPaymentOption] = useState(1)

    const handleSubmit = () => {
        if (paymentOption === 1) {
            localStorage.setItem('paymentOption', 'Thanh toán khi giao hàng (COD)')
        } else {
            localStorage.setItem('paymentOption', 'Chuyển khoản qua ngân hàn')
        }
    }

    return (
        <>
            <div className=" bg-black pb-4">
                <AboveHeader />
                <Header />
            </div>
            <HeaderRes />
            <BannerAllProducts title="Phương thức thanh toán" />
            <h3 className="tracking-wide md:w-[500px] mx-auto mt-10">Phương thức vận chuyển</h3>
            <div className="flex justify-between items-center mt-2 rounded py-3 px-5 border-2 md:w-[500px] mx-auto">
                <div className="flex gap-2 items-center">
                    <input type="radio" name="" id="" checked />
                    <div className="text-sm">Giao hàng tận nơi</div>
                </div>
            </div>
            <h3 className="mt-4 tracking-wide md:w-[500px] mx-auto">Phương thức thanh toán</h3>
            <div className="flex items-center mt-2 rounded py-3 px-5 border-2 gap-2 cursor-pointer md:w-[500px] mx-auto" onClick={() => { setPaymentOption(1) }}>
                <input type="radio" name="" id="" checked={paymentOption === 1} />
                <div className="text-sm">Thanh toán khi giao hàng (COD)</div>
            </div>
            <div className="flex items-center mt-2 rounded py-3 px-5 border-2 gap-2 cursor-pointer md:w-[500px] mx-auto" onClick={() => { setPaymentOption(2) }}>
                <input type="radio" name="" id="" checked={paymentOption === 2} />
                <div className="text-sm">Chuyển khoản qua ngân hàng</div>
            </div>
            <div className="flex flex-col xs:flex-row mt-5 justify-between items-center gap-5">
                <Link to={'/gio-hang'} className="text-blue-500 text-center text-sm">Giỏ hàng</Link>
                <Link to={'/thong-tin-dat-hang'} className=" bg-main-brown-700 text-white py-4 px-5 rounded cursor-pointer text-center text-sm" onClick={handleSubmit}>Điền thông tin giao hàng</Link>
            </div>
            <Footer />
        </>
    );
}

export default PaymentOption;