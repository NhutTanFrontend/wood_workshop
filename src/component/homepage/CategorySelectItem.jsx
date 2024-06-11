import { Link } from "react-router-dom";
import { useState } from "react";
import PropTypes from 'prop-types'

function CategorySelectItem(props) {

    const {image, title, linkDi} = props

    const [hover1, setHover1] = useState(false)

    return (
        <div className="flex max-h-[250px]" onMouseEnter={() => setHover1(true)} onMouseLeave={() => setHover1(false)}>
            <Link to={linkDi} className="basis-2/5 h-full w-full overflow-hidden flex justify-center items-center">
                <img loading="lazy" src={`.${image}`} alt="" className={`w-full h-full object-fit ${hover1 ? 'scale-105' : 'scale-100'} transition-all duration-500`} />
            </Link>
            <div className="basis-3/5 bg-main-brown-500 w-full h-full flex flex-col justify-center items-center">
                <Link to={linkDi} className="lg:text-2xl text-lg font-semibold hover:text-white transition-all duration-300 uppercase">{title}</Link>
                <Link to={linkDi} className="bg-main-brown-700 text-white py-2 px-4 mt-3 text-sm rounded transition-all duration-300 hover:bg-white hover:text-main-brown-700 hover:shadow-[0_0_0_1px_rgba(200,149,81,1)]">Xem thêm</Link>
            </div>
        </div>
    );
}

CategorySelectItem.propTypes = {
    image: PropTypes.string,
    title: PropTypes.string,
    linkDi: PropTypes.string,
  };

export default CategorySelectItem;