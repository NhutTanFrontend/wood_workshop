import Footer from "../../component/Footer";
import Header from "../../component/Header";
import AboveHeader from "../../component/homepage/AboveHeader";
import HeaderRes from "../../component/homepage/HeaderRes";
import BannerAllProducts from "../../component/AllProducts/BannerAllProducts";
import AllBlogsComponent from "../../component/AllBlogs";


function AllBlogs() {
    return (
        <div className="overflow-x-hidden">
             <div className=" bg-black pb-4">
                <AboveHeader />
                <Header />
            </div>
            <HeaderRes />
            <BannerAllProducts title="Tất cả bài blog"/>
            <AllBlogsComponent />
            <Footer />
        </div>
    );
}

export default AllBlogs;