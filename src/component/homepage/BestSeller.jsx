import TitleSection from "../TitleSection";
import { productData } from '../../data/productData';
import ProductItem from "../ProductItem";
import PropTypes from 'prop-types'
import { useEffect, useState } from "react";

function BestSeller(props) {

    const {changeData, setChangeData} = props
    const [selectIndex, setSelectIndex] = useState(0)

    return (
        <div className="container mt-10 mx-auto">
            <div className="row">
                <TitleSection title="Sản phẩm nổi bật" />
                <div className="flex justify-center items-center gap-5 mt-7">
                    <div className={`${selectIndex === 0 ? "text-main-brown-700" : "text-black"} text-lg cursor-pointer font-semibold`} onClick={() => setSelectIndex(0)}>Đồ lưu niệm</div>
                    <div className="w-3 h-3 bg-main-brown-700 transform rotate-45"></div>
                    <div className={`${selectIndex === 1 ? "text-main-brown-700" : "text-black"} text-lg cursor-pointer font-semibold`} onClick={() => setSelectIndex(1)}>Nội thất</div>
                    <div className="w-3 h-3 bg-main-brown-700 transform rotate-45"></div>
                    <div className={`${selectIndex === 2 ? "text-main-brown-700" : "text-black"} text-lg cursor-pointer font-semibold`} onClick={() => setSelectIndex(2)}>Đồ trang trí</div>
                </div>
                <div className="grid grid-cols-1 xs:grid-cols-2 sm:grid-cols-3 md:grid-cols-4 mt-7 gap-6">
                    {productData.slice(0,8).map((item, index) => (
                        <ProductItem item={item} key={index} changeData={changeData} setChangeData={setChangeData}/>
                    ))}
                </div>
            </div>
        </div>
    );
}

BestSeller.propTypes = {
    changeData: PropTypes.any,
    setChangeData: PropTypes.any
};


export default BestSeller;