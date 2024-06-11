import PropTypes from 'prop-types'
import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import 'react-toastify/dist/ReactToastify.css';
import { handleAddProduct } from '../../helper/handleAddProduct';
import { checkOutOfStock } from '../../helper/checkOutOfStock';

function PopupDetail(props) {

    const { item, isShow, setIsShow, setChangeData } = props

    const [selectColor, setSelectColor] = useState(1)
    const [selectSharp, setSelectSharp] = useState(1)
    const [selectMT, setSelectMT] = useState(1)
    const [amount, setAmount] = useState(1)
    const [selectColorName, setSelectColorName] = useState("")
    const [selectSharpName, setSelectSharpName] = useState("")
    const [selectMTName, setSelectMTName] = useState("")

    useEffect(() => {
        if (item.color) {
            const x = item.color[selectColor - 1].name
            setSelectColorName(x)
        }

    }, [selectColor, selectMT, item])

    useEffect(() => {
        if (item.sharp && item.sharp.length >= selectSharp) {
            const x = item.sharp[selectSharp - 1].name
            setSelectSharpName(x)
        }
    }, [selectSharp, item])

    useEffect(() => {
        if (item.material && item.material.length >= selectMT) {
            const x = item.material[selectMT - 1].name
            setSelectMTName(x)
        }
    }, [selectMT, item])

    const addProduct = () => {
        handleAddProduct(item.id, item.name, item.price, amount, selectColorName, selectSharpName, selectMTName, item.image)
        setIsShow(false)
        setChangeData(true)
    }

    useEffect(() => {
        if(item.color){
            checkOutOfStock(item.color, setSelectColor)
        }
        if(item.sharp){
            checkOutOfStock(item.sharp, setSelectSharp)
        }
        if(item.material){
            checkOutOfStock(item.material, setSelectMT)
        }
    }, [])

    const handleDescrease = () => {
        if (amount > 1) {
            setAmount(amount - 1)
        }
    }

    const handleEnterNumber = (e) => {
        if (e < 1) {
            setAmount(1)
        } else {
            setAmount(e)
        }
    }

    return (
        <div className={`relative z-10 ${isShow ? 'block pointer-events-auto' : 'hidden pointer-events-none'}`} aria-labelledby="modal-title" role="dialog" aria-modal="true">
            <div className="fixed inset-0 bg-gray-500 bg-opacity-75 transition-opacity" />
            <div className="fixed inset-0 z-10 w-screen overflow-y-auto">
                <div className="flex min-h-full items-end justify-center p-4 text-center sm:items-center sm:p-0">
                    <div className="relative transform overflow-hidden rounded-lg bg-white text-left shadow-xl transition-all sm:my-8 sm:w-full sm:max-w-3xl">
                        <div className="bg-white px-4 pb-4 pt-5 sm:p-6 sm:pb-4 flex gap-8">
                            <div className="basis-5/12">
                                <div className="">
                                    <img loading='lazy' src={item.image} alt="" className='w-full' />
                                </div>
                                <div className="grid grid-cols-3 gap-3 mt-4">
                                    <div className="">
                                        <img loading='lazy' src={item.image} alt="" />
                                    </div>
                                    <div className="">
                                        <img loading='lazy' src={item.image} alt="" />
                                    </div>
                                    <div className="">
                                        <img loading='lazy' src={item.image} alt="" />
                                    </div>
                                </div>
                            </div>
                            <div className="basis-7/12">
                                <div className="uppercase text-lg font-semibold">{item.name}</div>
                                <div className="">Mã sản phẩm: {item.id}</div>
                                <hr className='mt-2' />
                                <div className="flex mt-2 gap-3 items-end">
                                    <p className='text-xl font-semibold text-main-brown-700'>{item.price.toLocaleString("en-US")}đ</p>
                                    {item.priceSale && <p className='text-gray-500 line-through'>{item.priceSale.toLocaleString("en-US")}</p>}
                                </div>
                                {item.priceSale && <p className='italic'>(Bạn đã tiết kiệm được {(item.priceSale - item.price).toLocaleString("en-US")}đ)</p>}
                                <hr className='mt-2' />
                                {item.color && <p className='mt-2 font-semibold text-base'>Màu sắc</p>}
                                <div className="flex mt-1 gap-2">
                                    {item.color && item.color.map(item => (
                                        <p className={`${selectColor === item.id ? 'border-red-500 text-black' : 'text-gray-400 border-gray-400'} text-sm border cursor-pointer px-3 py-1 ${item.outOfStock && 'hidden'}`} key={item.id} onClick={() => setSelectColor(item.id)}>
                                            {item.name}
                                        </p>
                                    ))}
                                </div>
                                {item.sharp && <p className='mt-2 font-semibold text-base'>Kiểu dáng</p>}
                                <div className="flex mt-1 gap-2">
                                    {item.sharp && item.sharp.map(item => <p className={`${selectSharp === item.id ? 'border-red-500 text-black' : 'text-gray-400 border-gray-400'} text-sm border cursor-pointer px-3 py-1 ${item.outOfStock && 'hidden'}`} key={item.id} onClick={() => setSelectSharp(item.id)}>{item.name}</p>)}
                                </div>
                                {item.material && <p className='mt-2 font-semibold text-base'>Chất liệu</p>}
                                <div className="flex">
                                    {item.material && item.material.map(item => <p className={`${selectMT === item.id ? 'border-red-500 text-black' : 'text-gray-400 border-gray-400'} text-sm border cursor-pointer px-3 py-1 ${item.outOfStock && 'hidden'}`} key={item.id} onClick={() => setSelectMT(item.id)}>{item.name}</p>)}
                                </div>
                                <p className='mt-2 font-semibold text-base'>Số lượng</p>
                                <div className="flex">
                                    <div className="px-2 border border-black cursor-pointer text-2xl" onClick={handleDescrease}>-</div>
                                    <input type="number" className="text-center w-16 border border-black focus:outline-none" value={amount} onChange={(e) => handleEnterNumber(e.target.value)} />
                                    <div className="px-2 border border-black cursor-pointer text-2xl" onClick={() => setAmount(amount + 1)}>+</div>
                                </div>
                                <div className="bg-main-brown-700 text-white font-semibold w-max text-sm px-3 py-2 mt-5 cursor-pointer" onClick={addProduct}>Thêm vào giỏ</div>
                                <div className='mt-2 text-sm'>hoặc <Link to={`/san-pham/${item.id}`} className='text-main-brown-700'>Xem chi tiết</Link></div>
                            </div>
                        </div>
                        <div className="bg-gray-50 px-4 py-3 sm:flex sm:flex-row-reverse sm:px-6">
                            <div className="mt-3 w-max justify-center rounded-md bg-red-600 text-white px-3 py-2 text-sm font-semibold shadow-sm  cursor-pointer sm:mt-0 sm:w-auto" onClick={() => setIsShow(false)}>Đóng</div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

PopupDetail.propTypes = {
    item: PropTypes.any,
    isShow: PropTypes.any,
    setIsShow: PropTypes.any,
    changeData: PropTypes.any,
    setChangeData: PropTypes.any
};

export default PopupDetail;