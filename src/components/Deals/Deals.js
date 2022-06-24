import React, { useState } from "react";
import { AboutDetails, AboutHeader, AboutInfo } from "../About/AboutStyle";
import d1 from "../../assets/images/deals1.png";
import d2 from "../../assets/images/deals2.png";
import d3 from "../../assets/images/deals3.png";
import d4 from "../../assets/images/deals4.png";
import d5 from "../../assets/images/deals5.png";
import d6 from "../../assets/images/deals6.png";
import { Row } from "react-bootstrap";
import Card from "./Card";

function Deals () {
  // eslint-disable-next-line
  const [data, setData] = useState( [
    {
      animation: d1,
      dealName: "57 X",
      dealTitle: "Quant Network",
      link: "https://www.quant.network/",
    },
    {
      animation: d2,
      dealName: "42 X",
      dealTitle: "Bridge Mutual",
      link: "https://www.bridgemutual.io/",
    },
    {
      animation: d3,
      dealName: "16 X",
      dealTitle: "Mantra DAO",
      link: "https://www.mantradao.com/",
    },
    {
      animation: d4,
      dealName: "58 X",
      dealTitle: "Reef",
      link: "https://reef.finance/",
    },
    {
      animation: d5,
      dealName: "116 X",
      dealTitle: "Avalanche",
      link: "https://www.avax.network/",
    },
    {
      animation: d6,
      dealName: "22 X",
      dealTitle: "Open DAO",
      link: "https://opendao.io/",
    },
  ] );
  return (
    <>
      <AboutDetails className=" font-family-inter padding-for-best-deal">
        <AboutHeader className="color-gray font-weight-800 font-italic font-size-42 font-size-md-32 pt-4 py-md-2">
          Our Best Deals
        </AboutHeader>
        <AboutInfo>
          <Row className="mx-0">
            {data.length > 0 &&
              data.map( ( card, index ) => (
                <Card
                  key={index}
                  animation={card.animation}
                  dealName={card.dealName}
                  dealTitle={card.dealTitle}
                  link={card.link}
                />
              ) )}
          </Row>
        </AboutInfo>
      </AboutDetails>
    </>
  );
}

export default Deals;
