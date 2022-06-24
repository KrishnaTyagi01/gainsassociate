import React from "react";
import { Link } from "react-router-dom";
import { Button, Col, FormControl, Row } from "react-bootstrap";
import footerimg from "../../assets/images/logo2.svg";
import { ReactComponent as Discord } from "../../assets/svgs/discord.svg";
import { ReactComponent as Telegram } from "../../assets/svgs/telegram-white.svg";
import { ReactComponent as Twitter } from "../../assets/svgs/twitter-white.svg";
import { ReactComponent as Facebook } from "../../assets/svgs/facebook.svg";
import { ReactComponent as Instagram } from "../../assets/svgs/instagram.svg";
import { ReactComponent as Linkedin } from "../../assets/svgs/linkedin.svg";
import { ReactComponent as Medium } from "../../assets/svgs/medium.svg";
import { ReactComponent as Tiktok } from "../../assets/svgs/tiktok.svg";
import { ReactComponent as Youtube } from "../../assets/svgs/youtube.svg";
import { ReactComponent as ArrowRight } from "../../assets/svgs/arrow-right-search.svg";

const scrollToTop = () => {
  window.scrollTo( {
    top: 0,
    behavior: "smooth"
  } );
}

function Footer () {
  return (
    <Row className="justify-content-md-center row-cols-1 rows-cols-lg-3 g-0 px-4 mt-10 mx-md-5 footer-logo-margin footer">
      <Col md={3}>
        <Link to="/home" onClick={scrollToTop}>
          <img src={footerimg} alt="Gains" className="footer--logo" />
        </Link>
        <p>GAINS Associates OÜ</p>
        <p>Registry code 16298071</p>
        <p>Estonia, Tallinn , Keemia tn, 10616</p>
      </Col>

      <Col md={6} className="">
        <Row className="g-0">
          <Col>
            <h4 className="company-header font-family-inter font-weight-600 font-italic font-size-28 font-size-mobile-26 pb-4 col-heading">
              COMPANY
            </h4>
            <div className="company-desc">
              <p className="pb-1 font-family-inter color-solidgray">
                <a
                  className="color-solidgray font-size-14 "
                  href="#gains"
                  rel="noreferrer"
                >
                  Careers
                </a>
              </p>
              <p className="pb-1 font-family-inter color-solidgray">
                <a
                  className="color-solidgray font-size-14 "
                  href="#gains"
                  rel="noreferrer"
                >
                  About
                </a>
              </p>
              <p className="pb-1 font-family-inter color-solidgray">
                <a
                  className="color-solidgray font-size-14 "
                  href="#gains"
                  rel="noreferrer"
                >
                  Private Sales
                </a>
              </p>
              <p className="pb-1 font-family-inter color-solidgray">
                <a
                  className="color-solidgray font-size-14 "
                  href="#gains"
                  rel="noreferrer"
                >
                  Submit Your Project
                </a>
              </p>
            </div>
          </Col>
          <Col className="ps-5">
            <h4 className="company-header font-family-inter font-weight-600 font-italic font-size-28 font-size-mobile-26 pb-4 col-heading">
              HELP
            </h4>
            <div className="company-desc">
              <p className="pb-1 font-family-inter color-solidgray">
                <a
                  className="color-solidgray font-size-14 "
                  href="#gains"
                  rel="noreferrer"
                >
                  Support
                </a>
              </p>
              <p className="pb-1 font-family-inter color-solidgray">
                <a
                  className="color-solidgray font-size-14 "
                  href="#gains"
                  rel="noreferrer"
                >
                  Privacy Policy
                </a>
              </p>
              <p className="pb-1 font-family-inter color-solidgray">
                <a
                  className="color-solidgray font-size-14 "
                  href="#gains"
                  rel="noreferrer"
                >
                  Cookie Policy
                </a>
              </p>
              <p className="pb-1 font-family-inter color-solidgray">
                <a
                  className="color-solidgray font-size-14 "
                  href="#gains"
                  rel="noreferrer"
                >
                  Lightpaper
                </a>
              </p>
            </div>
          </Col>
        </Row>
      </Col>
      <Col md={3} className="">
        <Col className="company-header font-family-inter font-weight-600 font-italic font-size-28 font-size-mobile-26 pb-2 mt-4 mt-md-0 pb-md-4 text-center text-md-start">
          <h4 className="col-heading">SUBSCRIBE</h4>
        </Col>
        <div
          style={{ width: "100%", maxWidth: "276px" }}
          className="position-relative mx-md-0 mx-auto"
        >
          <FormControl
            className="rounded-pill border-0 input-tag"
            style={{
              backgroundColor: "rgba(77, 146, 213, 0.3)",
              color: "white",
            }}
            type="text"
          />
          <Button
            variant="white"
            className="position-absolute cursor-pointer rounded-circle box-shadow-none"
            style={{ top: "-2px", right: "0" }}
          >
            <ArrowRight />
          </Button>
        </div>
        <Col className="social-media-icons my-4 d-flex d-sm-block align-items-center justify-content-start">
          <a className="mx-2 ms-md-0" href="https://t.me/GainsChat" target="_blank" rel="noreferrer">
            <Telegram />
          </a>

          <a className="mx-2" href="https://discordapp.com/invite/WebCxR3" target="_blank" rel="noreferrer">
            <Discord />
          </a>

          <a className="mx-2" href="https://www.facebook.com/gainsassociates" target="_blank" rel="noreferrer">
            <Facebook />
          </a>

          <a className="mx-2" href="https://www.instagram.com/gainsassociates" target="_blank" rel="noreferrer">
            <Instagram />
          </a>

          <a className="mx-2" href="https://twitter.com/GainsAssociates" target="_blank" rel="noreferrer">
            <Twitter />
          </a>

          <a className="mx-2" href="https://www.linkedin.com/company/gains-associates" target="_blank" rel="noreferrer">
            <Linkedin />
          </a>

          <a className="mx-2" href="https://medium.com/gains-associates" target="_blank" rel="noreferrer">
            <Medium />
          </a>

          <a className="mx-2" href="https://www.instagram.com/gainsassociates" target="_blank" rel="noreferrer">
            <Tiktok />
          </a>

          <a className="mx-2" href="https://www.youtube.com/channel/UCSB8LM45UaC--hW_0srogXw" target="_blank" rel="noreferrer">
            <Youtube />
          </a>
        </Col>
      </Col>
    </Row>
  );
}

export default Footer;
