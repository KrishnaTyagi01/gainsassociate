import React from "react";
import {
  AboutDescription,
  AboutDetails,
  AboutHeader,
  AboutTerms,
} from "./AboutStyle";
// import { Abt } from "./AboutStyle";

function About () {
  return (
    <>
      <AboutDetails className="d-flex flex-column align-items-center justify-content-center font-family-inter padding-for-about-gain mobile--about--section">
        <AboutHeader className="blue-underline color-gray font-weight-bolder font-italic font-size-42 font-size-md-32 ">
          What Is GAINS?
        </AboutHeader>
        <AboutDescription className="font-italic font-weight-700 pt-5 pb-4 font-size-20 font-size-mobile-15">
          GAINS Associates is the World’s First Decentralized VC. "With over 4 years of experience and several ultra high return deals, we are removing the barriers of entry to investing and changing the world, one deal at a time."
        </AboutDescription>
        <AboutTerms className="about-footer font-family-inter color-darkgrayish font-size-mobile-13">
          The token is designed to offer a structural process for individuals
          interested in crowd sourcing promising new projects. Retail investors
          will now have access to the same opportunities reserved for accredited
          high net worth individuals and financial entities.
        </AboutTerms>
      </AboutDetails>
    </>
  );
}

export default About;
