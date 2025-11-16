import React, { use } from 'react';
import img from "../../assets/customer-top.png";
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay, EffectCoverflow, Pagination } from 'swiper/modules';
import ReviewCart from './ReviewCart';

const Reviews = ({ reviewsPromise }) => {
  const reviewsData = use(reviewsPromise);
  console.log(reviewsData);

  return (
    <div>
<div className="text-center max-w-3xl mx-auto mb-10 space-y-4">
  {/* Section Image */}
  <img src={img} alt="Customer Top" className="mx-auto w-34 h-34 object-contain" />

  {/* Heading */}
  <h2 className="text-2xl md:text-3xl font-bold text-gray-800">
    What Our Customers Are Saying
  </h2>

  {/* Paragraph */}
  <p className="text-gray-600 text-sm md:text-base">
    Enhance posture, mobility, and well-being effortlessly with Posture Pro. 
    Achieve proper alignment, reduce pain, and strengthen your body with ease!
  </p>
</div>


      <div>
        <Swiper
        loop={true}
          effect={'coverflow'}
          grabCursor={true}
          centeredSlides={true}
          slidesPerView={3}
          coverflowEffect={{
            rotate: 30,
            stretch: '50%',
            depth: 200,
            modifier: 0.75,
            slideShadows: 1,
          }}
           autoplay={{disableOnInteraction:false, delay:2000}}
          pagination={true}
          modules={[EffectCoverflow, Pagination,Autoplay]}
          className="mySwiper"
        >
          {reviewsData.map((review) => (
            <SwiperSlide key={review.id}>
              <ReviewCart review={review} />
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </div>
  );
};

export default Reviews;
