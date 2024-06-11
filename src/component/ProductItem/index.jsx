import PropTypes from 'prop-types'
import { useEffect, useState } from 'react';
import PopupDetail from './PopupDetail';
import { handleAddProduct } from '../../helper/handleAddProduct';
import { Link, useNavigate } from 'react-router-dom';

function ProductItem(props) {

    const { item, changeData, setChangeData, search } = props
    const navigate = useNavigate()

    const [isHover, setIsHover] = useState(false)
    const [isShow, setIsShow] = useState(false)
    const [getColor, setGetColor] = useState("")
    const [getSharp, setGetSharp] = useState("")
    const [getMT, setGetMT] = useState("")
    const [showNotice, setShowNotice] = useState(false)

    useEffect(() => {
        if (item.color) {
            setGetColor(item.color[0].name)
        }
        if (item.sharp) {
            setGetSharp(item.sharp[0].name)
        }
        if (item.material) {
            setGetMT(item.material[0].name)
        }
    }, [])

    const addProduct = () => {
        try {
            handleAddProduct(item.id, item.name, item.price, 1, getColor, getSharp, getMT, item.image)
            setShowNotice(true)
            setChangeData(true)
        } catch (err) {
            console.log(err)
        }
    }

    const fastBuy = () => {
        try {
            handleAddProduct(item.id, item.name, item.price, 1, getColor, getSharp, getMT, item.image)
            navigate('/gio-hang')
            setChangeData(true)
        } catch (err) {
            console.log(err)
        }
    }
    return (
        <>
            <div className={`w-full flex flex-col bg-white p-4 border hover:shadow-2xl transition-all duration-200 cursor-pointer hover:mt-[-10px] ${isShow ? 'hidden' : 'block'}`} onMouseEnter={() => setIsHover(true)} onMouseLeave={() => setIsHover(false)}>
                <div className="relative">
                    <div className="relative overflow-hidden">
                        <Link to={`/san-pham/${item.id}`}>
                            {!search && <img loading='lazy' src={`${item.image}`} alt="" className='w-[100%] object-contain' />}
                            {search && <img loading='lazy' src={`.${item.image}`} alt="" className='w-[100%] object-contain' />}
                        </Link>
                        <div className={`flex gap-2 absolute ${isHover ? "bottom-1" : "bottom-[-30px]"} transition-all duration-500 left-[50%] translate-x-[-50%]`}>
                            <div onClick={addProduct} className="bg-white p-2 relative hover:-translate-y-2.5 transition-all duration-300 hover:bg-main-brown-700 hover:text-white">
                                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-5">
                                    <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 3h1.386c.51 0 .955.343 1.087.835l.383 1.437M7.5 14.25a3 3 0 0 0-3 3h15.75m-12.75-3h11.218c1.121-2.3 2.1-4.684 2.924-7.138a60.114 60.114 0 0 0-16.536-1.84M7.5 14.25 5.106 5.272M6 20.25a.75.75 0 1 1-1.5 0 .75.75 0 0 1 1.5 0Zm12.75 0a.75.75 0 1 1-1.5 0 .75.75 0 0 1 1.5 0Z" />
                                </svg>
                            </div>
                            <div className="bg-white p-2 relative hover:-translate-y-2.5 transition-all duration-300 hover:bg-main-brown-700 hover:text-white" onClick={() => setIsShow(true)}>
                                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-5">
                                    <path strokeLinecap="round" strokeLinejoin="round" d="m21 21-5.197-5.197m0 0A7.5 7.5 0 1 0 5.196 5.196a7.5 7.5 0 0 0 10.607 10.607ZM10.5 7.5v6m3-3h-6" />
                                </svg>
                            </div>
                            <div onClick={fastBuy} className="bg-white p-2 relative hover:-translate-y-2.5 transition-all duration-300 hover:bg-main-brown-700 hover:text-white">
                                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-5">
                                    <path strokeLinecap="round" strokeLinejoin="round" d="M15.75 10.5V6a3.75 3.75 0 1 0-7.5 0v4.5m11.356-1.993 1.263 12c.07.665-.45 1.243-1.119 1.243H4.25a1.125 1.125 0 0 1-1.12-1.243l1.264-12A1.125 1.125 0 0 1 5.513 7.5h12.974c.576 0 1.059.435 1.119 1.007ZM8.625 10.5a.375.375 0 1 1-.75 0 .375.375 0 0 1 .75 0Zm7.5 0a.375.375 0 1 1-.75 0 .375.375 0 0 1 .75 0Z" />
                                </svg>
                            </div>
                        </div>
                    </div>
                    {item.priceSale && <p className='absolute top-0 left-0 bg-main-brown-700 text-white text-sm py-1 px-2'>-{(100 - (item.price / item.priceSale * 100)).toFixed(0)}%</p>}
                </div>
                <Link to={`/san-pham/${item.id}`} className="text-center mt-3 font-semibold">{item.name}</Link>
                <div className="flex justify-center gap-2 items-center">
                    <Link to={`/san-pham/${item.id}`} className="text-center text-main-brown-700 font-semibold">{item.price.toLocaleString("en-US")}đ</Link>
                    {item.priceSale && <Link to={`/san-pham/${item.id}`} className='text-sm line-through font-medium italic'>{item.priceSale.toLocaleString("en-US")}đ</Link>}
                </div>
            </div>

            <PopupDetail item={item} isShow={isShow} setIsShow={setIsShow} changeData={changeData} setChangeData={setChangeData} />
            <div className={`fixed ${showNotice ? "block" : "hidden"} z-20 top-0 left-0`}>
                <p className='absolute w-max top-[50vh] translate-y-[-50%] left-[50vw] translate-x-[-50%] z-20 bg-white text-lg px-14 py-8 rounded'>
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-10 text-green-400 text-center mx-auto">
                        <path strokeLinecap="round" strokeLinejoin="round" d="M9 12.75 11.25 15 15 9.75m-3-7.036A11.959 11.959 0 0 1 3.598 6 11.99 11.99 0 0 0 3 9.749c0 5.592 3.824 10.29 9 11.623 5.176-1.332 9-6.03 9-11.622 0-1.31-.21-2.571-.598-3.751h-.152c-3.196 0-6.1-1.248-8.25-3.285Z" />
                    </svg>
                    Đã thêm vào giỏ hàng
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-8 absolute top-[-1.5vh] right-[-1.5vw] bg-white rounded-full p-1.5 cursor-pointer" onClick={() => setShowNotice(false)}>
                        <path strokeLinecap="round" strokeLinejoin="round" d="M6 18 18 6M6 6l12 12" />
                    </svg>
                </p>
                <div className="w-screen h-screen absolute bg-black opacity-30 z-10"></div>
            </div>
        </>
    );
}

ProductItem.propTypes = {
    item: PropTypes.any,
    changeData: PropTypes.any,
    setChangeData: PropTypes.any,
    search: PropTypes.any,
};

export default ProductItem;