import Footer from "../../component/Footer";
import Header from "../../component/Header";
import AboveHeader from "../../component/homepage/AboveHeader";
import HeaderRes from "../../component/homepage/HeaderRes";
import BannerAllProducts from "../../component/AllProducts/BannerAllProducts";
import SelectCategoryBlog from "../../component/AllBlogs/SelectCategoryBlog";
import CommentBox from "../../component/CommentBox";
import InfoBlog from "../../component/DetailBlog/InfoBlog";
import RelatedBlog from "../../component/DetailBlog/RelatedBlog";
import { useEffect } from "react";

function Blog2() {

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
            <BannerAllProducts title="Kiểu tủ gương vừa xinh vừa tiện cho nhà chật hẹp" blog />
            <div className="container mx-auto mt-10">
                <div className="row flex flex-col-reverse lg:flex-row gap-10">
                    <SelectCategoryBlog />
                    <div className="basis-3/4 sm:px-0 px-4">
                        <InfoBlog title="KIỂU TỦ GƯƠNG VỪA XINH VỪA TIỆN CHO NHÀ CHẬT HẸP" date="12/04/18" commentCount={0} author="Suplo Wood" />
                        <p className="mt-5 text-[14px]">Vẫn là cách tận dụng diện tích theo chiều dọc, nhưng đóng tủ gương đựng nữ trang thế này trông vừa &quot;xịn&quot;, lại sắp xếp được rất khoa học nhé! Vẫn là cách tận dụng diện tích theo chiều dọc, nhưng đóng tủ gương đựng nữ trang thế này trông vừa &quot;xịn&quot;, lại sắp xếp được rất khoa học nhé! Vẫn là cách tận dụng diện tích theo chiều dọc, nhưng đóng tủ gương đựng nữ trang thế này trông vừa &quot;xịn&quot;, lại sắp xếp được rất khoa học nhé! Vẫn là cách tận dụng diện tích theo chiều dọc, nhưng đóng tủ gương đựng nữ trang thế này trông vừa &quot;xịn&quot;, lại sắp xếp được rất khoa học nhé! Vẫn là cách tận dụng diện tích theo chiều dọc, nhưng đóng tủ gương đựng nữ trang thế này trông vừa &quot;xịn&quot;, lại sắp xếp được rất khoa học nhé!</p>
                        <p className="mt-3 text-[15px]">Nguyên liệu làm tủ gương đựng trang sức:</p>
                        <p className="mt-3 text-[15px]">- 1 tấm kính khung gỗ 40x120cm</p>
                        <p className="mt-3 text-[15px]">- 4 thanh gỗ 2x8x36cm, 2 thanh gỗ 2x8x120cm </p>
                        <p className="mt-3 text-[15px]">- 4 bản lề đồng dài 5cm</p>
                        <p className="mt-3 text-[15px]">- 8 ốc vít</p>
                        <p className="mt-3 text-[15px]">- 2 bộ móc treo tường</p>
                        <p className="mt-3 text-[15px]">- 1 bộ móc khóa tủ</p>
                        <p className="mt-3 text-[15px]">- Giấy decal trang trí</p>
                        <p className="mt-3 text-[15px]">- Móc treo dấu ? để móc trang sức</p>
                        <p className="mt-3 text-[15px]">- Sơn trắng</p>
                        <p className="mt-3 text-[15px]">- Dụng cụ: khoan, cọ, giấy nhám</p>
                        <p className="mt-3 text-[15px]">Cách làm tủ gương như sau:</p>
                        <p className="mt-3 text-[15px]">Bước 1: - Đầu tiên, bạn dùng giấy nhám chà mịn các thanh gỗ. Đặt 4 thanh gỗ ngắn giữa 2 thanh gỗ dài, xếp thành 3 ngăn nhỏ bên trong. Dùng khoan khoan và gắn ốc vít cố định 2 thanh gỗ dài với 4 thanh gỗ ngắn.</p>
                        <p className="mt-3 text-[15px]">Bước 2: - Sau khi gắn ốc vít cho 2 thanh gỗ dài với 4 thanh gỗ ngắn, bạn sẽ có khung gỗ hình chữ nhật với 3 ngăn bên trong như thế này nhé!</p>
                        <p className="mt-3 text-[15px]">Bước 3: - Dùng cọ sơn 1 lớp màu trắng (hoặc màu sơn cùng với màu khung kính) lên khung gỗ, sau đó để khô hoàn toàn. Bạn gắn 2 móc treo tường vào mặt sau của khung gỗ trên hai thanh gỗ dài.</p>
                        <p className="mt-3 text-[15px]">Bước 4: - Bắn ốc vít cho 4 bản lề ráp khung kính với khung gỗ làm cửa. Dán băng dính lên tường làm dấu để treo chiếc tủ cho thẳng đẹp.</p>
                        <p className="mt-3 text-[15px]">Bước 5: - Bạn có thể dán trang trí mặt trong cánh cửa (mặt sau khung kính) tùy theo sở thích của bạn cho chiếc tủ đẹp hơn.</p>
                        <p className="mt-3 text-[15px]">Bước 6: - Sau đó, ta khoan các lỗ nhỏ bên trong khung gỗ để gắn móc treo. Đồng thời, bạn gắn cố định khóa tủ bên ngoài cửa là xong.</p>
                        <CommentBox url="https://www.yourwebsite.com" />
                        <RelatedBlog />
                    </div>
                </div>
            </div>
            <Footer />
        </>
    );
}

export default Blog2;