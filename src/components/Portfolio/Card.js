import React from "react";
import { Col } from "react-bootstrap";
import { CardImg } from "../../theme/GlobaleStyles";

export default function Card({ animation, link }) {
  return (
    <Col className="card-custom py-5">
      <div className="">
        <a href={link} rel="noreferrer" target="_blank">
          <CardImg
            src={animation}
            className="img-fluid"
            alt=""
            style={{
              maxHeight: "55px",
            }}
          />
        </a>
      </div>
    </Col>
  );
}
