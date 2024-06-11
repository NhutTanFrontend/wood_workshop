import { useEffect, useState } from "react";
import { productData } from "../../data/productData";
import ProductItem from "../ProductItem";
import SelectOption from "./SelectOption";

function ShowProducts() {

    const [getValue, setGetValue] = useState("priceAsc")
    const [getRangeprice, setGetRangePrice] = useState(0)
    const [dataFilted, setDataFilted] = useState([])
    const [dataFinal, setDataFinal] = useState([])

    function fillData(start, end) {
        const x = productData.filter(item => item.price > start && item.price < end)
        setDataFilted(x)
        return
    }

    useEffect(() => {
        if (getRangeprice === 0) {
            setDataFilted(productData)
        }
        if (getRangeprice === 1) {
            fillData(0, 100000)
        }
        if (getRangeprice === 2) {
            fillData(100000, 200000)
        }
        if (getRangeprice === 3) {
            fillData(200000, 300000)
        }
        if (getRangeprice === 4) {
            fillData(300000, 400000)
        }
        if (getRangeprice === 5) {
            fillData(400000, 500000)
        }
        if (getRangeprice === 6) {
            const x = productData.filter(item => item.price > 500000)
            setDataFilted(x)
            return
        }
    }, [getRangeprice])

    useEffect(() => {
        if (getValue === 'priceAsc') {
            const dataAfterFil = dataFilted.sort((a, b) => b.price - a.price);
            setDataFinal(dataAfterFil)
        }
        if (getValue === 'priceDesc') {
            const dataAfterFil = dataFilted.sort((a, b) => a.price - b.price);
            setDataFinal(dataAfterFil)
        }
        if (getValue === 'nameAsc') {
            const dataAfterFil = dataFilted.sort((a, b) => (a.name && b.name) ? b.name.localeCompare(a.name) : 0);
            setDataFinal(dataAfterFil)
        }
        if (getValue === 'nameDesc') {
            const dataAfterFil = dataFilted.sort((a, b) => (a.name && b.name) ? a.name.localeCompare(b.name) : 0);
            setDataFinal(dataAfterFil)
        }
        if (getValue === 'priceAsc' && getValue === 'priceDesc' && getValue === 'nameAsc' && getValue === 'nameDesc') {
            setDataFinal(dataFilted)
        }
    }, [getValue, dataFilted])

    return (
        <div className="mt-10 container mx-auto">
            <div className="row flex gap-5 flex-col lg:flex-row">
                <div className="basis-3/4 px-5 sm:px-0">
                    <div className="flex flex-col sm:flex-row gap-5 justify-between">
                        <h2 className="uppercase text-lg font-semibold">Tất cả sản phẩm</h2>
                        <div className="flex gap-3 items-center">
                            <label htmlFor="" className="text-sm">Sắp xếp</label>
                            <select className="border px-2 py-2 text-sm focus:outline-none" onChange={(e) => setGetValue(e.target.value)}>
                                <option value="new">Mới nhất</option>
                                <option value="priceAsc">Giá từ thấp đến cao</option>
                                <option value="priceDesc">Giá từ cao đén thấp</option>
                                <option value="nameAsc">Tên A - Z</option>
                                <option value="nameDesc">Tên Z - A</option>
                            </select>
                        </div>
                    </div>
                    {dataFinal.length > 0 ? <div className="mt-10 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
                        {dataFinal?.slice(0, 9).map(item => (
                            <ProductItem key={item.id} item={item} />
                        ))}
                    </div> : <p className="italic mt-5 font-semibold">Xin lỗi quý khách, hiện tại cửa hàng đã hết sản phẩm mà quý khách đang tim kiếm.</p>}
                </div>
                <SelectOption setGetRangePrice={setGetRangePrice} getRangeprice={getRangeprice} />
            </div>
        </div>
    );
}

export default ShowProducts;