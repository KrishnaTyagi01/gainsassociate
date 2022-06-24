import React, { useState } from "react";
import { AboutHeader, AboutDetails, AboutInfo } from "./AboutStyle";
// import gif1 from "../../assets/gifs/deals-new.webp";
// import gif2 from "../../assets/gifs/news.webp";
// import gif3 from "../../assets/gifs/insights.webp";
// import gif4 from "../../assets/gifs/events.webp";

import static1 from "../../assets/images/static-dao-deals.png";
import static2 from "../../assets/images/static-dao-news.png";
import static3 from "../../assets/images/static-dao-insight.png";
import static4 from "../../assets/images/static-dao-events.png";

import lottie1 from "../../assets/gifs/deals.json"
import LottieAnimation from '../Lottie'

import { Row } from "react-bootstrap";
import Card from "./Card";

function AboutDao () {


  const [deviceWidth, setDeviceWidtch] = useState( window.innerWidth );

  // eslint-disable-next-line
  const [data] = useState( [
    {
      title: "Deals",
      animation: deviceWidth < 765 ? static1 : 'deals',
      description:
        "Sourcing and offering the best deals in the world. Sit back and just contribute.",
    },
    {
      title: "News",
      animation: deviceWidth < 765 ? static2 : 'news',
      description:
        "Daily news in an easy-to-read bullet point fashion. Posts featuring the latests outstanding news.",
    },
    {
      title: "Insights",
      animation: deviceWidth < 765 ? static3 : 'insights',
      description:
        "Enjoy our in depth articles and watch our video interviews full of gems.",
    },
    {
      title: "Events",
      animation: deviceWidth < 765 ? static4 : 'events',
      description:
        "Meet and chat with CEO’s of top innovative crypto projects.",
    },
  ] );
  return (
    <>
      <AboutDetails className="color-gray font-family-inter mt-5 what--mobile--section">
        <AboutHeader className="color-gray font-weight-bolder font-italic font-size-42 font-size-md-32">
          What Is GAINS DAO?
        </AboutHeader>
        <AboutInfo className="mt-7">
          <Row className="mx-0" >

            {data.map( ( card, index ) => (
              <Card
                key={index}
                title={card.title}
                animation={card.animation}
                description={card.description}
                height={250}
                width={296}
                mobile={deviceWidth < 765 ? true : false}
              />
            ) )}
          </Row>
        </AboutInfo>
      </AboutDetails>
    </>
  );
}

export default AboutDao;
