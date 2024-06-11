import { useState } from "react";

function SelectBrand() {

    const [selectedPrice, setSelectedprice] = useState(0)
    const [isOpen, setIsOpen] = useState(true)

    return (
        <div className="px-5">
            <div className="flex justify-between items-center mt-5">
                <p className="uppercase text-main-brown-700 font-semibold">THƯƠNG HIỆU</p>
                <p className="text-2xl cursor-pointer" onClick={() => setIsOpen(!isOpen)}>{isOpen ? "-" : "+"}</p>
            </div>
            <div
                className={`${isOpen ? "mt-3" : "mt-0"} px-4 overflow-hidden transition-all duration-500 ease-in-out`}
                style={{
                    height: isOpen ? `100px` : '0px',
                }}
            >
                <div className="flex mt-3 items-center gap-2 cursor-pointer">
                    <input type="checkbox"
                        className="before:content[''] peer relative h-4 w-4 cursor-pointer appearance-none rounded-md border border-blue-gray-200 transition-all before:absolute before:top-2/4 before:left-2/4 before:block before:h-12 before:w-12 before:-translate-y-2/4 before:-translate-x-2/4 before:rounded-full before:bg-blue-gray-500 before:opacity-0 before:transition-opacity checked:bg-main-brown-700"
                        id="amber" checked={selectedPrice === 0} onClick={() => setSelectedprice(0)} readOnly/>
                    <p className="text-[15px] cursor-pointer" onClick={() => setSelectedprice(0)}>Việt Nam</p>
                </div>
                <div className="flex mt-3 items-center gap-2">
                    <input type="checkbox"
                        className="before:content[''] peer relative h-4 w-4 cursor-pointer appearance-none rounded-md border border-blue-gray-200 transition-all before:absolute before:top-2/4 before:left-2/4 before:block before:h-12 before:w-12 before:-translate-y-2/4 before:-translate-x-2/4 before:rounded-full before:bg-blue-gray-500 before:opacity-0 before:transition-opacity checked:bg-main-brown-700"
                        id="amber" checked={selectedPrice === 1} onClick={() => setSelectedprice(1)} readOnly/>
                    <p className="text-[15px] cursor-pointer" onClick={() => setSelectedprice(1)}>Trung Quốc</p>
                </div>
                <div className="flex mt-3 items-center gap-2">
                    <input type="checkbox"
                        className="before:content[''] peer relative h-4 w-4 cursor-pointer appearance-none rounded-md border border-blue-gray-200 transition-all before:absolute before:top-2/4 before:left-2/4 before:block before:h-12 before:w-12 before:-translate-y-2/4 before:-translate-x-2/4 before:rounded-full before:bg-blue-gray-500 before:opacity-0 before:transition-opacity checked:bg-main-brown-700"
                        id="amber" checked={selectedPrice === 2} onClick={() => setSelectedprice(2)} readOnly/>
                    <p className="text-[15px] cursor-pointer" onClick={() => setSelectedprice(2)}>Khác</p>
                </div>
            </div>
        </div>
    );
}

export default SelectBrand;