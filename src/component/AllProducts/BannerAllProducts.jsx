import { Link } from 'react-router-dom';
// import imgs from '../../assets/imgs';
import PropTypes from 'prop-types'

function BannerAllProducts(props) {

    const { title, blog } = props

    return (
        <div className="w-screen h-[40vh] xl:container bg-center relative bg-no-repeat bg-cover mx-auto gradient-overlay mt-10 z-0" style={{ backgroundImage: `url('https://demo.thietkewebuytin.vn/test/NhutTan/noithat/hinh/allproductbanner-D6dKuZM1.jpg')` }}>
            <div className="text-white absolute z-[5] flex flex-col items-center justify-center w-full h-full">
                <div className="uppercase text-2xl font-semibold text-center">{title}</div>
                <div className={`flex gap-1 w-full justify-center items-center text-sm ${blog ? "flex-col sm:flex-row" : ""}`}>
                    <div className="flex gap-1">
                        <Link to={'/'} className="hover:text-main-brown-700 duration-200 transition-all">Trang chủ</Link>
                        {blog && <p>/</p>}
                        {blog && <Link to={'/tin-tuc'}>Tin tức</Link>}
                    </div>
                    <p className={`${blog ? "sm:block hidden" : ""}`}>/</p>
                    <p className={`${blog ? "sm:block hidden" : ""}`}>{title}</p>
                </div>
            </div>
            <div className="absolute inset-0 bg-black opacity-55"></div>
        </div>
    );
}

BannerAllProducts.propTypes = {
    title: PropTypes.string,
    blog: PropTypes.any,
};


export default BannerAllProducts;