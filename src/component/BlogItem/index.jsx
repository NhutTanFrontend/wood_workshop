import PropTypes from 'prop-types'
import { Link } from 'react-router-dom';

function BlogItem(props) {

    const { item, allBlog } = props

    return (
        <div className={`${allBlog ? 'w-[95%]' : 'w-full'} mx-auto`}>
            <div className="w-full h-[230px] relative">
                <Link to={`/${item.link}`}>
                    <img loading='lazy' src={`${item.image}`} alt="" className="w-full h-full object-cover" />
                </Link>
                <div className="absolute top-0 left-0 text-center bg-main-brown-700 text-white px-3 py-1">
                    <p className="text-2xl font-bold">{item.day}</p>
                    <p>{item.monthYear}</p>
                </div>
            </div>
            <div className="bg-main-brown-700 text-white px-5 py-3 w-[90%] mx-auto relative top-[-30px] border-2 border-white">
                <div className="flex justify-center gap-7 items-center">
                    <div className="flex items-center gap-1 text-sm">
                        <div className="">
                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-4">
                                <path strokeLinecap="round" strokeLinejoin="round" d="M15.75 6a3.75 3.75 0 1 1-7.5 0 3.75 3.75 0 0 1 7.5 0ZM4.501 20.118a7.5 7.5 0 0 1 14.998 0A17.933 17.933 0 0 1 12 21.75c-2.676 0-5.216-.584-7.499-1.632Z" />
                            </svg>
                        </div>
                        <p className="font-semibold">{item.author}</p>
                    </div>
                    <div className="flex items-center gap-1 text-sm">
                        <div className="">
                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-4">
                                <path strokeLinecap="round" strokeLinejoin="round" d="M8.625 9.75a.375.375 0 1 1-.75 0 .375.375 0 0 1 .75 0Zm0 0H8.25m4.125 0a.375.375 0 1 1-.75 0 .375.375 0 0 1 .75 0Zm0 0H12m4.125 0a.375.375 0 1 1-.75 0 .375.375 0 0 1 .75 0Zm0 0h-.375m-13.5 3.01c0 1.6 1.123 2.994 2.707 3.227 1.087.16 2.185.283 3.293.369V21l4.184-4.183a1.14 1.14 0 0 1 .778-.332 48.294 48.294 0 0 0 5.83-.498c1.585-.233 2.708-1.626 2.708-3.228V6.741c0-1.602-1.123-2.995-2.707-3.228A48.394 48.394 0 0 0 12 3c-2.392 0-4.744.175-7.043.513C3.373 3.746 2.25 5.14 2.25 6.741v6.018Z" />
                            </svg>
                        </div>
                        <p className="font-semibold">0</p>
                    </div>
                </div>
                <Link to={`/${item.link}`} className="block uppercase font-semibold text-center mt-3">{item.title}</Link>
            </div>
        </div>
    );
}

BlogItem.propTypes = {
    item: PropTypes.any,
    allBlog: PropTypes.any,
};


export default BlogItem;