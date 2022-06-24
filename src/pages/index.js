import React, { useEffect, useState } from "react";
import TopBar from "../components/TopBar";
import {
  ContainerFull,
  Caption,
  HeroBg,
  VideoBg,
  Buttons,
  Twitter,
  BackgroundImage,
  ContainerSection,
} from "./HomePageElements";
import Deals from "../components/Deals/Deals";
import Platform from "../components/Platform/Platform";
import Community from "../components/Community/Community";
import About from "../components/About/About";
import AboutDao from "../components/About/AboutDao";
import video from "../assets/video/Video_h264_24fps_placebo_RF28.m4v";
import Header from "../layout/Header";
import Swiper from "../components/TwitterSwiper/TwitterSwiper";
import { Container, ContainerHead } from "../theme/GlobaleStyles";
import Telegram from "../assets/images/telegram-neww.png";
import aboutBg from "../assets/images/bg-deals-new.jpg";
import communityBg from "../assets/images/bg-dao.jpg";
import heroBg from "../assets/images/bgHero.png";
// import portfolioBg from "../assets/images/bg-testimonials.jpg";
import portfolioBg from "../assets/images/updated-bg-testimonials.png";
import Portfolio from "../components/Portfolio/Portfolio";
import Testimonial from "../components/Testimonials/Testimonial";
import News from "../components/News/News";
import heroBgDesktop from "../assets/images/bg-header-whale.jpg"
import DesktopTopBar from "../components/TopBar/desktop";
import { Link } from "react-router-dom";


const HomePage = () => {
  const [mobile, setMobile] = useState( false );

  useEffect( () => {
    if ( window.innerWidth < 576 ) {
      setMobile( true );
    }
  }, [] );
  return (
    <>
      <Container>
        <HeroBg>
          {!mobile ? (
            <VideoBg src={video} autoPlay loop muted type="video/mp4" poster={heroBgDesktop} />
          ) : (
            <BackgroundImage
              background={heroBg}
              heroPosition={true}
              className="background-image"
            ></BackgroundImage>
          )}
        </HeroBg>
        <TopBar />
        <Container className="px-0 mx-md-3">
          <Header />

          <ContainerHead className="text-center text-lg-start padding-above-twitter">
            <DesktopTopBar homepage />
            <Caption style={{ padding: "40px 0" }} className="mobile-main-margin" >
              <h1 className="font-weight-900">
                Early Stage Crypto Investing

              </h1>
              <h1 className="font-weight-900">
                The Biggest Return Deals
                Open for Everyone.
              </h1>
            </Caption>
            <Buttons className="btn-section">
              <a style={{ display: "flex" }} href="https://t.me/GainsChat" target="_blank">
                <button className="btn-join rounded-pill color-grayish btn-effect2">
                  Join our Network
                  <img
                    src={Telegram}
                    alt=""
                    style={{
                      height: "100%",
                      maxHeight: "26px",
                      paddingLeft: "10px",
                      paddingBottom: "4px",
                    }}
                    className="network-telegram-image-mobile"
                  />
                </button>
              </a>
              <a style={{ display: "flex" }} href="https://app.uniswap.org/#/swap?inputCurrency=ETH&outputCurrency=0xd9b312d77bc7bed9b9cecb56636300bed4fe5ce9" target="_blank">
                <button className="btn-gain rounded-pill btn-effect">
                  <span className=''> Buy $GAINS </span>
                </button>
              </a>

            </Buttons>
          </ContainerHead>
        </Container>
        <Twitter className="twitter">
          <Swiper />
        </Twitter>
        {mobile && <About />}

      </Container>
      <ContainerSection>
        <BackgroundImage
          style={{ height: "100%", minHeight: "550px" }}
          background={communityBg}
          className="bgimg"
        >
          <Container>
            {/* <About /> */}
            {!mobile && <About />}
            <AboutDao />
            <Community />
          </Container>
        </BackgroundImage>
      </ContainerSection>
      <ContainerSection className="bg--merge">
        <BackgroundImage platform={true} background={aboutBg} removeBoxShadow={true} className="shadow-none">
          <Container>
            <Platform />
            <Deals />
          </Container>
        </BackgroundImage>
      </ContainerSection>
      <ContainerSection>
        <BackgroundImage background={portfolioBg} >
          <Container>
            <Portfolio />
            <Testimonial />
            <News />
          </Container>
        </BackgroundImage>
      </ContainerSection>
    </>
  );
};

export default HomePage;
