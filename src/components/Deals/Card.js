import React from "react";
import { Col } from "react-bootstrap";
import { CardImgForBestDeals } from "../../theme/GlobaleStyles";

export default function Card({ animation, dealName, dealTitle, link }) {
  return (
    <Col xs={6} sm={6} md={4} xl={2} className="card-custom py-3 py-md-5">
      <a href={link} rel="noreferrer" target="_blank">
        <div className="deals-img">
          <CardImgForBestDeals src={animation} className="img-fluid" alt="" />
        </div>
        <div className="deals-info color-bluecolor font-weight-900 text-center font-size-40 font-italic font-family-inter">
          {dealName}
        </div>
        <div className="deals-header color-darkgrayish font-family-inter font-weight-400 font-size-16">
          {dealTitle}
        </div>
      </a>
    </Col>
  );
}
