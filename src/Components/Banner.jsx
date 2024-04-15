import { Swiper, SwiperSlide } from 'swiper/react';
import 'animate.css';
// Import Swiper styles
import 'swiper/css';
// import 'swiper/css/effect-coverflow';
import 'swiper/css/pagination';
// import required modules
import { Autoplay , EffectCoverflow, Pagination } from 'swiper/modules';
const Banner = () => {
    return (
        <div className='w-[90vw] mx-auto lg:mt-5 mt-10 lg:mt-22'>
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
        pagination={{clickable: true}}
        modules={[EffectCoverflow, Pagination, Autoplay]}
        autoplay={{delay: 4000, disableOnInteraction: false}}
        className="mySwiper rounded-lg lg:h-[90vh]"
      >
        <SwiperSlide>
          <img className='relative contrast-50' src="/banner1.jpg" />
          <div className='absolute hidden md:block  md:top-[20%] left-[10%] md:left-[30%] '>
            <p className='md:w-3/4 lg:w-1/2 lg:text-center text-[#131313] font-medium bg-[#eeeedd] p-3 mt-2 chat chat-bubble animate__animated animate__bounceInLeft'>
              <span className='md:text-5xl text-2xl font-medium '>Your First Choice of Residence</span> <br /> <br />
              Discover Your Dream Home with Ease! Welcome to our premier residential real estate website, where your perfect property awaits. Explore a curated selection of homes, apartments, townhouses, and vacation rentals tailored to your lifestyle. Find your ideal sanctuary today!</p>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <img className='relative contrast-50' src="/banner3.jpg" />
          <div className='absolute top-[20%] hidden md:block  md:top-[20%] left-[10%] md:left-[30%]'>
          <p className='md:w-3/4 lg:w-1/2 lg:text-center text-[#131313] font-medium bg-[#eeeedd] p-3 mt-2 chat chat-bubble '>
              <span className='md:text-5xl text-2xl font-medium '>Your First Choice of Residence</span> <br /> <br />
              Discover Your Dream Home with Ease! Welcome to our premier residential real estate website, where your perfect property awaits. Explore a curated selection of homes, apartments, townhouses, and vacation rentals tailored to your lifestyle. Find your ideal sanctuary today!</p>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <img className='relative contrast-50' src="/banner4.jpg" />
          <div className='absolute hidden md:block  md:top-[20%] left-[10%] md:left-[30%]'>
          <p className='md:w-3/4 lg:w-1/2 lg:text-center text-[#131313] font-medium bg-[#eeeedd] p-3 mt-2 chat chat-bubble'>
              <span className='md:text-5xl text-2xl font-medium '>Your First Choice of Residence</span> <br /> <br />
              Discover Your Dream Home with Ease! Welcome to our premier residential real estate website, where your perfect property awaits. Explore a curated selection of homes, apartments, townhouses, and vacation rentals tailored to your lifestyle. Find your ideal sanctuary today!</p>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <img className='relative contrast-50' src="/banner5.jpg" />
          <div className='absolute hidden md:block lg:top-[20%] md:top-[20%] left-[10%] md:left-[30%]'>
          <p className='md:w-3/4 lg:w-1/2 lg:text-center text-[#131313] font-medium bg-[#eeeedd] p-3 mt-2 chat chat-bubble'>
              <span className='md:text-5xl text-2xl font-medium '>Your First Choice of Residence</span> <br /> <br />
              Discover Your Dream Home with Ease! Welcome to our premier residential real estate website, where your perfect property awaits. Explore a curated selection of homes, apartments, townhouses, and vacation rentals tailored to your lifestyle. Find your ideal sanctuary today!</p>
          </div>
        </SwiperSlide>

        
        
      </Swiper>
        </div>
    );
};

export default Banner;