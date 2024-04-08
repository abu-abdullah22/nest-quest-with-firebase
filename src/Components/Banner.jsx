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
        className="mySwiper rounded-lg lg:h-[90vh]"
      >
        <SwiperSlide>
          <img className='relative contrast-50' src="/banner1.jpg" />
          <div className='absolute top-[20%] md:top-[35%] left-[10%] md:left-[30%]'>
            <h1 className='text-xl md:text-3xl lg:text-5xl font-semibold text-[#131313]'>Your First Choice Of Residence</h1>
            <p className='md:w-3/4 lg:w-1/2 lg:text-center text-[#131313]'>Discover Your Dream Home with Ease! Welcome to our premier residential real estate website, where your perfect property awaits. Explore a curated selection of homes, apartments, townhouses, and vacation rentals tailored to your lifestyle. Find your ideal sanctuary today!</p>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <img className='relative contrast-50' src="/banner3.jpg" />
          <div className='absolute top-[20%] md:top-[35%] left-[10%] md:left-[30%]'>
            <h1 className='text-xl md:text-3xl lg:text-5xl font-semibold text-[#131313]'>Your First Choice Of Residence</h1>
            <p className='md:w-3/4 lg:w-1/2 lg:text-center text-[#131313]'>Discover Your Dream Home with Ease! Welcome to our premier residential real estate website, where your perfect property awaits. Explore a curated selection of homes, apartments, townhouses, and vacation rentals tailored to your lifestyle. Find your ideal sanctuary today!</p>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <img className='relative contrast-50' src="/banner4.jpg" />
          <div className='absolute top-[20%] md:top-[35%] left-[10%] md:left-[30%]'>
            <h1 className='text-xl md:text-3xl lg:text-5xl font-semibold text-[#131313]'>Your First Choice Of Residence</h1>
            <p className='md:w-3/4 lg:w-1/2 lg:text-center text-[#131313]'>Discover Your Dream Home with Ease! Welcome to our premier residential real estate website, where your perfect property awaits. Explore a curated selection of homes, apartments, townhouses, and vacation rentals tailored to your lifestyle. Find your ideal sanctuary today!</p>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <img className='relative contrast-50' src="/banner5.jpg" />
          <div className='absolute top-[20%] md:top-[40%] left-[10%] md:left-[30%]'>
            <h1 className='text-xl md:text-3xl lg:text-5xl font-semibold text-[#131313]'>Your First Choice Of Residence</h1>
            <p className='md:w-3/4 lg:w-1/2 lg:text-center text-[#131313]'>Discover Your Dream Home with Ease! Welcome to our premier residential real estate website, where your perfect property awaits. Explore a curated selection of homes, apartments, townhouses, and vacation rentals tailored to your lifestyle. Find your ideal sanctuary today!</p>
          </div>
        </SwiperSlide>

        
        
      </Swiper>
        </div>
    );
};

export default Banner;