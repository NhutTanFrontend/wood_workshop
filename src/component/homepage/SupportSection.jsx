function SupportSection() {
    return (
        <div className="container mx-auto mt-10 border-2">
            <div className="row flex flex-col sm:flex-row justify-center gap-5 px-5 py-5 shadow-2xl items-center">
                <div className="">
                    <div className="flex justify-center">
                        <svg className="w-10 h-10" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512"><path fill="#c89551" d="M48.5 224H40c-13.3 0-24-10.7-24-24V72c0-9.7 5.8-18.5 14.8-22.2s19.3-1.7 26.2 5.2L98.6 96.6c87.6-86.5 228.7-86.2 315.8 1c87.5 87.5 87.5 229.3 0 316.8s-229.3 87.5-316.8 0c-12.5-12.5-12.5-32.8 0-45.3s32.8-12.5 45.3 0c62.5 62.5 163.8 62.5 226.3 0s62.5-163.8 0-226.3c-62.2-62.2-162.7-62.5-225.3-1L185 183c6.9 6.9 8.9 17.2 5.2 26.2s-12.5 14.8-22.2 14.8H48.5z" /></svg>
                    </div>
                    <h3 className="text-center text-lg font-semibold mt-2">Phương thức đổi trả</h3>
                    <hr className="w-[70px] h-0.5 bg-main-brown-700 mx-auto mt-2"/>
                    <p className="text-center text-sm mt-2">Cam kết đổi trả trong vòng 30 ngày đối với các sản phẩm không đúng yêu cầu của khách hàng</p>
                </div>
                <hr className="hidden sm:block h-[120px] w-0.5 bg-main-brown-700"/>
                <div className="">
                    <div className="flex justify-center">
                        <svg className="w-10 h-10" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 576 512"><path fill="#c89551" d="M482.3 192c34.2 0 93.7 29 93.7 64c0 36-59.5 64-93.7 64l-116.6 0L265.2 495.9c-5.7 10-16.3 16.1-27.8 16.1l-56.2 0c-10.6 0-18.3-10.2-15.4-20.4l49-171.6L112 320 68.8 377.6c-3 4-7.8 6.4-12.8 6.4l-42 0c-7.8 0-14-6.3-14-14c0-1.3 .2-2.6 .5-3.9L32 256 .5 145.9c-.4-1.3-.5-2.6-.5-3.9c0-7.8 6.3-14 14-14l42 0c5 0 9.8 2.4 12.8 6.4L112 192l102.9 0-49-171.6C162.9 10.2 170.6 0 181.2 0l56.2 0c11.5 0 22.1 6.2 27.8 16.1L365.7 192l116.6 0z" /></svg>
                    </div>
                    <h3 className="text-center text-lg font-semibold mt-2">Giao hàng trên toàn quốc</h3>
                    <hr className="w-[70px] h-0.5 bg-main-brown-700 mx-auto mt-2"/>
                    <div className="text-center text-sm mt-2">Chúng tôi nhận giao hàng trên toàn quốc đối với các sản phẩm tại cửa hàng</div>
                </div>
                <hr className="hidden sm:block h-[120px] w-0.5 bg-main-brown-700"/>
                <div className="">
                    <div className="flex justify-center">
                        <svg className="w-10 h-10" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512"><path fill="#c89551" d="M256 48C141.1 48 48 141.1 48 256v40c0 13.3-10.7 24-24 24s-24-10.7-24-24V256C0 114.6 114.6 0 256 0S512 114.6 512 256V400.1c0 48.6-39.4 88-88.1 88L313.6 488c-8.3 14.3-23.8 24-41.6 24H240c-26.5 0-48-21.5-48-48s21.5-48 48-48h32c17.8 0 33.3 9.7 41.6 24l110.4 .1c22.1 0 40-17.9 40-40V256c0-114.9-93.1-208-208-208zM144 208h16c17.7 0 32 14.3 32 32V352c0 17.7-14.3 32-32 32H144c-35.3 0-64-28.7-64-64V272c0-35.3 28.7-64 64-64zm224 0c35.3 0 64 28.7 64 64v48c0 35.3-28.7 64-64 64H352c-17.7 0-32-14.3-32-32V240c0-17.7 14.3-32 32-32h16z" /></svg>
                    </div>
                    <h3 className="text-center text-lg font-semibold mt-2">Hỗ trợ trực tuyến 24/7</h3>
                    <hr className="w-[70px] h-0.5 bg-main-brown-700 mx-auto mt-2"/>
                    <div className="text-center text-sm mt-2">Luôn sẵn sàng hỗ trợ 24/7. Mọi thắc mắc vui lòng liên hệ tới số hotline : 0123456789</div>
                </div>
            </div>
        </div>
    );
}

export default SupportSection;