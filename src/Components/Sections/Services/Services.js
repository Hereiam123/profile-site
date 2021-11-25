import React from "react";
import { Navigation } from "swiper";
import { Swiper, SwiperSlide } from "swiper/react/swiper-react";
import servicesStyles from "./Services.module.css";
import "swiper/swiper-bundle.min.css";

const Services = ({ styles }) => {
  return (
    <section id="services" className={styles.section}>
      <span
        className={`${styles.icon} btn-floating btn-large deep-purple darken-3`}
      >
        <i className="material-icons">important_devices</i>
      </span>
      <h2 className="deep-purple-text text-darken-3">Services</h2>
      <div id="Services_Carousel">
        <Swiper
          modules={[Navigation]}
          spaceBetween={50}
          slidesPerView={1}
          navigation
          breakpoints={{
            768: {
              width: 768,
              slidesPerView: 3,
            },
          }}
        >
          <SwiperSlide>
            <div className={servicesStyles["service-item"]}>
              <span className={servicesStyles.icon}>
                <i className="material-icons deep-purple darken-3">timeline</i>
              </span>
              <h6>Seo Optimization</h6>
              <span
                className={`${servicesStyles.sep} deep-purple darken-3`}
              ></span>
              <p></p>
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className={servicesStyles["service-item"]}>
              <span className={servicesStyles.icon}>
                <i className="material-icons pink darken-3">videogame_asset</i>
              </span>
              <h6>Application Design and Programming</h6>
              <span className={`${servicesStyles.sep} pink darken-3`}></span>
              <p></p>
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className={servicesStyles["service-item"]}>
              <span className={servicesStyles.icon}>
                <i className="material-icons deep-orange darken-3">
                  music_note
                </i>
              </span>
              <h6>API Implementation</h6>
              <span
                className={`${servicesStyles.sep} deep-orange darken-3`}
              ></span>
              <p></p>
            </div>
          </SwiperSlide>
        </Swiper>
      </div>
    </section>
  );
};

export default Services;
