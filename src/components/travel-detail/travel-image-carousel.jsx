import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination } from "swiper/modules";

import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";

export function TravelImageCarousel({ images }) {
  return (
    <Swiper
      modules={[Navigation, Pagination]}
      navigation={true}
      pagination={true}
    >
      {images.map((image) => {
        return (
          <SwiperSlide key={image.id}>
            <img
              src={image.url}
              style={{
                width: "100%",
              }}
            />
          </SwiperSlide>
        );
      })}
    </Swiper>
  );
}
