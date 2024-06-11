import Footer from "../../component/Footer";
import Header from "../../component/Header";
import AboveHeader from "../../component/homepage/AboveHeader";
import HeaderRes from "../../component/homepage/HeaderRes";
import BannerAllProducts from "../../component/AllProducts/BannerAllProducts";
import { chinhanhData } from "../../data/chinhanhData"
import { Link } from "react-router-dom";

function Chinhanh() {

    return (
        <>
            <div className=" bg-black pb-4">
                <AboveHeader />
                <Header />
            </div>
            <HeaderRes />
            <BannerAllProducts title="Hệ thống cửa hàng" />
            <div className="container mx-auto mt-10">
                <h2 className="text-2xl font-semibold px-4 sm:px-0">Hệ thống cửa hàng</h2>
                <hr className="mt-3"/>
                <div className="mt-4 grid grid-cols-1 px-4 sm:px-0 sm:grid-cols-2 md:grid-cols-3 gap-5">
                    {chinhanhData?.map(item => (
                        <div className="" key={item.id}>
                            <div className="w-full overflow-hidden">
                                <img src={item.image} alt="" loading="lazy" className="hover:scale-105 w-full transition-all duration-500" />
                            </div>
                            <p className="flex items-center gap-2 mt-3 hover:text-main-brown-700 transition-all duration-200">
                                <svg className="w-4 h-4" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 384 512"><path d="M215.7 499.2C267 435 384 279.4 384 192C384 86 298 0 192 0S0 86 0 192c0 87.4 117 243 168.3 307.2c12.3 15.3 35.1 15.3 47.4 0zM192 128a64 64 0 1 1 0 128 64 64 0 1 1 0-128z" /></svg>
                                <Link to={'/'} className="">{item.name}</Link>
                            </p>
                            <p className="flex items-center gap-2 hover:text-main-brown-700 transition-all duration-200">
                                <svg className="w-4 h-4" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512"><path d="M164.9 24.6c-7.7-18.6-28-28.5-47.4-23.2l-88 24C12.1 30.2 0 46 0 64C0 311.4 200.6 512 448 512c18 0 33.8-12.1 38.6-29.5l24-88c5.3-19.4-4.6-39.7-23.2-47.4l-96-40c-16.3-6.8-35.2-2.1-46.3 11.6L304.7 368C234.3 334.7 177.3 277.7 144 207.3L193.3 167c13.7-11.2 18.4-30 11.6-46.3l-40-96z" /></svg>
                                <p>{item.phone}</p>
                            </p>
                        </div>
                    ))}
                </div>
            </div>
            <Footer />
        </>
    );
}

export default Chinhanh;