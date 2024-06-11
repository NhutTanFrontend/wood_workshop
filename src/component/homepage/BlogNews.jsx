import { CarouselProvider, Slide, Slider } from "pure-react-carousel";
import BlogItem from "../BlogItem";
import TitleSection from "../TitleSection";
import { useEffect, useState } from "react";
import { blogData } from "../../data/blogData";

function BlogNews() {

    const [visibleSlides, setVisibleSlides] = useState(2);

    useEffect(() => {
        const updateVisibleSlides = () => {
            if (window.innerWidth >= 1024) {
                setVisibleSlides(3);
            } if (window.innerWidth < 1024){
                setVisibleSlides(2)
            } if (window.innerWidth <= 640) {
                setVisibleSlides(1);
            }
        };

        window.addEventListener('resize', updateVisibleSlides);
        updateVisibleSlides();

        return () => window.removeEventListener('resize', updateVisibleSlides);
    }, []);

    return (
        <div className="container mx-auto mt-10">
            <div className="row">
                <TitleSection title="TIN TỨC NỔI BẬT" />
                <CarouselProvider
                    naturalSlideWidth={100}
                    naturalSlideHeight={100}
                    totalSlides={4}
                    visibleSlides={visibleSlides}
                    isPlaying={true}
                    interval={3000}
                >
                    <Slider className="mt-7 gap-5">
                        {blogData?.slice(0, 4).map(item => (
                            <Slide key={item.id} index={0} >
                                <BlogItem item={item} allBlog/>
                            </Slide>
                        ))}
                    </Slider>
                </CarouselProvider>
            </div>
        </div>
    );
}

export default BlogNews;