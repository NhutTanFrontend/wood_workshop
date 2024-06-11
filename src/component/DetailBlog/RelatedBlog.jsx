import { Link } from "react-router-dom";

function RelatedBlog() {
    return (
        <>
            <h3 className="uppercase font-semibold text-lg mt-10">Các bài viết liên quan</h3>
            <ul className="list-disc list-inside">
                <li className="mt-3 text-[15px] hover:text-main-brown-700 relative group">
                    <Link
                        className="relative after:w-full after:h-[1px] after:bg-main-brown-700 after:absolute after:bottom-[-3px] after:content-[''] after:left-0 after:transition-transform after:duration-500 after:scale-x-0 group-hover:after:scale-x-100"
                        to={'/blogs/Blog-1'} >
                        Đi tìm gỗ đóng tủ vạn năng ghép được muôn vàn kiểu
                    </Link>
                </li>
                <li className="mt-3 text-[15px] hover:text-main-brown-700 relative group">
                    <Link
                        className="relative after:w-full after:h-[1px] after:bg-main-brown-700 after:absolute after:bottom-[-3px] after:content-[''] after:left-0 after:transition-transform after:duration-500 after:scale-x-0 group-hover:after:scale-x-100"
                        to={'/blogs/Blog-2'} >
                        15 đồ nội thất tái chế từ gỗ thừa đem tới vẻ đẹp vintage cho ngôi nhà
                    </Link>
                </li>
                <li className="mt-3 text-[15px] hover:text-main-brown-700 relative group">
                    <Link
                        className="relative after:w-full after:h-[1px] after:bg-main-brown-700 after:absolute after:bottom-[-3px] after:content-[''] after:left-0 after:transition-transform after:duration-500 after:scale-x-0 group-hover:after:scale-x-100"
                        to={'/blogs/Blog-3'} >
                        Móc treo đồ đàn accordion treo đâu cũng thành xinh
                    </Link>
                </li>
                <li className="mt-3 text-[15px] hover:text-main-brown-700 relative group">
                    <Link
                        className="relative after:w-full after:h-[1px] after:bg-main-brown-700 after:absolute after:bottom-[-3px] after:content-[''] after:left-0 after:transition-transform after:duration-500 after:scale-x-0 group-hover:after:scale-x-100"
                        to={'/blogs/Blog-4'} >
                        Căn hộ ấm áp nhờ biết cách sử dụng nội thất gỗ
                    </Link>
                </li>
            </ul>
        </>
    );
}

export default RelatedBlog;