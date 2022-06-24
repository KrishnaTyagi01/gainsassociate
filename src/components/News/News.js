import React, { useEffect, useRef, useState } from "react";
import { AboutHeader, AboutDetails, AboutInfo } from "../About/AboutStyle";
import { Col, Row } from "react-bootstrap";
import Card from "./Card";
import { RecentPosts } from "./NewsStyle";
import Posts from "./Posts";
import Swiper from "react-id-swiper";
import "swiper/css/swiper.min.css";
import { Navigation, Pagination } from "swiper/js/swiper.esm";
import { medium } from "../../consts/apiLinks";

function News () {
  const swiperRef = useRef( null );

  const params = {
    modules: [Pagination, Navigation],
    slidesPerView: 1,
    spaceBetween: 30,
    loop: true,
    pagination: { el: ".swiper-pagination", clickable: true },
  };

  // eslint-disable-next-line
  const [data, setData] = useState();
  const [error, setError] = useState( false );

  useEffect( () => {
    const getData = async () => {
      try {
        let articles = await fetch( medium )
          .then( ( res ) => res.json() )
          .catch( ( err ) => setError( true ) );

        setData( [...articles.items] );
        setError( false );
      } catch ( err ) {
        setError( true );
      }
    }
    getData()
  }, [] );
  return (
    <>
      <AboutDetails className="color-gray font-family-inter pt-10">
        <AboutHeader className="color-gray font-weight-800 font-italic font-size-42 font-size-mobile-32 pb-3">
          Latest News
        </AboutHeader>
        <Row className='mx-0'>
          {!error ? (
            <>
              <Col md={6} lg={9} className="pe-md-0 pe-auto">
                <AboutInfo className="mt-18">
                  <Row className="row-cols-1 d-none d-md-flex row-cols-lg-3 px-2">
                    {data &&
                      data.map( ( card, index ) => {
                        if ( index < 3 ) {
                          return (
                            <div key={index}>
                              <Card
                                key={card.id}
                                newsdesc={card.title}
                                animation={card.thumbnail}
                                newsName={card.author}
                                newsDate={card.pubDate}
                                articleLink={card.link}
                                tag={card.categories[0]}
                              />
                            </div>
                          );
                        }
                      } )}
                  </Row>
                  <div className="d-flex d-md-none">
                    <Swiper ref={swiperRef} {...params}>
                      {data &&
                        data.map( ( card, index ) => (
                          <div key={index}>
                            <Card
                              mobile={true}
                              newsdesc={card.title}
                              animation={card.thumbnail}
                              newsName={card.author}
                              newsDate={card.pubDate}
                              articleLink={card.link}
                              tag={card.categories[0]}
                            ></Card>
                          </div>
                        ) )}
                    </Swiper>
                  </div>
                </AboutInfo>
              </Col>
              <Col md={6} lg={3} className="ps-md-0 ps-auto">
                <RecentPosts>{data && <Posts data={data} />}</RecentPosts>
              </Col>
            </>
          ) : (
            <>
              <Col md={6} lg={9}>
                <AboutInfo className="mt-18">
                  <Row className="row-cols-1 d-none d-md-flex row-cols-lg-3 px-2">
                    {["", "", ""].map( ( card, index ) => {
                      if ( index < 3 ) {
                        return <Card key={index} />;
                      }
                    } )}
                  </Row>
                  <div className="d-flex d-md-none">
                    <Swiper ref={swiperRef} {...params}>
                      {[""].map( ( card, index ) => (
                        <div key={index}>
                          <Card mobile={true}></Card>
                        </div>
                      ) )}
                    </Swiper>
                  </div>
                </AboutInfo>
              </Col>
              <Col md={6} lg={3}>
                <RecentPosts>{<Posts />}</RecentPosts>
              </Col>
            </>
          )}
        </Row>
      </AboutDetails>
    </>
  );
}

export default News;
