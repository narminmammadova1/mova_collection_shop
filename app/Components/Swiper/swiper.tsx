import {Swiper,SwiperSlide} from  'swiper/react'
import {Navigation} from 'swiper/modules'
import 'swiper/css'
import 'swiper/css/navigation'

export default () => {
  return (
    <Swiper
      spaceBetween={50}
      slidesPerView={5}>
      <SwiperSlide>Slide 3</SwiperSlide>
      <SwiperSlide>Slide 4</SwiperSlide>
      ...
    </Swiper>
  );
};