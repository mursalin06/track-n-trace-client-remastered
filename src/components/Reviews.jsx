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
    text: "I never thought I’d see my iPhone 12 again after losing it in Uttara. Thankfully, someone found it and listed it on this site. The process to claim it was smooth, and I really appreciate the honesty of the person who returned it!",
    author: "Rahim A.",
  },
  {
    title: "My sunglasses are back where they belong!",
    rating: 5,
    text: "I lost my favorite black sunglasses in Mirpur, and I had given up hope. But when I checked this website, I saw that someone had found them! The verification process was easy. Great service!",
    author: "Sadia K.",
  },
  {
    title: "Relieved to find my helmet!",
    rating: 5,
    text: "I left my red motorbike helmet near Dhaka University and thought I’d have to buy a new one. Luckily, someone found it and posted it here. I got it back within a few days. This website is a game-changer!",
    author: "Tarek H.",
  },
  {
    title: "Didn’t expect to see my diary again!",
    rating: 5,
    text: "Losing my red diary at Mohakhali Bus Stand was heartbreaking because it had personal notes and memories. But thanks to this site, I got it back! Huge thanks to the kind person who found it and listed it here.",
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
            className="bg-[#e6e6e6] p-6 max-h-[300px] md:shadow-2xl rounded-lg border w-full max-w-md mx-auto"
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
