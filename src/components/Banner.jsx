import { Swiper, SwiperSlide } from "swiper/react";
// import 'swiper/swiper-bundle.min.css';
import 'swiper/css';


const Banner = () => {
    return (
        <div className="">
            {/* SWIPER */}
            <div>
                <Swiper
                    spaceBetween={50}
                    slidesPerView={1}
                    loop={true}
                    autoplay={{ delay: 2000, disableOnInteraction: false }}
                    pagination={{ clickable: true }}
                    navigation={true}
                >

                    {/* */}

                    <SwiperSlide className="flex items-center justify-center bg-gray-300">
                        <div
                            className="hero hero-custom"
                            style={{
                                // minHeight: "calc(100vh - 64px)",
                                backgroundImage: "url(https://i.ibb.co.com/hc0bNJj/lost1.jpg)",
                            }}>
                            <div className="hero-overlay bg-opacity-60"></div>
                            <div className="hero-content text-neutral-content text-center flex justify-start items-end absolute bottom-0 left-0 mb-6 ml-6">
                                <div className="max-w-lg bg-white/10 backdrop-blur-md p-6 shadow-lg ">
                                    <h1 className="mb-5 text-2xl md:text-4xl font-bold">Welcome to Track n Trace</h1>
                                    <p className="mb-5 text-lg">
                                        Helping you find what you've lost!
                                    </p>
                                </div>
                            </div>
                        </div>
                    </SwiperSlide>
                    <SwiperSlide className="flex items-center justify-center bg-gray-300">
                        <div
                            className="hero hero-custom"
                            style={{
                                // minHeight: "calc(100vh - 64px)",
                                backgroundImage: "url(https://i.ibb.co.com/GHCFdnM/lost2.jpg)",
                            }}>
                            <div className="hero-overlay bg-opacity-60"></div>
                            <div className="hero-content text-neutral-content text-center flex justify-start items-end absolute bottom-0 left-0 mb-6 ml-6">
                                <div className="max-w-lg bg-white/10 backdrop-blur-md p-6 shadow-lg">
                                    <h1 className="mb-5 text-2xl md:text-4xl font-bold">Tracking Your Lost Pet – We're on the Case!</h1>
                                    <p className="mb-5 text-lg">
                                        Lost a pet ? Let us help you reconnect!
                                    </p>
                                </div>
                            </div>
                        </div>
                    </SwiperSlide>
                    <SwiperSlide className="flex items-center justify-center bg-gray-300">
                        <div
                            className="hero hero-custom"
                            style={{
                                // minHeight: "calc(100vh - 64px)",
                                backgroundImage: "url(https://i.ibb.co.com/nDD75BT/puzzle.jpg)",
                            }}>
                            <div className="hero-overlay bg-opacity-60"></div>
                            <div className="hero-content text-neutral-content text-center flex justify-start items-end absolute bottom-0 left-0 mb-6 ml-6">
                                <div className="max-w-lg bg-white/10 backdrop-blur-md p-6 shadow-lg">
                                    <h1 className="mb-5 text-2xl md:text-4xl font-bold">You've lost something ?</h1>
                                    <p className="mb-5 text-lg">
                                        Let's find your lost puzzle together !
                                    </p>
                                </div>
                            </div>
                        </div>
                    </SwiperSlide>

                </Swiper>
            </div>
        </div>
    );
};

export default Banner;