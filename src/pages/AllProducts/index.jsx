import Footer from "../../component/Footer";
import Header from "../../component/Header";
import AboveHeader from "../../component/homepage/AboveHeader";
import HeaderRes from "../../component/homepage/HeaderRes";
import BannerAllProducts from "../../component/AllProducts/BannerAllProducts";
import ShowProducts from "../../component/AllProducts/ShowProducts";

function AllProducts() {

    return (
        <div>
            <div className=" bg-black pb-4">
                <AboveHeader />
                <Header />
            </div>
            <HeaderRes />
            <BannerAllProducts title="tất cả sản phẩm"/>
            <ShowProducts />
            <Footer />
        </div>
    );
}

export default AllProducts;