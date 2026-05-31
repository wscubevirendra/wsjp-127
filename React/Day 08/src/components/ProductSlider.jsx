import React from 'react'
import ProductCard from './ProductCard'

// import Swiper styles
// Import Swiper styles
import 'swiper/css';
import 'swiper/css/navigation';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation } from 'swiper/modules';

export default function ProductSlider({ title }) {
    return (
        <div className='my-10'>
            <h2 className='font-bold text-3xl max-w-7xl mx-auto p-2'>{title}</h2>
            <Swiper
                slidesPerView={1}
                spaceBetween={10}
                breakpoints={{
                    640: {
                        slidesPerView: 2,
                        spaceBetween: 20,
                    },
                    768: {
                        slidesPerView: 4,
                        spaceBetween: 40,
                    },
                    1024: {
                        slidesPerView: 5,
                        spaceBetween: 50,
                    },
                }}
                navigation={true} modules={[Navigation]}
                className="mySwiper"
            >
                {
                    [1, 2, 3, 4, 5, 6, 7, 7, 8].map((data, index) => {
                        return (
                            <SwiperSlide>
                                <ProductCard />
                            </SwiperSlide>
                        )
                    })
                }

            </Swiper>
        </div>


    )
}
