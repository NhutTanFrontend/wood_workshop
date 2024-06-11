import { useParams } from "react-router-dom";
import BannerAllProducts from "../../component/AllProducts/BannerAllProducts";
import Footer from "../../component/Footer";
import Header from "../../component/Header";
import AboveHeader from "../../component/homepage/AboveHeader";
import HeaderRes from "../../component/homepage/HeaderRes";
import { productData } from "../../data/productData";
import { useEffect, useState } from "react";
import { removeAccents } from "../../helper/removeAccents"
import ProductItem from "../../component/ProductItem";

function SearchPage() {

    const { key } = useParams()
    const [dataFinal, setDataFinal] = useState([]);

    useEffect(() => {
        const dataFilted = productData.filter((item) =>
            removeAccents(item.name).toLocaleLowerCase().includes(removeAccents(key).toLocaleLowerCase())
        );
        setDataFinal(dataFilted);
    }, [key])

    return (
        <>
            <div className=" bg-black pb-4">
                <AboveHeader />
                <Header />
            </div>
            <HeaderRes />
            <BannerAllProducts title="Tìm kiếm" />
            <div className="container mx-auto mt-10">
                <div className="row">
                    <h2 className="text-center text-2xl font-semibold">Kết quả tìm kiếm:</h2>
                    <p className=" font-semibold text-xl mt-5 px-4">SẢN PHẨM PHÙ HỢP</p>
                    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-5 mt-5 px-4 sm:px-0">
                        {dataFinal?.map(item => <ProductItem key={item.id} item={item} search/>)}
                    </div>
                </div>
            </div>
            <Footer />
        </>
    );
}

export default SearchPage;