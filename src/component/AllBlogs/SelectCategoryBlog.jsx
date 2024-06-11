import { Link } from "react-router-dom";
import imgs from "../../assets/imgs";
import PropTypes from 'prop-types'

function SelectCategoryBlog(props) {

    const {category} = props

    return (
        <div className="basis-1/4">
            <div className="w-full px-4 sm:px-0">
                <div className="w-full flex justify-center items-center bg-main-brown-700 text-white text-lg py-4 font-semibold">Danh mục tin tức</div>
                <div className="px-4 py-4 border border-t-0 border-black">
                    <Link to={'/blogs/news'} className={`${category === 'news' ? "text-main-brown-700 relative after:absolute after:content-[''] after:bottom-0 after:left-0 after:bg-main-brown-700 after:w-20 after:h-[1px]" : ""} block leading-7 hover:text-main-brown-700 transition-all duration-200`}>Tin tức</Link>
                    <Link to={'/blogs/trick'} className={`${category === 'trick' ? "text-main-brown-700 relative after:absolute after:content-[''] after:bottom-0 after:left-0 after:bg-main-brown-700 after:w-20 after:h-[1px]" : ""} block leading-7 hover:text-main-brown-700 transition-all duration-200`}>Mẹo</Link>
                    <Link to={'/blogs/popular'} className={`${category === 'popular' ? "text-main-brown-700 relative after:absolute after:content-[''] after:bottom-0 after:left-0 after:bg-main-brown-700 after:w-20 after:h-[1px]" : ""} block leading-7 hover:text-main-brown-700 transition-all duration-200`}>Tin nổi bật</Link>
                </div>
            </div>
            <div className="px-4 sm:px-0">
                <div className="w-full flex justify-center items-center bg-main-brown-700 text-white text-lg py-4 font-semibold mt-5">Từ khóa</div>
                <div className="flex flex-wrap gap-3 border border-t-0 border-black px-5 py-4">
                    <Link to={'/blogs/trick'} className="flex items-center gap-1 hover:text-main-brown-700 transition-all duration-200"><svg className="w-4 h-4" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512"><path d="M0 80V229.5c0 17 6.7 33.3 18.7 45.3l176 176c25 25 65.5 25 90.5 0L418.7 317.3c25-25 25-65.5 0-90.5l-176-176c-12-12-28.3-18.7-45.3-18.7H48C21.5 32 0 53.5 0 80zm112 32a32 32 0 1 1 0 64 32 32 0 1 1 0-64z" /></svg> Mẹo</Link>
                    <Link to={'/blogs/trick'} className="flex items-center gap-1 hover:text-main-brown-700 transition-all duration-200"><svg className="w-4 h-4" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512"><path d="M0 80V229.5c0 17 6.7 33.3 18.7 45.3l176 176c25 25 65.5 25 90.5 0L418.7 317.3c25-25 25-65.5 0-90.5l-176-176c-12-12-28.3-18.7-45.3-18.7H48C21.5 32 0 53.5 0 80zm112 32a32 32 0 1 1 0 64 32 32 0 1 1 0-64z" /></svg> Handmade</Link>
                    <Link to={'/blogs/news'} className="flex items-center gap-1 hover:text-main-brown-700 transition-all duration-200"><svg className="w-4 h-4" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512"><path d="M0 80V229.5c0 17 6.7 33.3 18.7 45.3l176 176c25 25 65.5 25 90.5 0L418.7 317.3c25-25 25-65.5 0-90.5l-176-176c-12-12-28.3-18.7-45.3-18.7H48C21.5 32 0 53.5 0 80zm112 32a32 32 0 1 1 0 64 32 32 0 1 1 0-64z" /></svg> Bài viết nổi bật</Link>
                    <Link to={'/blogs/popular'} className="flex items-center gap-1 hover:text-main-brown-700 transition-all duration-200"><svg className="w-4 h-4" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512"><path d="M0 80V229.5c0 17 6.7 33.3 18.7 45.3l176 176c25 25 65.5 25 90.5 0L418.7 317.3c25-25 25-65.5 0-90.5l-176-176c-12-12-28.3-18.7-45.3-18.7H48C21.5 32 0 53.5 0 80zm112 32a32 32 0 1 1 0 64 32 32 0 1 1 0-64z" /></svg> Tin hay</Link>
                </div>
            </div>
            <div className=" mt-5 px-4 sm:px-0">
                <img src={imgs.blogBanner} alt="" className="w-full object-contain" />
            </div>
        </div>
    );
}

SelectCategoryBlog.propTypes = {
    category: PropTypes.any,
};

export default SelectCategoryBlog;