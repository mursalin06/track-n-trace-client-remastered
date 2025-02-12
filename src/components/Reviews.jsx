import React from "react";
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/effect-coverflow';
import 'swiper/css/pagination';

// import './styles.css';

// import required modules
import { EffectCoverflow, Pagination } from 'swiper/modules';
const reviews = [
    {
        title: "Got my iPhone back safely!",
        rating: 5,
        text: "I never thought I’d see my iPhone 12 again after losing it in Uttara. Thankfully, someone found it and listed it on this site. The process to claim it was smooth, and I really appreciate the honesty of the person who returned it!",
        author: "Rahim A."
    },
    {
        title: "My sunglasses are back where they belong!",
        rating: 5,
        text: "I lost my favorite black sunglasses in Mirpur, and I had given up hope. But when I checked this website, I saw that someone had found them! The verification process was easy, and I picked them up the next day. Great service!",
        author: "Sadia K."
    },
    {
        title: "Relieved to find my helmet!",
        rating: 5,
        text: "I left my red motorbike helmet near Dhaka University and thought I’d have to buy a new one. Luckily, someone found it and posted it here. I got it back within a few days. This website is a game-changer!",
        author: "Tarek H."
    },
    {
        title: "Didn’t expect to see my diary again!",
        rating: 5,
        text: "Losing my red diary at Mohakhali Bus Stand was heartbreaking because it had personal notes and memories. But thanks to this site, I got it back! Huge thanks to the kind person who found it and listed it here.",
        author: "Nusrat J."
    }
];

const Reviews = () => {
    return (
        <div className="w-2/5 mb-20 mx-auto md:min-h-[400px] flex flex-col justify-center items-center">
            <div>
            <h2 className="text-2xl md:text-4xl mb-4 font-semibold text-blue-500 text-center ">User Reviews</h2>
            </div>
            <Swiper
                effect={'coverflow'}
                grabCursor={true}
                centeredSlides={true}
                slidesPerView={'auto'}
                coverflowEffect={{
                    rotate: 50,
                    stretch: 0,
                    depth: 100,
                    modifier: 1,
                    slideShadows: true,
                }}
                pagination={true}
                modules={[EffectCoverflow, Pagination]}
                className="mySwiper "
            >
                
                    <div className="grid grid-cols-1 md:grid-cols-2  lg:grid-cols-3 gap-6">
                        {reviews.map((review, index) => (
                            <SwiperSlide key={index} className="bg-[#e6e6e6] p-4 py-10 w-2/3 shadow-2xl rounded-lg border">
                                <h3 className="text-xl text-center font-semibold"><q>{review.title}</q></h3>
                                <p className="text-yellow-500 text-center">{"⭐".repeat(review.rating)}</p>
                                <p className="mt-2 text-center text-gray-700">{review.text}</p>
                                <p className="mt-4 text-right text-blue-600 font-semibold">- {review.author}</p>
                            </SwiperSlide>
                        ))}
                    </div>
            </Swiper>
        </div>
    );
};

export default Reviews;
