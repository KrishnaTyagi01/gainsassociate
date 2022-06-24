import React, { useRef } from "react";
import { AboutDetails, AboutHeader } from "../About/AboutStyle";
import { PlatformInfo, StyledButton } from "./PlatformStyle";
import Swiper from "react-id-swiper";
import "swiper/css/swiper.min.css";
import { Navigation, Pagination } from "swiper/js/swiper.esm";
import Portfolio from "../../assets/images/portfolio-cutout.png";
import Insights from "../../assets/images/insight-cutout.png";
import Deals from "../../assets/images/deals-cutout.png";
import "../../assets/css/platform.swiper.css";
import { ReactComponent as ArrowUp } from "../../assets/svgs/arrow-up.svg";
import { ReactComponent as ArrowDown } from "../../assets/svgs/arrow-down.svg";
import { Link } from "react-router-dom";
import { ButtonContainer } from "../../layout/Header/HeaderElements";
import { ButtonStyled } from "../Button";

function Platform () {
  const swiperRef = useRef( null );
  const mobileSwiperRef = useRef( null );

  const slides = ["Portfolio", "Insights", "Deals"];

  const params = {
    modules: [Pagination, Navigation],
    direction: "vertical",
    slidesPerView: 1,
    centeredSlides: true,
    loop: true,
    effect: 'fade',
    fadeEffect: {
      crossFade: true
    },
    pagination: {
      el: ".swiper-pagination",
      clickable: true,
      renderBullet: ( index, className ) => {
        return (
          "<span class=" +
          '"my-3 ' +
          className +
          '">' +
          slides[index] +
          "</span>"
        );
      },
    },
  };

  const mobileParams = {
    modules: [Pagination, Navigation],
    slidesPerView: 1,
    loop: true,

    pagination: {
      el: ".swiper-pagination",
      clickable: true,
    },
  };

  const goNext = () => {
    if ( swiperRef.current && swiperRef.current.swiper ) {
      swiperRef.current.swiper.slideNext();
    }
  };

  const goPrev = () => {
    if ( swiperRef.current && swiperRef.current.swiper ) {
      swiperRef.current.swiper.slidePrev();
    }
  };

  return (
    <>
      <AboutDetails containerId="platform" className=" font-family-inter pt-10">
        <AboutHeader className="color-gray font-weight-bolder font-italic font-size-42 font-size-md-32 pb-5 pb-md-0">
          Meet The Platform
        </AboutHeader>
        <PlatformInfo className="position-relative desktop-swiper">
          <Swiper ref={swiperRef} {...params}>
            <div>
              <img className="img-fluid" src={Portfolio} alt="Postfolio" />
            </div>
            <div>
              <img className="img-fluid" src={Insights} alt="Insights" />
            </div>
            <div>
              <img className="img-fluid" src={Deals} alt="Deals" />
            </div>
          </Swiper>
          <StyledButton
            className="position-absolute btn--effect"
            top="120px"
            onClick={goPrev}
            variant="white"
          >
            <ArrowUp />
          </StyledButton>
          <StyledButton
            className="position-absolute btn--effect"
            top="370px"
            onClick={goNext}
            variant="white"
          >
            <ArrowDown />
          </StyledButton>
        </PlatformInfo>
        <PlatformInfo className="mobile-swiper">
          <Swiper ref={mobileSwiperRef} {...mobileParams}>
            <div>
              <p className="font-family-inter font-weight-bolder font-size-26 ">
                Portfolio
              </p>
              <img className="img-fluid" src={Portfolio} alt="Postfolio" />
            </div>
            <div>
              <p className="font-family-inter font-weight-bolder font-size-26 ">
                Insights
              </p>
              <img className="img-fluid" src={Insights} alt="Insights" />
            </div>
            <div>
              <p className="font-family-inter font-weight-bolder font-size-26">
                Deals
              </p>
              <img className="img-fluid" src={Deals} alt="Deals" />
            </div>
          </Swiper>
        </PlatformInfo>
        <ButtonContainer style={{ display: "flex", justifyContent: "center" }} className="pb-2" >
          <ButtonStyled primary={true} active={true} style={{ fontSize: "16px", padding: "0.75rem 1rem" }}>
            Join Now
          </ButtonStyled>
        </ButtonContainer>
      </AboutDetails>
    </>
  );
}

export default Platform;
