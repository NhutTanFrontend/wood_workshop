import { Link } from 'react-router-dom';
import { productData } from '../../data/productData';
import Contentproduct from './Contentproduct';

function Detail() {
    return (
        <div className="mt-10 container mx-auto px-4 sm:px-0">
            <div className="row flex flex-col xl:flex-row gap-10">
                <div className="basis-3/4">
                    <div className="flex bg-main-brown-300">
                        <p className="uppercase bg-main-brown-500 text-white font-semibold px-5 py-4 hover:bg-main-brown-700 cursor-pointer transition-all duration-200">Mô tả</p>
                        <p className="uppercase bg-main-brown-500 text-white font-semibold px-5 py-4 hover:bg-main-brown-700 cursor-pointer transition-all duration-200">Hướng dẫn</p>
                        <p className="uppercase bg-main-brown-500 text-white font-semibold px-5 py-4 hover:bg-main-brown-700 cursor-pointer transition-all duration-200">Bảo hành</p>
                        <p className="uppercase bg-main-brown-500 text-white font-semibold px-5 py-4 hover:bg-main-brown-700 cursor-pointer transition-all duration-200">Bình luận</p>
                    </div>
                    <div className="border py-3 px-4">
                        <Contentproduct />
                    </div>
                </div>
                <div className="basis-1/4">
                    <p className="uppercase flex items-center justify-center text-lg font-semibold bg-main-brown-700 py-3.5 text-white">SẢN PHẨM LIÊN QUAN</p>
                    <div className="flex flex-col border p-3 gap-2">
                        {productData.slice(0, 5).map(item => (
                            <div key={item.id} className="flex items-center gap-3">
                                <Link to={`/san-pham/${item.id}`}>
                                    <img src={`.${item.image}`} alt="" className="w-20 h-20" />
                                </Link>
                                <Link to={`/san-pham/${item.id}`} className="">
                                    <p className="text-[15px]">{item.name}</p>
                                    <p className="flex gap-4">
                                        <p className=" text-main-brown-700 text-[15px]">{item.price.toLocaleString("en-US")}đ</p>
                                        {item.priceSale && <p className=" text-gray-600 line-through text-[15px]">{item.priceSale.toLocaleString("en-US")}đ</p>}
                                    </p>
                                </Link>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Detail;