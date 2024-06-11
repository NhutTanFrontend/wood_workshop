import { useEffect, useState } from "react";
import imgs from "../../assets/imgs";
import DropdownMenu from "./DropdownMenu";
import PropTypes from 'prop-types'
import { Link, useNavigate } from "react-router-dom";

function Header(props) {

    const { homepage } = props
    const [isShow, setIsShow] = useState(false)
    const [key, setKey] = useState("")
    const navigate = useNavigate()
    const [amountProducts, setAmountProducts] = useState(0)
    const [productData, setProductData] = useState([])
    const [pageSelected, setPageSelected] = useState(0)
    const { changeData, setChangeData } = props

    useEffect(() => {
        if (changeData) {
            const productList = localStorage.getItem("selectedProduct")
            const productListJson = JSON.parse(productList)
            setProductData(productListJson)
            setChangeData(false)
        } else {
            const productList = localStorage.getItem("selectedProduct")
            const productListJson = JSON.parse(productList)
            setProductData(productListJson)
        }

    }, [changeData])

    useEffect(() => {
        let totalPrice = 0;

        if (productData) {
            for (const item of productData) {
                if (item.amount !== null) {
                    totalPrice += item.amount;
                }
            }
        }

        setAmountProducts(totalPrice)

    }, [productData])

    const handleSubmit = () => {
        navigate(`/tim-kiem/${key}`)
    }

    useEffect(() => {
        const x = sessionStorage.getItem("pageSelected")
        const xx = Number(x)
        setPageSelected(xx)
    }, [])

    return (
        <div className={`container mx-auto ${homepage ? "absolute" : ""} top-14 z-50 lg:block hidden`}>
            <div className="row mx-auto flex items-center">
                <Link to={'//'} className="basis-1/4">
                    <img loading="lazy" src={imgs.hinhanh} alt="" className="w-[250px] object-contain" />
                </Link>
                <div className="basis-3/4 py-6 right-0 bg-main-brown-900 transform skew-x-[-40deg] border border-main-brown-300 relative z-50">
                    <div className="flex w-full justify-end items-center gap-5 transform skew-x-[40deg]">
                        <DropdownMenu pageSelected={pageSelected} setPageSelected={setPageSelected} />
                        <div className="flex items-center gap-3 mr-5">
                            <div className="relative">
                                <div className="" onClick={() => setIsShow(!isShow)}>
                                    <svg xmlns="http://www.w3.org/2000/svg" className="w-4 h-4 cursor-pointer" viewBox="0 0 512 512"><path fill="#d3c2ae" d="M416 208c0 45.9-14.9 88.3-40 122.7L502.6 457.4c12.5 12.5 12.5 32.8 0 45.3s-32.8 12.5-45.3 0L330.7 376c-34.4 25.2-76.8 40-122.7 40C93.1 416 0 322.9 0 208S93.1 0 208 0S416 93.1 416 208zM208 352a144 144 0 1 0 0-288 144 144 0 1 0 0 288z" /></svg>
                                </div>
                                <form onSubmit={handleSubmit} className={`${isShow ? "block" : "hidden"} absolute -translate-x-full z-20`}>
                                    <input type="text" className="focus:outline-none px-4 py-2 rounded-full w-96 placeholder:text-gray-600" placeholder="Tìm kiếm" onChange={(e) => setKey(e.target.value)} />
                                </form>
                                <div className="w-screen h-screen fixed z-10" onClick={() => setIsShow(false)}></div>
                            </div>
                            <Link to={'/auth/dang-nhap'} className="">
                                <svg xmlns="http://www.w3.org/2000/svg" className="w-4 h-4" viewBox="0 0 448 512"><path fill="#d3c2ae" d="M224 256A128 128 0 1 0 224 0a128 128 0 1 0 0 256zm-45.7 48C79.8 304 0 383.8 0 482.3C0 498.7 13.3 512 29.7 512H418.3c16.4 0 29.7-13.3 29.7-29.7C448 383.8 368.2 304 269.7 304H178.3z" /></svg>
                            </Link>
                            <div className="relative">
                                <Link to={'/gio-hang'}>
                                    <svg xmlns="http://www.w3.org/2000/svg" className="w-4 h-4" viewBox="0 0 448 512"><path fill="#d3c2ae" d="M160 112c0-35.3 28.7-64 64-64s64 28.7 64 64v48H160V112zm-48 48H48c-26.5 0-48 21.5-48 48V416c0 53 43 96 96 96H352c53 0 96-43 96-96V208c0-26.5-21.5-48-48-48H336V112C336 50.1 285.9 0 224 0S112 50.1 112 112v48zm24 48a24 24 0 1 1 0 48 24 24 0 1 1 0-48zm152 24a24 24 0 1 1 48 0 24 24 0 1 1 -48 0z" /></svg>
                                </Link>
                                <div className="absolute text-white top-[-5px] right-[-8px] font-semibold px-1 text-xs bg-main-brown-700 rounded-full">{amountProducts}</div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

Header.propTypes = {
    homepage: PropTypes.any,
    changeData: PropTypes.any,
    setChangeData: PropTypes.any
};

export default Header;