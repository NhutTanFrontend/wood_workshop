import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { CarouselProvider, Slider, Slide } from "pure-react-carousel";
import { blogData } from '../../data/blogData';
import BlogItem from '../BlogItem';
import PropTypes from 'prop-types'

function CategoryBlogItem(props) {

    const {category, link} = props

    const [visibleSlides, setVisibleSlides] = useState(2);
    const [heightSlide, setHeightSlide] = useState(75)

    useEffect(() => {
        const updateVisibleSlides = () => {
            if (window.innerWidth <= 720) {
                setVisibleSlides(1);
            }
            if (window.innerWidth <= 1280) {
                setHeightSlide(95)
            } 
            if (window.innerWidth <= 720) {
                setHeightSlide(65)
            }
            if (window.innerWidth <= 500) {
                setHeightSlide(77)
            }
            if (window.innerWidth <= 455) {
                setHeightSlide(85)
            }
            if (window.innerWidth <= 420) {
                setHeightSlide(95)
            }
            if (window.innerWidth <= 380) {
                setHeightSlide(105)
            }
        };

        window.addEventListener('resize', updateVisibleSlides);
        updateVisibleSlides();

        return () => window.removeEventListener('resize', updateVisibleSlides);
    }, []);

    return (
        <div>
            <div className="flex items-center justify-between gap-5">
                <div className="uppercase font-semibold text-xl relative after:content-[''] after:bg-main-brown-700 after:w-28 after:h-1 after:absolute after:bottom-[-8px] after:left-0 px-4 after:ml-4">{category}</div>
                <hr className="flex-grow max-w-full h-0.5 block bg-gray-200" />
                <Link to={`${link}`} className="flex items-center justify-end text-end relative after:bg-main-brown-700 after:w-0 hover:after:w-28 after:h-0.5 after:absolute after:bottom-[-8px] after:left-0 after:transition-all after:duration-500 hover:text-main-brown-700 transition-all duration-500">
                    Xem tất cả
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-4">
                        <path strokeLinecap="round" strokeLinejoin="round" d="m8.25 4.5 7.5 7.5-7.5 7.5" />
                    </svg>
                </Link>
            </div>
            <CarouselProvider
                naturalSlideWidth={100}
                naturalSlideHeight={heightSlide}
                totalSlides={4}
                visibleSlides={visibleSlides}
                isPlaying={true}
                interval={5000}
                className='min-h-max'
            >
                <Slider className="mt-7 min-h-max">
                    {blogData?.slice(0, 4).map(item => (
                        <Slide key={item.id} index={0} >
                            <BlogItem item={item} allBlog/>
                        </Slide>
                    ))}
                </Slider>
            </CarouselProvider>
        </div>
    );
}

CategoryBlogItem.propTypes = {
    category: PropTypes.string,
    link: PropTypes.string,
};

export default CategoryBlogItem;