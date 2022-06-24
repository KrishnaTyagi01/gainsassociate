import React, { useEffect, useRef, useState } from "react";
import Swiper from "react-id-swiper";
import "swiper/css/swiper.min.css";
import { Navigation, Pagination } from "swiper/js/swiper.esm";
import { ReactComponent as ArrowLeft } from "../../assets/svgs/arrowleft.svg";
import { ReactComponent as ArrowRight } from "../../assets/svgs/arrowright.svg";
import { twitterApi } from "../../consts/apiLinks";
import TweetCard from "../TweetCard/TweetCard";
import { ButtonStyled, SwiperButtonContainer } from "./SwiperElements";

let params = {
  modules: [Pagination, Navigation],
  slidesPerView: 1,
  spaceBetween: 30,
  loop: true,
  pagination: { el: ".swiper-pagination", clickable: true },
  breakpoints: {
    1170: { slidesPerView: 4 },
    760: { slidesPerView: 3 },
    460: { slidesPerView: 2 },
  },
};

const ManipulatingComponentOutSideSwiper = () => {
  const swiperRef = useRef( null );

  // eslint-disable-next-line
  const [tweets, setTweets] = useState();
  var config = {
    method: "get",
    url: "https://api.twitter.com/2/users/999002076842782721/tweets?tweet.fields=created_at",
    headers: {
      Authorization:
        "Bearer AAAAAAAAAAAAAAAAAAAAAEjYSwEAAAAAmZBA9WBFO88scbfXA%2Floo%2Bf5H9s%3Djn05hViit1Zh0wAO1Ns7qThNQS6eULYY2PHKQYJ6RZw61fb9X4",
      Cookie:
        'guest_id=v1%3A162974498247387223; personalization_id="v1_oZxuBlsdh+JUbDYhoW9iZw=="',
    },
  };
  useEffect( () => {
    const getData = async () => {
      let data = await fetch( twitterApi )
        .then( ( response ) => response.json() )
        .then( ( result ) => result )
        .catch( ( error ) =>
          console.log( "error", error )
        );
      setTweets( [...data.data.filter( ( item ) => item.text.length > 60 )] );
    }
    getData()
  }, [] );

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
    <div
      className="twitter mobile-twitter-margin px-2"
      style={{
        width: "100%",
        maxWidth: "1370px",
        marginLeft: "auto",
        marginRight: "auto",
      }}
    >
      <>
        {tweets && (
          <Swiper ref={swiperRef} {...params}>
            {tweets &&
              tweets.map( ( data, index ) => (
                <div key={index}>
                  <TweetCard data={data} />
                </div>
              ) )}
          </Swiper>
        )}
        {!tweets && (
          <Swiper ref={swiperRef} {...params}>
            {["", "", "", ""].map( ( _, index ) => (
              <div key={index}>
                <TweetCard />
              </div>
            ) )}
          </Swiper>
        )}
        <SwiperButtonContainer className="swiper-btn">
          <ButtonStyled
            className="rounded-circle py-2 m-n2 btn--effect"
            variant="white"
            onClick={goPrev}

          >
            <ArrowLeft />
          </ButtonStyled>
          <ButtonStyled
            className="rounded-circle py-2 btn--effect"
            variant="white"
            onClick={goNext}
          >
            <ArrowRight />
          </ButtonStyled>
        </SwiperButtonContainer>
      </>
    </div>
  );
};

export default ManipulatingComponentOutSideSwiper;
