import React from 'react';
import { Carousel } from 'react-responsive-carousel';
import "react-responsive-carousel/lib/styles/carousel.min.css"; 

import banner1 from "../../assets/banner/banner1.png";
import banner2 from "../../assets/banner/banner2.png";
import banner3 from "../../assets/banner/banner3.png";

const Banner = () => {
    return (
        <Carousel 
            showThumbs={false}
            showStatus={false}
            infiniteLoop
            autoPlay={true}
            interval={3000}
            className="max-w-[1200px] mt-2 mx-auto"
        >
            <div>
                <img className="w-full" src={banner1} />
            </div>

            <div>
                <img className="w-full" src={banner2} />
            </div>

            <div>
                <img className="w-full" src={banner3} />
            </div>
        </Carousel>
    );
};

export default Banner;
