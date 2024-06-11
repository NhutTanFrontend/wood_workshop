import { useEffect, useState } from "react";
import imgs from "../../assets/imgs";
import NavigeSelect from "../Header/NavigeSelect";
import PropTypes from 'prop-types'
import { Link } from "react-router-dom";

function HeaderRes(props) {

    const {changeData, setChangeData} = props

    const [isShow, setIsShow] = useState(false)
    const [productData, setProductData] = useState([])
    const [amountProducts, setAmountProducts] = useState(0)

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

    return (
        <div>
            <div className="w-[95vw] mx-auto block lg:hidden">
                <div className="row flex justify-between items-center py-3">
                    <Link to={'//'} className="">
                        <img loading="lazy" src={imgs.hinhanh} alt="" />
                    </Link>
                    <div className="flex items-center gap-3">
                        <div className=" relative">
                            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 576 512" className="w-6 h-6"><path fill="#c89551" d="M0 24C0 10.7 10.7 0 24 0H69.5c22 0 41.5 12.8 50.6 32h411c26.3 0 45.5 25 38.6 50.4l-41 152.3c-8.5 31.4-37 53.3-69.5 53.3H170.7l5.4 28.5c2.2 11.3 12.1 19.5 23.6 19.5H488c13.3 0 24 10.7 24 24s-10.7 24-24 24H199.7c-34.6 0-64.3-24.6-70.7-58.5L77.4 54.5c-.7-3.8-4-6.5-7.9-6.5H24C10.7 48 0 37.3 0 24zM128 464a48 48 0 1 1 96 0 48 48 0 1 1 -96 0zm336-48a48 48 0 1 1 0 96 48 48 0 1 1 0-96z" /></svg>
                            <div className=" absolute top-[-12px] right-[-7px] text-xs bg-main-brown-700 px-1 rounded-full text-white">{amountProducts}</div>
                        </div>
                        <div className="flex items-center gap-1 cursor-pointer" onClick={() => setIsShow(true)}>
                            <div className=" text-main-brown-700">MENU</div>
                            <div className="">
                                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512" className="w-6 h-6"><path fill="#c89551" d="M0 96C0 78.3 14.3 64 32 64H416c17.7 0 32 14.3 32 32s-14.3 32-32 32H32C14.3 128 0 113.7 0 96zM0 256c0-17.7 14.3-32 32-32H416c17.7 0 32 14.3 32 32s-14.3 32-32 32H32c-17.7 0-32-14.3-32-32zM448 416c0 17.7-14.3 32-32 32H32c-17.7 0-32-14.3-32-32s14.3-32 32-32H416c17.7 0 32 14.3 32 32z" /></svg>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className={`fixed top-0 left-0 w-[100vw] h-[100vh] bg-black z-10 transition-opacity duration-300 ease-in-out ${
          isShow ? 'opacity-35 pointer-events-auto' : 'opacity-0 pointer-events-none'
        }`} onClick={() => setIsShow(false)}></div>
            <div className={`w-[300px] min-h-[100vh] fixed top-0 ${isShow ? 'right-0' : 'right-[-300px]'} z-10 overflow-y-auto overflow-x-hidden bg-main-brown-900-70 transition-all duration-500 border-l border-white`}>
                <div className="relative w-full h-full">
                    <div className="w-[300px] min-h-[100%] absolute top-0 right-0 bg-main-brown-900 opacity-70"></div>
                </div>
                <div className="flex w-full justify-end pr-5 mt-10 absolute text-white items-center gap-1 z-30">
                    <div className="text-xs font-medium mt-1 cursor-pointer" onClick={() => setIsShow(false)}>ĐÓNG</div>
                    <div className="text-2xl font-semibold cursor-pointer" onClick={() => setIsShow(false)}>x</div>
                </div>
                <div className="px-5 z-20 absolute top-28 w-full ">
                    <div className="w-full flex">
                        <input
                            type="text"
                            className="flex w-full px-4 py-2.5 focus:outline-none placeholder:font-semibold"
                            placeholder="Tìm kiếm..."
                        />
                        <button className="absolute cursor-pointer right-4 px-4 w-max py-3" type="submit">
                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-5 h-5 text-main-brown-700 font-semibold">
                                <path strokeLinecap="round" strokeLinejoin="round" d="m21 21-5.197-5.197m0 0A7.5 7.5 0 1 0 5.196 5.196a7.5 7.5 0 0 0 10.607 10.607Z" />
                            </svg>
                        </button>
                    </div>
                    <NavigeSelect />
                </div>

            </div>

        </div>
    );
}

HeaderRes.propTypes = {
    changeData: PropTypes.any,
    setChangeData: PropTypes.any
  };
  

export default HeaderRes;