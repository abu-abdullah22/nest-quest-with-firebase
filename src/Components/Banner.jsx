import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
// import 'swiper/css/effect-coverflow';
import 'swiper/css/pagination';

// import required modules
import { EffectCoverflow, Pagination } from 'swiper/modules';
const Banner = () => {
    return (
        <div className='w-[90vw] mx-auto mt-5'>
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
        className="mySwiper"
      >
        <SwiperSlide>
          <img className='' src="/banner1.jpg" />
        </SwiperSlide>
        <SwiperSlide>
          <img src="/banner3.jpg" />
        </SwiperSlide>
        <SwiperSlide>
          <img src="/banner4.jpg" />
        </SwiperSlide>
        <SwiperSlide>
          <img src="/banner5.jpg" />
        </SwiperSlide>
        
      </Swiper>
        </div>
    );
};

export default Banner;