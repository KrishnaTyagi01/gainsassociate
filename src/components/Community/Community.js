import React, { useState } from "react";
import {
  AboutDetails,
  AboutHeader,
  AboutInfo,
  AboutTerms,
} from "../About/AboutStyle";
import fishesPlate from "../../assets/images/fishes-plate.png";
import dolphinPlate from "../../assets/images/dolphin-plate.png";
import sharkPlate from "../../assets/images/shark-plate.png";
import whalePlate from "../../assets/images/whale-plate.png";
import fishesTitle from "../../assets/images/fishes.png";
import dolphinTitle from "../../assets/images/dolphins.png";
import sharkTitle from "../../assets/images/sharks.png";
import whaleTitle from "../../assets/images/whales.png";
import FishAnimation from "../../assets/images/Fish.png";
import DolphinAnimation from "../../assets/images/dolphin-img.png";
import SharkAnimation from "../../assets/images/Shark.png";
import WhaleAnimation from "../../assets/images/Whale.png";
// import FishAnimation from "../../assets/gifs/fish-animation.gif";
// import FishAnimation from "../../assets/fish.json";
// import DolphinAnimation from "../../assets/gifs/dolphin-animation.gif";
// import SharkAnimation from "../../assets/gifs/shark-animation.gif";
// import WhaleAnimation from "../../assets/gifs/whale-animation.gif";
import { Row } from "react-bootstrap";
import Card from "./Card";

function Community () {
  // eslint-disable-next-line
  const [data, setData] = useState( [
    {
      plate: fishesPlate,
      plateText: "TIER 4",
      title: fishesTitle,
      animation: FishAnimation,
      gains: "10,000 GAINS",
      allocation: "10",
    },
    {
      plate: dolphinPlate,
      plateText: "TIER 3",
      title: dolphinTitle,
      animation: DolphinAnimation,
      gains: "30,000 GAINS",
      allocation: "15",
    },
    {
      plate: sharkPlate,
      plateText: "TIER 2",
      title: sharkTitle,
      animation: SharkAnimation,
      gains: "100,000 GAINS",
      allocation: "25",
    },
    {
      plate: whalePlate,
      plateText: "TIER 1",
      title: whaleTitle,
      animation: WhaleAnimation,
      gains: "200,000 GAINS",
      allocation: "50",
    },
  ] );
  return (
    <>
      <AboutDetails className="color-gray community--section text-align-center font-family-inter">
        <AboutHeader className="color-white font-weight-bolder font-italic font-size-42 font-size-mobile-22 pt-5">
          Join Our Exclusive Community!
        </AboutHeader>
        <AboutTerms
          className="about-footer font-family-inter  color-darkgrayish font-size-mobile-12 mx-auto my-3 my-md-0"
          style={{ maxWidth: "922px", margin: "0 auto" }}
        >
          To become a part of the Gains Associates community, and gain access to
          our platform, you need to buy and hold the corresponding amount of
          Gains Associates tokens (GAINS) shown below
        </AboutTerms>

        <AboutInfo className="mt-7">
          <Row className="mx-0">
            {data.map( ( card, index ) => (
              <Card
                key={index}
                plate={card.plate}
                plateText={card.plateText}
                title={card.title}
                animation={card.animation}
                gains={card.gains}
                allocation={card.allocation}
              />
            ) )}
          </Row>
        </AboutInfo>
      </AboutDetails>
    </>
  );
}

export default Community;
