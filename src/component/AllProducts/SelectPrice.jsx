import { useState } from "react";
import PropTypes from 'prop-types'

function SelectPrice(props) {

    const [isOpen, setIsOpen] = useState(true)
    const {setGetRangePrice, getRangeprice} = props

    return (
        <div className="px-5">
            <div className="flex justify-between items-center mt-5">
                <p className="uppercase text-main-brown-700 font-semibold">Khoảng giá</p>
                <p className="text-2xl cursor-pointer" onClick={() => setIsOpen(!isOpen)}>{isOpen ? "-" : "+"}</p>
            </div>
            <div
                className={`${isOpen ? "mt-3" : "mt-0"} px-4 overflow-hidden transition-all duration-500 ease-in-out`}
                style={{
                    height: isOpen ? `240px` : '0px',
                }}
            >
                <div className="flex mt-3 items-center gap-2 cursor-pointer">
                    <input type="checkbox"
                        className="before:content[''] peer relative h-4 w-4 cursor-pointer appearance-none rounded-md border border-blue-gray-200 transition-all before:absolute before:top-2/4 before:left-2/4 before:block before:h-12 before:w-12 before:-translate-y-2/4 before:-translate-x-2/4 before:rounded-full before:bg-blue-gray-500 before:opacity-0 before:transition-opacity checked:bg-main-brown-700"
                        id="amber" checked={getRangeprice === 0}  onClick={() => setGetRangePrice(0)} readOnly/>
                    <p className="text-[15px] cursor-pointer" onClick={() => setGetRangePrice(0)}>Tất cả</p>
                </div>
                <div className="flex mt-3 items-center gap-2">
                    <input type="checkbox"
                        className="before:content[''] peer relative h-4 w-4 cursor-pointer appearance-none rounded-md border border-blue-gray-200 transition-all before:absolute before:top-2/4 before:left-2/4 before:block before:h-12 before:w-12 before:-translate-y-2/4 before:-translate-x-2/4 before:rounded-full before:bg-blue-gray-500 before:opacity-0 before:transition-opacity checked:bg-main-brown-700"
                        id="amber" checked={getRangeprice === 1}  onClick={() => setGetRangePrice(1)} readOnly/>
                    <p className="text-[15px] cursor-pointer" onClick={() => setGetRangePrice(1)}>Nhỏ hơn 100,000đ</p>
                </div>
                <div className="flex mt-3 items-center gap-2">
                    <input type="checkbox"
                        className="before:content[''] peer relative h-4 w-4 cursor-pointer appearance-none rounded-md border border-blue-gray-200 transition-all before:absolute before:top-2/4 before:left-2/4 before:block before:h-12 before:w-12 before:-translate-y-2/4 before:-translate-x-2/4 before:rounded-full before:bg-blue-gray-500 before:opacity-0 before:transition-opacity checked:bg-main-brown-700"
                        id="amber" checked={getRangeprice === 2}  onClick={() => setGetRangePrice(2)} readOnly/>
                    <p className="text-[15px] cursor-pointer" onClick={() => setGetRangePrice(2)}>Từ 100,000₫ - 200,000₫</p>
                </div>
                <div className="flex mt-3 items-center gap-2">
                    <input type="checkbox"
                        className="before:content[''] peer relative h-4 w-4 cursor-pointer appearance-none rounded-md border border-blue-gray-200 transition-all before:absolute before:top-2/4 before:left-2/4 before:block before:h-12 before:w-12 before:-translate-y-2/4 before:-translate-x-2/4 before:rounded-full before:bg-blue-gray-500 before:opacity-0 before:transition-opacity checked:bg-main-brown-700"
                        id="amber" checked={getRangeprice === 3}  onClick={() => setGetRangePrice(3)} readOnly/>
                    <p className="text-[15px] cursor-pointer" onClick={() => setGetRangePrice(3)}>Từ 200,000₫ - 300,000₫</p>
                </div>
                <div className="flex mt-3 items-center gap-2">
                    <input type="checkbox"
                        className="before:content[''] peer relative h-4 w-4 cursor-pointer appearance-none rounded-md border border-blue-gray-200 transition-all before:absolute before:top-2/4 before:left-2/4 before:block before:h-12 before:w-12 before:-translate-y-2/4 before:-translate-x-2/4 before:rounded-full before:bg-blue-gray-500 before:opacity-0 before:transition-opacity checked:bg-main-brown-700"
                        id="amber" checked={getRangeprice === 4}  onClick={() => setGetRangePrice(4)} readOnly/>
                    <p className="text-[15px] cursor-pointer" onClick={() => setGetRangePrice(4)}>Từ 300,000₫ - 400,000₫</p>
                </div>
                <div className="flex mt-3 items-center gap-2">
                    <input type="checkbox"
                        className="before:content[''] peer relative h-4 w-4 cursor-pointer appearance-none rounded-md border border-blue-gray-200 transition-all before:absolute before:top-2/4 before:left-2/4 before:block before:h-12 before:w-12 before:-translate-y-2/4 before:-translate-x-2/4 before:rounded-full before:bg-blue-gray-500 before:opacity-0 before:transition-opacity checked:bg-main-brown-700"
                        id="amber" checked={getRangeprice === 5}  onClick={() => setGetRangePrice(5)} readOnly/>
                    <p className="text-[15px] cursor-pointer" onClick={() => setGetRangePrice(5)}>Từ 400,000₫ - 500,000₫</p>
                </div>
                <div className="flex mt-3 items-center gap-2">
                    <input type="checkbox"
                        className="before:content[''] peer relative h-4 w-4 cursor-pointer appearance-none rounded-md border border-blue-gray-200 transition-all before:absolute before:top-2/4 before:left-2/4 before:block before:h-12 before:w-12 before:-translate-y-2/4 before:-translate-x-2/4 before:rounded-full before:bg-blue-gray-500 before:opacity-0 before:transition-opacity checked:bg-main-brown-700"
                        id="amber" checked={getRangeprice === 6}  onClick={() => setGetRangePrice(6)} readOnly/>
                    <p className="text-[15px] cursor-pointer" onClick={() => setGetRangePrice(6)}>Lớn hơn 500,000₫</p>
                </div>
            </div>
        </div>
    );
}

SelectPrice.propTypes = {
    setGetRangePrice: PropTypes.any,
    getRangeprice: PropTypes.any,
};

export default SelectPrice;