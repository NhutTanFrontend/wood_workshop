import imgs from '../../assets/imgs';
import { CarouselProvider, Slider, Slide } from 'pure-react-carousel'
import 'pure-react-carousel/dist/react-carousel.es.css'
import { productData } from '../../data/productData';
import { useEffect, useState } from 'react';
import TitleSection from '../TitleSection';
import CountDownpromotion from './CountDownpromotion';
import { Link } from 'react-router-dom';

function Promotion() {

    const [visibleSlides, setVisibleSlides] = useState(2);

    useEffect(() => {
        const updateVisibleSlides = () => {
            if (window.innerWidth <= 768) {
                setVisibleSlides(1);
            } else {
                setVisibleSlides(2);
            }
        };

        window.addEventListener('resize', updateVisibleSlides);
        updateVisibleSlides(); 

        return () => window.removeEventListener('resize', updateVisibleSlides);
    }, []);

    return (
        <div className="container mx-auto mt-10">
            <div className="row">
                <TitleSection title="Sản phẩm khuyến mãi"/>
                <div className="flex lg:flex-row flex-col mt-5 bg-cover bg-no-repeat relative bg-center items-center w-full overflow-y-hidden min-h-[450px]" style={{ backgroundImage: `url(.${imgs.chude3})` }}>
                    <div className="basis-3/3 w-full lg:basis-2/3 py-12 px-5">
                        <CarouselProvider
                            naturalSlideWidth={100}
                            naturalSlideHeight={100}
                            totalSlides={5}
                            visibleSlides={visibleSlides}
                            isPlaying={true}
                            interval={3000}
                        >
                            <Slider>
                                {productData?.slice(0,5).map(item => (
                                    <Slide key={item.id} index={0} >
                                        <div className="w-[85%] flex flex-col bg-white p-4">
                                            <Link to={`/san-pham/${item.id}`} className="relative">
                                                <img loading='lazy' src={item.image} alt="" className='w-[100%] object-contain' />
                                                {item.priceSale && <p className='absolute top-0 left-0 bg-main-brown-700 text-white text-sm py-1 px-2'>-{(100 - (item.price / item.priceSale * 100)).toFixed(0)}%</p>}
                                            </Link>
                                            <Link to={`/san-pham/${item.id}`} className="text-center mt-3 font-semibold">{item.name}</Link>
                                            <div className="flex justify-center gap-2 items-center">
                                                <p className="text-center text-main-brown-700 font-semibold">{item.price.toLocaleString("en-US")}đ</p>
                                                {item.priceSale && <p className='text-sm line-through font-medium italic'>{item.priceSale.toLocaleString("en-US")}đ</p>}
                                            </div>
                                        </div>
                                    </Slide>
                                ))}
                            </Slider>
                        </CarouselProvider>
                    </div>
                    <CountDownpromotion />
                </div>
            </div>
        </div>
    );
}

export default Promotion;