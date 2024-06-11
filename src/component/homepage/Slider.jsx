import imgs from "../../assets/imgs";
import Header from "../Header";
import AboveHeader from "./AboveHeader";
import { Link } from "react-router-dom";
import { CarouselProvider, Slider, Slide } from "pure-react-carousel";
import 'pure-react-carousel/dist/react-carousel.es.css';
import PropTypes from 'prop-types'

export default function SliderComponent(props) {

  const {changeData, setChangeData} = props

  return (
    <div className="w-[100vw] relative h-[100vh] flex justify-center">
      <AboveHeader homepage />
      <Header homepage changeData={changeData} setChangeData={setChangeData}/>
      <CarouselProvider
        naturalSlideWidth={100}
        naturalSlideHeight={100}
        totalSlides={3}
        visibleSlides={1}
        isPlaying={true}
        interval={5000}
        className='min-h-max'
      >
        <Slider className="w-screen h-screen">
          <Slide >
            <div className="w-screen h-screen bg-center bg-no-repeat bg-cover relative" style={{ backgroundImage: `url(.${imgs.slider1})` }}>
              <div className="absolute top-0 left-0 w-full h-full bg-black opacity-55"></div>
              <div className="absolute top-0 left-0 w-full h-full flex flex-col z-10 justify-center items-center">
                <p className="uppercase text-3xl sm:text-4xl font-semibold text-white">khuyến mãi lớn</p>
                <p className="text-white w-[320px] sm:w-[450px] mt-5 text-center">(Giảm tới 50% tất cả các mặt hàng trong dịp đặc biệt nhằm tri ân khách hàng đã ủng hộ các sản phẩm của chúng tôi)</p>
                <Link to={'/tat-ca-san-pham'} className=" bg-main-brown-700 mt-5 text-sm py-3 px-6 rounded text-white font-semibold transition-all duration-200 hover:shadow-xl hover:-translate-y-1">
                  Xem thêm
                </Link>
              </div>
            </div>
          </Slide>
          <Slide className="w-screen h-screen">
          <div className="w-screen h-screen bg-center bg-no-repeat bg-cover relative" style={{ backgroundImage: `url(.${imgs.slider2})` }}>
              <div className="absolute top-0 left-0 w-full h-full bg-black opacity-55"></div>
              <div className="absolute top-0 left-0 w-full h-full flex flex-col z-10 justify-center items-center">
                <p className="uppercase text-3xl sm:text-4xl font-semibold text-white">thiết kế ấn tượng, độc đáo</p>
                <p className="text-white w-[320px] sm:w-[450px] mt-5 text-center">Chúng tôi mang đến những thiết kế độc đáo cho không gian sống của bạn thêm mới mẻ</p>
                <Link to={'/tat-ca-san-pham'} className=" bg-main-brown-700 mt-5 text-sm py-3 px-6 rounded text-white font-semibold transition-all duration-200 hover:shadow-xl hover:-translate-y-1">
                  Xem thêm
                </Link>
              </div>
            </div>
          </Slide>
          <Slide className="w-screen h-screen">
          <div className="w-screen h-screen bg-center bg-no-repeat bg-cover relative" style={{ backgroundImage: `url(.${imgs.slider3})` }}>
              <div className="absolute top-0 left-0 w-full h-full bg-black opacity-55"></div>
              <div className="absolute top-0 left-0 w-full h-full flex flex-col z-10 justify-center items-center">
                <p className="uppercase text-3xl sm:text-4xl font-semibold text-white">sự kết hợp mới mẻ</p>
                <p className="text-white w-[320px] sm:w-[450px] mt-5 text-center">Với những sáng tạo không ngừng, chúng tôi luôn kết hợp với những sản phẩm đẹp mắt, phù hợp và ấn tượng</p>
                <Link to={'/tat-ca-san-pham'} className=" bg-main-brown-700 mt-5 text-sm py-3 px-6 rounded text-white font-semibold transition-all duration-200 hover:shadow-xl hover:-translate-y-1">
                  Xem thêm
                </Link>
              </div>
            </div>
          </Slide>
        </Slider>
      </CarouselProvider>
    </div>
  );
}

SliderComponent.propTypes = {
  changeData: PropTypes.any,
  setChangeData: PropTypes.any
};
