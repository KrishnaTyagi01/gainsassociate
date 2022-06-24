import React from "react";
import { Col } from "react-bootstrap";
import {
  ProfileImg,
  ProfileInfo,
  ProfileName,
  TestimonialCard,
} from "./TestimonialStyle";

export default function Card({ image, name, description, designation }) {
  return (
    <Col>
      <TestimonialCard
        className="mx-auto"
        style={{
          height: "100%",
          minHeight: "600px",
        }}
      >
        <ProfileImg>
          <img
            className="img-fluid"
            style={{ width: "100%", maxWidth: "298px" }}
            src={image}
            alt=""
          />
        </ProfileImg>
        <ProfileName className=" font-family-inter font-italic font-weight-900 font-size-40 font-size-md-30">
          <p>{name}</p>
        </ProfileName>
        <ProfileInfo className=" font-family-inter font-size-16 text-center">
          <p className=" font-weight-400 font-size-18 color-lightcolor">
            {description}
          </p>
          <p className=" font-weight-700 pt-2">{designation}</p>
        </ProfileInfo>
      </TestimonialCard>
    </Col>
  );
}
