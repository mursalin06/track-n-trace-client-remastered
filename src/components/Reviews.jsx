import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/effect-coverflow";
import "swiper/css/pagination";

// Import required modules
import { EffectCoverflow, Pagination } from "swiper/modules";

const reviews = [
  {
    title: "Got my iPhone back safely!",
    rating: 5,
    text: "Losing my iPhone 12 in Uttara was stressful, but thanks to this site, I got it back! The process was smooth, and I’m grateful to the kind person who returned it.",
    author: "Rahim A.",
  },
  {
    title: "My sunglasses are back!",
    rating: 5,
    text: "I thought my black sunglasses were gone forever after losing them in Mirpur. Thankfully, someone found and listed them here. The process was super easy!",
    author: "Sadia K.",
  },
  {
    title: "Relieved to find my helmet!",
    rating: 5,
    text: "I left my red motorbike helmet near Dhaka University and thought it was lost for good. Luckily, someone posted it here, and I got it back within days!",
    author: "Tarek H.",
  },
  {
    title: "Didn’t expect to see my diary again!",
    rating: 5,
    text: "Losing my red diary at Mohakhali Bus Stand was upsetting, but thanks to this site, I was reunited with it. Huge thanks to the honest person who listed it!",
    author: "Nusrat J.",
  },
];

const Reviews = () => {
  return (
    <div className="w-full max-w-4xl mx-auto mb-20 px-4 md:px-6 flex flex-col justify-center items-center">
      <h2 className="text-2xl md:text-4xl mb-6 font-semibold text-blue-500 text-center">
        User Reviews
      </h2>

      <Swiper
        effect={"coverflow"}
        grabCursor={true}
        centeredSlides={true}
        slidesPerView={1} // Default to 1 slide on small screens
        breakpoints={{
          640: { slidesPerView: 1 },
          768: { slidesPerView: 2 },
          1024: { slidesPerView: 3 },
        }}
        coverflowEffect={{
          rotate: 50,
          stretch: 0,
          depth: 100,
          modifier: 1,
          slideShadows: true,
        }}
        pagination={{ clickable: true }}
        modules={[EffectCoverflow, Pagination]}
        className="w-full"
      >
        {reviews.map((review, index) => (
          <SwiperSlide
            key={index}
            className="bg-[#e6e6e6] p-6 rounded-lg border w-full max-w-md mx-auto"
          >
            <h3 className="text-xl text-center font-semibold">
              <q>{review.title}</q>
            </h3>
            <p className="text-yellow-500 text-center">
              {"⭐".repeat(review.rating)}
            </p>
            <p className="mt-2 text-center text-gray-700">{review.text}</p>
            <p className="mt-4 text-right text-blue-600 font-semibold">
              - {review.author}
            </p>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
};

export default Reviews;
