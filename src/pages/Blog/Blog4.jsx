import Footer from "../../component/Footer";
import Header from "../../component/Header";
import AboveHeader from "../../component/homepage/AboveHeader";
import HeaderRes from "../../component/homepage/HeaderRes";
import BannerAllProducts from "../../component/AllProducts/BannerAllProducts";
import SelectCategoryBlog from "../../component/AllBlogs/SelectCategoryBlog";
import CommentBox from "../../component/CommentBox";
import InfoBlog from "../../component/DetailBlog/InfoBlog";
import RelatedBlog from "../../component/DetailBlog/RelatedBlog";
import imgs from "../../assets/imgs";
import { useEffect } from "react";

function Blog4() {

    useEffect(() => {
        window.scrollTo(0, 0)
      }, [])

    return (
        <>
            <div className=" bg-black pb-4">
                <AboveHeader />
                <Header />
            </div>
            <HeaderRes />
            <BannerAllProducts title="Móc treo đồ đàn accordion treo đâu cũng thành xinh" blog/>
            <div className="container mx-auto mt-10">
                <div className="row flex flex-col-reverse lg:flex-row gap-10">
                    <SelectCategoryBlog/>
                    <div className="basis-3/4 sm:px-0 px-4">
                        <InfoBlog title="Móc treo đồ đàn accordion treo đâu cũng thành xinh" date="28/02/18" commentCount={0} author="Suplo Wood" content="Kiểu móc treo đồ hiện đại này đảm bảo bạn đặt đâu thì trông cũng sẽ rất ấn tượng và đáng yêu cơ!"/>
                        <p className="mt-3 text-[15px]">Kiểu móc treo đồ hiện đại này đảm bảo bạn đặt đâu thì trông cũng sẽ rất ấn tượng và đáng yêu cơ!</p>
                        <img src={imgs.blog_4_1} alt="" className="mx-auto mt-4"/>
                        <p className="mt-4 text-[15px]">Nguyên liệu làm móc treo đồ:</p>
                        <p className="mt-3 text-[15px]">- 6 thanh gỗ dài 25cm</p>
                        <p className="mt-3 text-[15px]">- 4 thanh gỗ ngắn 12,5cm</p>
                        <p className="mt-3 text-[15px]">- 13 thanh gỗ tròn nhỏ ngắn</p>
                        <p className="mt-3 text-[15px]">- Keo dán gỗ</p>
                        <p className="mt-3 text-[15px]">- Khoan</p>
                        <img src={imgs.blog_4_2} alt="" className="mx-auto mt-4"/>
                        <p className="mt-4 text-[15px]">Cách làm móc treo đồ như sau:</p>
                        <p className="mt-3 text-[15px]">Bước 1: - Đầu tiên, bạn đặt 5 thanh gỗ bên dưới (2 ngắn, 3 dài) và 5 thanh gỗ bên trên (2 ngắn, 3 dài) sao cho các thanh gỗ chéo nhau, tạo thành khung với 4 hình thoi bằng và liền nhau.</p>
                        <p className="mt-3 text-[15px]">Bước 2: - Dùng keo dán gỗ dán cố định các điểm giao của các thanh gỗ với nhau.</p>
                        <p className="mt-3 text-[15px]">Bước 3: - Tiếp theo, bạn khoan lỗ tròn nhỏ tại các điểm giao nhau giữa các thanh gỗ. Bạn lưu ý cho lỗ khoan có đường kính bằng với đường kính của 13 thanh gỗ tròn nhỏ nhé!</p>
                        <p className="mt-3 text-[15px]">Bước 4: - Cuối cùng, bạn gắn và dán cố định 13 thanh gỗ với 13 lỗ khoan trên khung gỗ là xong. Và đây là thành quả của bạn</p>
                        <CommentBox url="https://www.yourwebsite.com" />
                        <RelatedBlog />
                    </div>
                </div>
            </div>
            <Footer />
        </>
    );
}

export default Blog4;