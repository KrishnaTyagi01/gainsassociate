import React, { useState } from "react";
import { AboutDetails, AboutHeader, AboutInfo } from "../About/AboutStyle";
import p1 from "../../assets/images/p1.png";
import p2 from "../../assets/images/p2.png";
import p3 from "../../assets/images/p3.png";
import p4 from "../../assets/images/p4.png";
import p5 from "../../assets/images/p5.png";
import p6 from "../../assets/images/p6.png";
import p7 from "../../assets/images/p7.png";
import p8 from "../../assets/images/p8.png";
import p9 from "../../assets/images/p9.png";
import p10 from "../../assets/images/p10.png";
import p11 from "../../assets/images/p11.png";
import p12 from "../../assets/images/p12.png";
import p13 from "../../assets/images/p13.png";
import p14 from "../../assets/images/p14.png";
import p15 from "../../assets/images/p15.png";

import { Row } from "react-bootstrap";
import Card from "./Card";

function Portfolio () {
  // eslint-disable-next-line
  const [data, setData] = useState( [
    {
      animation: p1,
      link: " https://nem.io/ ",
    },
    {
      animation: p2,
      link: "https://ravencoin.org/",
    },
    {
      animation: p3,
      link: "https://stp.network/",
    },
    {
      animation: p4,
      link: "https://ftx.com/#a=1389126",
    },
    {
      animation: p5,
      link: "https://www.quant.network/",
    },
    {
      animation: p6,
      link: "https://tomochain.com/",
    },
    {
      animation: p7,
      link: "https://ltonetwork.com/",
    },
    {
      animation: p8,
      link: "https://www.nuls.io/",
    },
    {
      animation: p9,
      link: "https://edenchain.io/",
    },
    {
      animation: p10,
      link: "https://ferrum.network/",
    },
    {
      animation: p11,
      link: "https://fantom.foundation/",
    },
    {
      animation: p12,
      link: "https://solve.care/",
    },
    {
      animation: p13,
      link: "https://coti.io/",
    },
    {
      animation: p14,
      link: "https://www.kava.io/",
    },
    {
      animation: p15,
      link: "https://unibright.io/",
    },
  ] );
  return (
    <>
      <AboutDetails className=" font-family-inter pt-3 pb-7">
        <AboutHeader className="color-gray font-weight-800 font-italic font-size-42 font-size-md-32 pb-md-5 mobile-portfolio-margin">
          Portfolio
        </AboutHeader>
        <AboutInfo>
          <Row className="row-cols-2 row-cols-sm-3 row-cols-lg-5 mx-0" style={{ justifyContent: "center" }}>
            {data.length > 0 &&
              data.map( ( card, index ) => (
                <Card key={index} animation={card.animation} link={card.link} />
              ) )}
          </Row>
        </AboutInfo>
      </AboutDetails>
    </>
  );
}

export default Portfolio;
