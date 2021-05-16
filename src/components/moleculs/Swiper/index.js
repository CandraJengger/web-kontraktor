// import Swiper core and required modules
import SwiperCore, { Navigation, Pagination, A11y, Autoplay } from 'swiper';
import { Image, Box } from '@chakra-ui/react';

import { Swiper, SwiperSlide } from 'swiper/react';

// install Swiper modules
SwiperCore.use([Navigation, Pagination, A11y, Autoplay]);

const SwiperComp = ({ style, data = [] }) => {
  return (
    <Swiper
      slidesPerView={1}
      pagination={{ clickable: true }}
      loop={true}
      autoplay={{ delay: 2500, disableOnInteraction: false }}
      style={style}
    >
      {data.map((item) => (
        <SwiperSlide key={item.id}>
          <Box h="100%">
            <Image src={item.img} w="100%" h="100%" objectFit="cover" />
          </Box>
        </SwiperSlide>
      ))}
    </Swiper>
  );
};

export default SwiperComp;
