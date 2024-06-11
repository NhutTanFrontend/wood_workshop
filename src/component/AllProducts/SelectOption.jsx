import { useState } from "react";
import SelectBrand from "./SelectBrand";
import SelectCategory from "./SelectCategory";
import SelectPrice from "./SelectPrice";
import PropTypes from 'prop-types'

function SelectOption(props) {

    const [isOpen, setIsOpen] = useState(true)
    const {setGetRangePrice, getRangeprice} = props

    return (
        <div className="basis-1/4">
            <div className="flex justify-between items-center px-5">
                <p className="text-main-brown-700 uppercase font-semibold">Danh mục sản phẩm</p>
                <p className="text-2xl cursor-pointer" onClick={() => setIsOpen(!isOpen)}>{isOpen ? "-" : "+"}</p>
            </div>
            <div
                className={`${isOpen ? "mt-3" : "mt-0"} px-5 overflow-hidden transition-all duration-500 ease-in-out`}
                style={{
                    height: isOpen ? `600px` : '0px',
                }}
            >
                <ul className="font-semibold">
                    Nội thất gỗ
                    <li className="font-normal mt-2 px-4 text-[15px]">- Nội thất phòng ngủ</li>
                    <hr className="mt-2" />
                    <li className="font-normal mt-2 px-4 text-[15px]">- Nội thất phòng bếp</li>
                    <hr className="mt-2" />
                    <li className="font-normal mt-2 px-4 text-[15px]">- Nội thất phòng khách</li>
                    <hr className="mt-2" />
                    <li className="font-normal mt-2 px-4 text-[15px]">- Nội thất văn phòng</li>
                </ul>
                <hr className="mt-3" />
                <ul className="font-semibold mt-3">
                    Qùa lưu niệm
                    <li className="font-normal mt-2 px-4 text-[15px]">- Handmade</li>
                    <hr className="mt-2" />
                    <li className="font-normal mt-2 px-4 text-[15px]">- Đồ kỹ nghệ tinh sảo</li>
                    <hr className="mt-2" />
                    <li className="font-normal mt-2 px-4 text-[15px]">- Đồ thiết kế riêng</li>
                </ul>
                <hr className="mt-3" />
                <ul className="font-semibold mt-3">
                    Đồ trang trí
                    <li className="font-normal mt-2 px-4 text-[15px]">- Trang trí phòng ngủ</li>
                    <hr className="mt-2" />
                    <li className="font-normal mt-2 px-4 text-[15px]">- Trang trí tường</li>
                    <hr className="mt-2" />
                    <li className="font-normal mt-2 px-4 text-[15px]">- Trang trí trần nhà</li>
                </ul>
                <hr className="mt-3" />
                <ul className="font-semibold mt-3">
                    Đồ dùng gỗ
                    <li className="font-normal mt-2 px-4 text-[15px]">- Đồ dùng sinh hoạt</li>
                    <hr className="mt-2" />
                    <li className="font-normal mt-2 px-4 text-[15px]">- Đồ dùng học tập</li>
                </ul>
                <hr className="mt-3" />
            </div>
            <SelectPrice setGetRangePrice={setGetRangePrice} getRangeprice={getRangeprice}/>
            <SelectBrand />
            <SelectCategory />
        </div>
    );
}

SelectOption.propTypes = {
    setGetRangePrice: PropTypes.any,
    getRangeprice: PropTypes.any,
};

export default SelectOption;