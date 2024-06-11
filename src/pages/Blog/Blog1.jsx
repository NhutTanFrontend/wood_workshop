import Footer from "../../component/Footer";
import Header from "../../component/Header";
import AboveHeader from "../../component/homepage/AboveHeader";
import HeaderRes from "../../component/homepage/HeaderRes";
import BannerAllProducts from "../../component/AllProducts/BannerAllProducts";
import SelectCategoryBlog from "../../component/AllBlogs/SelectCategoryBlog";
import imgs from "../../assets/imgs";
import CommentBox from "../../component/CommentBox";
import InfoBlog from "../../component/DetailBlog/InfoBlog";
import RelatedBlog from "../../component/DetailBlog/RelatedBlog";
import { useEffect } from "react";

function Blog1() {

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
            <BannerAllProducts title="Đi tìm gỗ đóng tủ vạn năng ghép được muôn vàn kiểu" blog />
            <div className="container mx-auto mt-10">
                <div className="row flex flex-col-reverse lg:flex-row gap-10">
                    <SelectCategoryBlog />
                    <div className="basis-3/4 sm:px-0 px-4">
                        <InfoBlog title="ĐI TÌM GỖ ĐÓNG TỦ VẠN NĂNG GHÉP ĐƯỢC MUÔN VÀN KIỂU" date="12/04/18" commentCount={0} author="Suplo Wood"/>
                        <p className="mt-5 text-[15px]">Nhiều người luôn cho rằng, gỗ thừa là đồ bỏ đi nên thường hoang phí không đúng cách. Đã bao giờ bạn nghĩ đến giá treo đồ làm từ thùng rượu cũ hay bàn uống nước làm từ dát giường sẽ trông thế nào chưa? Chỉ cần óc sáng tạo và một chút khéo léo thôi, bạn đã có thể biến &quot;đồ đồng nát	&quot; thành những món đồ nội thất đậm chất vintage như 15 gợi ý dưới đây rồi đấy!</p>
                        <p className="mt-3 text-[15px]">Nhiều người luôn cho rằng, gỗ thừa là đồ bỏ đi nên thường hoang phí không đúng cách. Đã bao giờ bạn nghĩ đến giá treo đồ làm từ thùng rượu cũ hay bàn uống nước làm từ dát giường sẽ trông thế nào chưa? Chỉ cần óc sáng tạo và một chút khéo léo thôi, bạn đã có thể biến &quot;đồ đồng nát	&quot; thành những món đồ nội thất đậm chất vintage như 15 gợi ý dưới đây rồi đấy!</p>
                        <div className="mt-3">
                            <img src={imgs.blog_1_1} alt="" className="mx-auto"/>
                        </div>
                        <p className="mt-3 text-[15px]">1. Thử ghép nhiều mảnh gỗ dài lại đi, bạn sẽ có ngay chiếc bàn ăn vừa cổ điển vừa sang trọng.</p>
                        <div className="mt-3">
                            <img src={imgs.blog_1_2} alt="" className="mx-auto"/>
                        </div>
                        <p className="mt-3 text-[15px]">2. Song, nếu để tân trang phòng ngủ thì bạn hãy chọn gỗ sáng màu để tạo cảm giác thư thái nhé.</p>
                        <div className="mt-3">
                            <img src={imgs.blog_1_3} alt="" className="mx-auto"/>
                        </div>
                        <p className="mt-3 text-[15px]">3. Đừng vội vứt miếng gỗ thừa này đi vì nó có thể biến thành đầu giường vừa hiện đại lại tối giản trong phòng ngủ của bạn.</p>
                        <div className="mt-3">
                            <img src={imgs.blog_1_4} alt="" className="mx-auto"/>
                        </div>
                        <p className="mt-3 text-[15px]">4. Ai mà nghĩ thùng rượu cũ lại có thể biến thành giá đựng đồ gọn gàng thế này chứ?</p>
                        <div className="mt-3">
                            <img src={imgs.blog_1_5} alt="" className="mx-auto"/>
                        </div>
                        <p className="mt-3 text-[15px]">5. Chỉ cần tỉ mỉ và khéo léo, bạn có thể biến dát giường thành sàn gỗ xinh xắn trong vườn nhà.</p>
                        <div className="mt-3">
                            <img src={imgs.blog_1_6} alt="" className="mx-auto"/>
                        </div>
                        <p className="mt-3 text-[15px]">6. Lát tường bằng nhiều mảnh gỗ dài sẽ khiến gian nhà vừa ấm cúng lại mang đậm phong cách vintage đấy.</p>
                        <div className="mt-3">
                            <img src={imgs.blog_1_7} alt="" className="mx-auto"/>
                        </div>
                        <p className="mt-3 text-[15px]">7. Đừng nghĩ xích đu thì phải diêm dúa công chúa, đôi khi sự tối giản cũng có sức hút đặc biệt.</p>
                        <div className="mt-3">
                            <img src={imgs.blog_1_8} alt="" className="mx-auto"/>
                        </div>
                        <p className="mt-3 text-[15px]">8. Sao không tái sử dụng thùng rượu cũ và chế chúng thành bàn làm việc nhỏ xinh nhỉ?</p>
                        <div className="mt-3">
                            <img src={imgs.blog_1_9} alt="" className="mx-auto"/>
                        </div>
                        <p className="mt-3 text-[15px]">9. Nếu được tận dụng đúng cách, chiếc dát giường ẩm mốc sẽ thành tấm bình phong kiêm giá treo tranh hữu hiệu.</p>
                        <div className="mt-3">
                            <img src={imgs.blog_1_10} alt="" className="mx-auto"/>
                        </div>
                        <p className="mt-3 text-[15px]">10. Gian bếp nhà bạn sẽ không còn lộn xộn bởi đống xoong chảo nữa nếu được treo gọn gàng trên chiếc giá gỗ này.</p>
                        <div className="mt-3">
                            <img src={imgs.blog_1_11} alt="" className="mx-auto"/>
                        </div>
                        <CommentBox url="https://www.yourwebsite.com"/>
                        <RelatedBlog />
                    </div>
                </div>
            </div>
            <Footer />
        </>
    );
}

export default Blog1;