import React from "react";
import { Navigation } from "swiper";
import { Swiper, SwiperSlide } from "swiper/react/swiper-react";
import "swiper/swiper-bundle.min.css";
import portfolioStyles from "./Portfolio.module.css";
import InspaceImage from "../../../assets/images/Portfolio/portfolio_inspace.png";
import ReactRollImage from "../../../assets/images/Portfolio/react_roll.png";
import TheOperationImage from "../../../assets/images/Portfolio/the_operation.png";
import InVueImage from "../../../assets/images/Portfolio/invue.png";

const Portfolio = ({ styles }) => {
  return (
    <section id="portfolio" className={styles.section}>
      <span className={`${styles.icon} btn-floating btn-large blue darken-3`}>
        <i className="material-icons">center_focus_strong</i>
      </span>
      <h2 className="blue-text text-darken-3">Portfolio</h2>
      <div id="Portfolio_Carousel">
        <Swiper
          modules={[Navigation]}
          spaceBetween={50}
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
            <div className={portfolioStyles["portfolio-item-container"]}>
              <a
                href="https://www.theoperation.org"
                style={{ backgroundImage: `url(${TheOperationImage})` }}
              >
                <p className={portfolioStyles["overlay-text"]}>
                  <a href="https://www.theoperation.org">Dev Operations </a>is a
                  site focused on linking together developers, and anyone
                  involved in the programming space. Built using React, Redux,
                  Node and MongoDB
                </p>
              </a>
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className={portfolioStyles["portfolio-item-container"]}>
              <a
                href="https://www.vueit.org"
                style={{ backgroundImage: `url(${InVueImage})` }}
              >
                <p className={portfolioStyles["overlay-text"]}>
                  <a href="https://www.vueit.org">InVue </a>is an Instagram
                  style posting and sharing site, for users to interact
                  socially. Built using Vue and Firebase
                </p>
              </a>
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className={portfolioStyles["portfolio-item-container"]}>
              <a
                href="https://www.inspace.info"
                style={{ backgroundImage: `url(${InspaceImage})` }}
              >
                <p className={portfolioStyles["overlay-text"]}>
                  <a href="https://www.inspace.info">Inspace </a>is a React
                  application where users can view SpaceX launch information,
                  using the SpaceX v4 API and Graphql.
                </p>
              </a>
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className={portfolioStyles["portfolio-item-container"]}>
              <a
                href="https://www.reactroll.com"
                style={{ backgroundImage: `url(${ReactRollImage})` }}
              >
                <p className={portfolioStyles["overlay-text"]}>
                  <a href="https://www.reactroll.com">React Roll </a>is a simple
                  React image website filled with randoms images pulled from the
                  Unsplash API, but with the spin of infinite scrolling.
                </p>
              </a>
            </div>
          </SwiperSlide>
        </Swiper>
      </div>
    </section>
  );
};

export default Portfolio;
