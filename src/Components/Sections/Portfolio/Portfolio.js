import React from "react";
import { Navigation } from "swiper";
import { Swiper, SwiperSlide } from "swiper/react/swiper-react";
import "swiper/swiper-bundle.min.css";
import portfolioStyles from "./Portfolio.module.css";
import InspaceImage from "../../../assets/images/Portfolio/portfolio_inspace.png";
import ReactRollImage from "../../../assets/images/Portfolio/react_roll.png";
import TheOperationImage from "../../../assets/images/Portfolio/the_operation.png";

const Portfolio = ({ styles }) => {
  return (
    <section id="portfolio" className={styles.section}>
      <span
        className={`${styles.icon} btn-floating btn-large light-bg darken-3`}
      >
        <i className="material-icons">important_devices</i>
      </span>
      <h2 className="deep-purple-text text-darken-3">Portfolio</h2>
      <div id="Services_Carousel">
        <Swiper
          modules={[Navigation]}
          spaceBetween={200}
          slidesPerView={1}
          navigation
          breakpoints={{
            768: {
              width: 768,
              slidesPerView: 2,
            },
          }}
        >
          <SwiperSlide>
            <a href="https://www.theoperation.org" className={portfolioStyles['portfolio-item-container']}>
              <img src={TheOperationImage}/>
            </a>
          </SwiperSlide>
          <SwiperSlide>
            <a href="https://www.inspace.info" className={portfolioStyles['portfolio-item-container']}>
                <img src={InspaceImage}/>
            </a>
          </SwiperSlide>
          <SwiperSlide>
            <a href="https://www.reactroll.com" className={portfolioStyles['portfolio-item-container']}>
                <img src={ReactRollImage}/>
            </a>
          </SwiperSlide>
        </Swiper>
      </div>
    </section>
  );
};

export default Portfolio;
