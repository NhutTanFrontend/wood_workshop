import { Link } from "react-router-dom";
import BannerAllProducts from "../../component/AllProducts/BannerAllProducts";
import Footer from "../../component/Footer";
import Header from "../../component/Header";
import AboveHeader from "../../component/homepage/AboveHeader";
import HeaderRes from "../../component/homepage/HeaderRes";
import { useEffect, useState } from "react";
import CartItem from "../../component/Cart/CartItem";

function Cart() {
    const [productData, setProductData] = useState([])
    const [changeData, setChangeData] = useState(false)
    const [totalPrice, setTotalPrice] = useState(0)

    useEffect(() => {
        const productList = localStorage.getItem("selectedProduct")
        const productListJson = JSON.parse(productList)
        setProductData(productListJson)
    }, [])

    useEffect(() => {
        let total = 0
        for (let i = 0; i < productData?.length; i++) {
            total += productData[i].price * productData[i].amount;
        }
        setTotalPrice(total)
    }, [productData, changeData])

    return (
        <>
            <div className=" bg-black pb-4">
                <AboveHeader />
                <Header />
            </div>
            <HeaderRes />
            <BannerAllProducts title="Giỏ hàng của bạn" />
            <div className="container mx-auto mt-10">
                <h2 className="text-2xl font-semibold">Giỏ hàng</h2>
                {productData.length === 0 && <p className="mt-5">Giỏ hàng của bạn đây trống. Tiếp tục mua sắm <Link to={'/tat-ca-san-pham'} className=" text-main-brown-700">tại đây</Link></p>}
                <div className="flex flex-col mt-5">
                    {productData?.map((item, index) => <CartItem key={index} changeData={changeData} setChangeData={setChangeData} item={item} setProductData={setProductData} productData={productData} />)}
                </div>
                {productData.length !== 0 && <div className="flex flex-col items-end gap-2 mt-10">
                    <div className="text-2xl font-medium text-main-green">Tổng tiền: {totalPrice.toLocaleString("en-US")}đ</div>
                    {productData ? <Link to={'/phuong-thuc-thanh-toan'} className=" bg-main-brown-700 text-white py-3 px-7 hover:bg-transparent hover:text-main-brown-700 border border-main-brown-700 transition-all duration-300 mt-5">Tiếp theo</Link> : ""}
                </div>}
            </div>
            <Footer />
        </>
    );
}

export default Cart;