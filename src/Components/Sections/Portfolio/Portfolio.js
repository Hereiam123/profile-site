import React from "react";
import { Navigation } from "swiper";
import { Swiper, SwiperSlide } from "swiper/react/swiper-react";
import "swiper/swiper-bundle.min.css";
import InspaceImage from "../../../assets/images/Portfolio/portfolio_inspace.png";
import ReactRollImage from "../../../assets/images/Portfolio/react_roll.png";
import TheOperationImage from "../../../assets/images/Portfolio/the_operation.png";

const Portfolio = ({ styles }) => {
  return (
    <section id="portfolio" className={styles.section}>
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
            <div>
              <img src={TheOperationImage}/>
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div>
                <img src={InspaceImage}/>
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div>
                <img src={ReactRollImage}/>
            </div>
          </SwiperSlide>
        </Swiper>
      </div>
    </section>
  );
};

export default Portfolio;
