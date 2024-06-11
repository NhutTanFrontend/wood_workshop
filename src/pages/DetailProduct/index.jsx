import Footer from "../../component/Footer";
import Header from "../../component/Header";
import AboveHeader from "../../component/homepage/AboveHeader";
import HeaderRes from "../../component/homepage/HeaderRes";
import BannerAllProducts from "../../component/AllProducts/BannerAllProducts";
import { Link, useNavigate, useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import { productData } from "../../data/productData"
import { checkOutOfStock } from "../../helper/checkOutOfStock";
import SelectType from "../../component/DetailProduct/SelectType";
import { handleAddProduct } from "../../helper/handleAddProduct";
import Notice from "../../component/Notice";
import Detail from "../../component/DetailProduct/Detail";

function DetailProduct() {

    const { slug } = useParams()
    const [amount, setAmount] = useState(1)
    const [isShow, setIsShow] = useState(false)
    const navigate = useNavigate()

    const product = productData.filter(item => item.id === slug)
    const productInfo = product[0]
    const [selectColor, setSelectColor] = useState(0)
    const [selectSharp, setSelectSharp] = useState(0)
    const [selectMT, setSelectMT] = useState(0)
    const [selectColorName, setSelectColorName] = useState("")
    const [selectSharpName, setSelectSharpName] = useState("")
    const [selectMTName, setSelectMTName] = useState("")

    const handleDescrease = () => {
        if (amount > 1) {
            setAmount(amount - 1)
        }
    }

    useEffect(() => {
        if(productInfo.color){
            checkOutOfStock(productInfo.color, setSelectColor)
        }
        if(productInfo.sharp){
            checkOutOfStock(productInfo.sharp, setSelectSharp)
        }
        if(productInfo.material){
            checkOutOfStock(productInfo.material, setSelectMT)
        }
    }, [])

    useEffect(() => {
        if (productInfo.color) {
            const x = productInfo.color[selectColor - 1]?.name
            setSelectColorName(x)
        }
    }, [selectColor, productInfo])

    useEffect(() => {
        if (productInfo.sharp && productInfo.sharp.length >= selectSharp) {
            const x = productInfo.sharp[selectSharp - 1]?.name
            setSelectSharpName(x)
        }
    }, [selectSharp, productInfo])

    useEffect(() => {
        if (productInfo.material && productInfo.material.length >= selectMT) {
            const x = productInfo.material[selectMT - 1]?.name
            setSelectMTName(x)
        }
    }, [selectMT, productInfo])

    useEffect(() => {
        window.scrollTo(0, 0)
      }, [])

    const addProduct = () => {
        handleAddProduct(productInfo.id, productInfo.name, productInfo.price, amount, selectColorName, selectSharpName, selectMTName, productInfo.image)
        setIsShow(true)
    }

    const fastBuy = () => {
        handleAddProduct(productInfo.id, productInfo.name, productInfo.price, amount, selectColorName, selectSharpName, selectMTName, productInfo.image)
        navigate('/gio-hang')
    }

    return (
        <div className=" overflow-x-hidden">
            <div className=" bg-black pb-4">
                <AboveHeader />
                <Header />
            </div>
            <HeaderRes />
            <BannerAllProducts title={productInfo.name} />
            <div className="container mx-auto mt-10 px-4 sm:px-0">
                <div className="row flex flex-col md:flex-row gap-10">
                    <div className="basis-1/2 flex gap-5">
                        <div className="w-28">
                            <img src={`.${productInfo.image}`} alt="" className="w-full" loading="lazy" />
                        </div>
                        <div className="basis-5/6">
                            <img src={`.${productInfo.image}`} alt="" className="w-full" loading="lazy" />
                        </div>
                    </div>
                    <div className="basis-1/2">
                        <h2 className="uppercase font-semibold text-xl">{productInfo.name}</h2>
                        <div className="flex flex-col sm:flex-row items-start sm:items-center gap-3 text-[15px]">
                            {productInfo.brandSlug && productInfo.brand && (<p className="flex flex-row md:flex-col gap-1 xl:flex-row">Thương hiệu: <Link to={`/tat-ca-san-pham`} className="hover:text-main-brown-700 after:content-[''] after:absolute relative after:w-0 hover:after:w-full after:bottom-[-4px] after:h-0.5 after:bg-main-brown-700 after:left-0 duration-500 transition-all after:duration-500 after:transition-all">{productInfo.brand}</Link></p>)}
                            <hr className="w-[1px] h-[15px] bg-black hidden sm:block" />
                            {productInfo.categorySlug && productInfo.category && (<p className="flex flex-row md:flex-col gap-1 xl:flex-row">Loại: <Link to={`/tat-ca-san-pham`} className="hover:text-main-brown-700 after:content-[''] after:absolute relative after:w-0 hover:after:w-full after:bottom-[-4px] after:h-0.5 after:bg-main-brown-700 after:left-0 duration-500 transition-all after:duration-500 after:transition-all">{productInfo.category}</Link></p>)}
                            <hr className="w-[1px] h-[15px] bg-black hidden sm:block" />
                            <p className="flex flex-row md:flex-col gap-1 xl:flex-row">Mã SP: <span className="block">{productInfo.id}</span></p>
                        </div>
                        <hr className="mt-2" />
                        <div className="flex flex-col sm:flex-row mt-2 gap-0 sm:gap-5">
                            <div className="flex gap-3">
                                <p className=" text-main-brown-700 text-2xl font-semibold">{productInfo.price.toLocaleString("en-US")}₫</p>
                                {productInfo.priceSale && <p className="text-xl text-gray-500 font-semibold line-through">{productInfo?.priceSale.toLocaleString("en-US")}₫</p>}
                            </div>
                            {productInfo.priceSale && <p>(Bạn đã tiết kiệm được {(productInfo.priceSale - productInfo.price).toLocaleString("en-US")}₫)</p>}
                        </div>
                        <hr className="mt-2" />
                        <p className="mt-2 text-[15px]">Bộ cốc làm bằng gỗ táo tàu càn g ngày càng được nhiều người trong giới sành trà tìm đến, bởi khi thưởng thức trà ngon, ai cũng muốn có cho mình một bộ phụ kiện trà đẹp, độc, bền. Với bộ đôi cốc gỗ + thìa này bạn sẽ thêm tự tin khi tiếp đãi khách quý hay bạn bè, vừa thể hiện sự trọng thị hiếu khách, và sự tinh tế của bản thân.</p>
                        <hr className="mt-2" />
                        <SelectType obj={productInfo.color} label="Màu sắc" position={selectColor} setPosition={setSelectColor} />
                        <SelectType obj={productInfo.sharp} label="Kiểu dáng" position={selectSharp} setPosition={setSelectSharp}/>
                        <SelectType obj={productInfo.material} label="Vật liệu" position={selectMT} setPosition={setSelectMT}/>
                        <p className="mt-3 text-[15px]">Hotline hỗ trợ 24/7:<Link to={'/'} className=" font-semibold"> (+84)934 323 882</Link></p>
                        <hr className="mt-2" />
                        <p>Số lượng</p>
                        <div className="flex mt-2 justify-between">
                            <div className="flex border items-center">
                                <p className="px-2 cursor-pointer text-2xl border-e" onClick={handleDescrease}>-</p>
                                <input type="number" className="focus:outline-none w-14 text-center" value={amount} onChange={(e) => setAmount(e.target.value)} />
                                <p className="px-2 cursor-pointer text-2xl border-s" onClick={() => setAmount(amount + 1)}>+</p>
                            </div>
                            <div className="flex gap-3">
                                <p className="uppercase font-semibold text-main-brown-700 px-3 py-2 rounded-lg text-sm border-2 flex items-center border-main-brown-700 hover:bg-main-brown-700 hover:text-white transition-all duration-300 cursor-pointer hover:border-2 hover:border-main-brown-700" onClick={addProduct}>Thêm vào giỏ hàng</p>
                                <div onClick={fastBuy} className="uppercase font-semibold text-white bg-main-brown-700 px-3 py-2 rounded-lg text-sm border-2 flex items-center hover:text-main-brown-700 hover:bg-white transition-all duration-300 cursor-pointer hover:border-2 hover:border-main-brown-700">Mua ngay</div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <Detail />
            <Footer />
            <Notice showNotice={isShow} setShowNotice={setIsShow} content="Đã đặt hàng thành công"/>
        </div>
    );
}

export default DetailProduct;