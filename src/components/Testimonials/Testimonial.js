import React, { useRef, useState } from "react";
import { AboutDetails, AboutHeader, AboutInfo } from "../About/AboutStyle";
import testimonial1 from "../../assets/images/profile1.png";
import testimonial2 from "../../assets/images/profile2.png";
import testimonial3 from "../../assets/images/profile3.png";
import Card from "./Card";
import { Row } from "react-bootstrap";
import Swiper from "react-id-swiper";
import "../../assets/css/testimonial.swiper.css";
import { ReactComponent as ArrowLeft } from "../../assets/svgs/arrowleft.svg";
import { ReactComponent as ArrowRight } from "../../assets/svgs/arrowright.svg";
import { StyledButton } from "./TestimonialStyle";

function Testimonials () {
  const swiperRef = useRef( null );
  const params = {
    slidesPerView: 1,
    spaceBetween: 30,
    centeredSlides: true,
    grabCursor: true,
    loop: true,
    pagination: {
      el: ".swiper-pagination",
      clickable: true,
    },
    breakpoints: {
      764: {
        slidesPerView: 3,
      },
    },
  };

  const [testimonialCardData] = useState( [
    {
      image: testimonial1,
      name: "Denko Mancheski",
      description:
        "“GAINS knows the crypto space on a deep level and have all the connections to succeed immensely“",
      designation: "Co-Founder and CEO at REEF",
    },
    {
      image: testimonial2,
      name: "Brian Kerr",
      description:
        '"The GAINS group brings top tier people, projects, and information into one place"',
      designation: "Co-Founder and CEO at Kava",
    },
    {
      image: testimonial3,
      name: "Rick Schmitz",
      description:
        "“GAINS have some of the most  professional and resourceful people I've worked with“",
      designation: "Co-Founder and CEO at LTO",
    },
  ] );

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
      <AboutDetails>
        <AboutHeader className="color-gray font-weight-800 font-size-42 font-italic font-size-md-32 py-5">
          Testimonials
        </AboutHeader>
        <AboutInfo className=" pb-md-5">
          <Row className="testimonial mx-0">
            <Swiper ref={swiperRef} {...params}>
              {testimonialCardData.map( ( data, index ) => (
                <div key={index}>
                  <Card
                    image={data.image}
                    name={data.name}
                    description={data.description}
                    designation={data.designation}
                  />
                </div>
              ) )}
            </Swiper>
          </Row>
          <div className="d-none d-md-block">
            <StyledButton onClick={goPrev} variant="white" className="btn--effect">
              <ArrowLeft />
            </StyledButton>
            <StyledButton onClick={goNext} variant="white" className="btn--effect">
              <ArrowRight />
            </StyledButton>
          </div>
        </AboutInfo>
      </AboutDetails>
    </>
  );
}

export default Testimonials;
