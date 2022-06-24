import React from "react";
import { Col } from "react-bootstrap";
import { CardImg } from "../../theme/GlobaleStyles";

export default function Card ( {
  plate,
  plateText,
  title,
  animation,
  gains,
  allocation,
} ) {
  return (
    <Col sm={12} md={6} xl={3} className="card-custom py-5">
      <div className="tier-num" style={{ margin: "0 auto", maxWidth: "100px", position: "relative" }}>
        <CardImg src={plate} className="img-fluid" alt="" />
        <div
          className="plate-title font-weight-900 font-size-16"
          style={{
            position: "absolute",
            top: "50%",
            left: "50%",
            transform: "translate(-50%,-50%)",
            whiteSpace: "pre",
            color: "#000"
          }}
        >
          {plateText}
        </div>
      </div>
      <div className="deals-header font-italic font-weight-700 font-size-30">
        <CardImg src={title} className="img-fluid" alt="" />
      </div>
      <div className="deals-img fish--img">
        <CardImg src={animation} className="img-fluid" alt="" />
      </div>
      <div className="deals-info  font-family-inter">
        <div className="gains font-size-20 font-weight-bolder">{gains}</div>
        <div className="allocation color-darkgrayish font-size-14">
          {allocation}% of allocations
        </div>
      </div>
    </Col>
  );
}
