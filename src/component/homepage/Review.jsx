import imgs from "../../assets/imgs";
import TitleSection from "../TitleSection"
import { Carousel } from "@material-tailwind/react";

function Review() {

    return (
        <div>
            <div className="container mx-auto mt-10">
                <div className="row w-full xl:h-[70vh] md:h-[80vh] xs:h-[90vh] h-[100vh] flex lg:flex-row flex-col" style={{ backgroundImage: `url(.${imgs.reviewbg})` }}>
                    <div className="basis-1/3 relative">
                        <div className="absolute w-full h-full bg-white opacity-30"></div>
                        <div className="absolute border border-main-brown-500 p-6 xs:p-12 w-max top-[50%] translate-y-[-50%] left-[50%] translate-x-[-50%]">
                            <div className="text-xl xs:text-2xl uppercase text-main-brown-500">Giờ mở cửa</div>
                            <ul className="text-main-brown-500 list-disc list-inside mt-5 text-sm xs:text-base">
                                <li>Thứ 2 - Thứ 6 : 7h - 22h</li>
                                <li>Thứ 7 - CN : 9h - 18h</li>
                                <li>Ngày lễ : 9h - 18h</li>
                            </ul>
                        </div>
                    </div>
                    <div className="basis-2/3 flex flex-col items-center justify-center px-5 py-10">
                        <TitleSection title="ĐÁNH GIÁ CỦA KHÁCH HÀNG" white />
                        <Carousel className="mt-5">
                            <div className="text-white flex flex-col items-center justify-center h-full w-full">
                                <img loading="lazy" src={`.${imgs.user1}`} alt="" className="rounded-full" />
                                <p className="mt-5 text-xl font-semibold">Anh Trần Thanh Tùng - Hà Nội</p>
                                <p className="mt-5 px-10 xs:px-20 lg:px-32 text-center">“Tôi thực sự hài lòng với chất lượng cũng như mức giá của các sản phẩm mà Suplo cung cấp. Nhất định tôi sẽ còn quay lại Suplo nhiều lần nữa. Chúc cho Suplo sẽ ngày càng phát triển mạnh mẽ hơn.”</p>
                            </div>
                            <div className="text-white flex flex-col items-center justify-center h-full w-full mx-auto">
                                <img loading="lazy" src={imgs.user1} alt="" className="rounded-full" />
                                <p className="mt-5 text-xl font-semibold">Anh Trần Thanh Tùng - Hà Nội</p>
                                <p className="mt-5 px-10 xs:px-20 lg:px-32 text-center">“Tôi thực sự hài lòng với chất lượng cũng như mức giá của các sản phẩm mà Suplo cung cấp. Nhất định tôi sẽ còn quay lại Suplo nhiều lần nữa. Chúc cho Suplo sẽ ngày càng phát triển mạnh mẽ hơn.”</p>
                            </div>
                        </Carousel>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Review;