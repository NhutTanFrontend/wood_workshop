import Footer from "../../component/Footer";
import Header from "../../component/Header";
import AboveHeader from "../../component/homepage/AboveHeader";
import HeaderRes from "../../component/homepage/HeaderRes";
import BannerAllProducts from "../../component/AllProducts/BannerAllProducts";

function AboutUs() {
    return (
        <div>
            <div className=" bg-black pb-4">
                <AboveHeader />
                <Header />
            </div>
            <HeaderRes />
            <BannerAllProducts title="Giới thiệu" fix/>
            <div className="container mx-auto mt-10 px-4 sm:px-0">
                <div className="uppercase font-semibold text-lg">Giới thiệu</div>
                <hr className="mt-3"/>
                <div className="mt-4">Trang giới thiệu giúp khách hàng hiểu rõ hơn về cửa hàng của bạn. Hãy cung cấp thông tin cụ thể về việc kinh doanh, về cửa hàng, thông tin liên hệ. Điều này sẽ giúp khách hàng cảm thấy tin tưởng khi mua hàng trên website của bạn.</div>
                <ul className="mt-4 flex flex-col gap-2 list-disc list-inside">
                Một vài gợi ý cho nội dung trang Giới thiệu:
                <li className="mt-2">Bạn là ai</li>
                <li>Giá trị kinh doanh của bạn là gì</li>
                <li>Địa chỉ cửa hàng</li>
                <li>Bạn đã kinh doanh trong ngành hàng này bao lâu rồi</li>
                <li>Bạn kinh doanh ngành hàng online được bao lâu</li>
                <li>Đội ngũ của bạn gồm những ai</li>
                <li>Thông tin liên hệ</li>
                <li>Liên kết đến các trang mạng xã hội (Twitter, Facebook)</li>
                </ul>
            </div>
            <Footer />
        </div>
    );
}

export default AboutUs;