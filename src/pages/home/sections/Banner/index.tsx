import banner from './banner.module.sass';
import banner1 from '../../../../assets/images/banner1.png';
import banner1Mobile from '../../../../assets/images/banner1_mobile.png';
import banner2 from '../../../../assets/images/banner2.png';
import banner2Mobile from '../../../../assets/images/banner2_mobile.png';
import { useMediaQuery } from 'react-responsive';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination, A11y, Autoplay } from 'swiper/modules';


export default function Banner() {

    const isMobile = useMediaQuery({ query: "(max-width: 768px)" });

    return (
        // <section id={banner.container} className='container'>
        //     
        // </section>

      
        <Swiper
        // install Swiper modules
        id={banner.container} 
        className='container'
        modules={[Navigation, Pagination, A11y, Autoplay]}
        spaceBetween={50}
        slidesPerView={1}
        autoplay={{
          delay: 2000,
          disableOnInteraction: false,
          reverseDirection: false
        }}
        navigation={{
          nextEl: '.swiper-button-next',
          prevEl: '.swiper-button-prev'
        }}
      >
        
      <SwiperSlide>
        <img src={isMobile ? banner1Mobile : banner1} alt="Banner BatCarva" />
      </SwiperSlide>
      <SwiperSlide>
        <img src={isMobile ? banner2Mobile : banner2} alt="Banner BatCarva" />
      </SwiperSlide>
    </Swiper>
    );
}