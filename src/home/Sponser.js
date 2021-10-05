import "./Sponser.css";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/swiper-bundle.css";
import SwiperCore, { Navigation, A11y, Pagination } from "swiper";
import "swiper/components/pagination/pagination.min.css";
SwiperCore.use([Navigation, A11y, Pagination]);
const Sponser = () => {
  return (
    <div className="sponser-grid">
      <Swiper
        style={{ paddingBottom: "2rem" }}
        pagination={{ clickable: true }}
        breakpoints={{
          360: {
            slidesPerView: 2,
            spaceBetween: 20,
          },
          764: {
            slidesPerView: 5,
            spaceBetween: 20,
          },
        }}
      >
        <SwiperSlide>
          <div className="sponser-img-container">
            <img
              src="https://cdn.shopify.com/s/files/1/0270/2098/4401/files/client-01_180x.png?v=1592648580"
              alt=""
            />
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="sponser-img-container">
            <img
              src="https://cdn.shopify.com/s/files/1/0270/2098/4401/files/client-02_180x.png?v=1592648580"
              alt=""
            />
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="sponser-img-container">
            <img
              src="https://cdn.shopify.com/s/files/1/0270/2098/4401/files/client-01_180x.png?v=1592648580"
              alt=""
            />
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="sponser-img-container">
            <img
              src="https://cdn.shopify.com/s/files/1/0270/2098/4401/files/client-03-fixed_180x.png?v=1592821017"
              alt=""
            />
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="sponser-img-container">
            <img
              src="https://cdn.shopify.com/s/files/1/0270/2098/4401/files/client-06-fixed_180x.png?v=1592966765"
              alt=""
            />
          </div>
        </SwiperSlide>
      </Swiper>
    </div>
  );
};

export default Sponser;
