import React from 'react';
import 'swiper/css';
import { Swiper, SwiperSlide } from 'swiper/react';
import amazon from "../../../assets/brands/amazon.png"
import casio from "../../../assets/brands/casio.png"
import moonstar from "../../../assets/brands/moonstar.png"
import randstad from "../../../assets/brands/randstad.png"
import star from "../../../assets/brands/star.png"
import start_people from "../../../assets/brands/start_people.png"
import { Autoplay } from 'swiper/modules';


const brandsLogos =[
    amazon,
    casio,
    moonstar,
    randstad,
    star,
    start_people
]


const Brands = () => {
    return (
        
   <div>
    <h3 className='text-center font-bold text-2xl mt-5'>We've helped thousands of sales teams</h3>
       <Swiper
      className='max-w-[1200px] mx-auto mt-10 mb-20'
       slidesPerView={3}
centeredSlides={true}
grabCursor={true}
        spaceBetween={10}
        loop={true}
        modules={[Autoplay]}
        autoplay={{disableOnInteraction:false, delay:1000}}
      >
       
        {
            brandsLogos.map((logo,index)=> <SwiperSlide key={index}>
                <img src={logo} alt="" />
            </SwiperSlide>)
        }
      </Swiper>
   </div>
    );
};

export default Brands;