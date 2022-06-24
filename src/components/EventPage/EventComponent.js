import React from "react";
import eventbg from "../../assets/images/events-page-background.png";
import Header from "../../layout/Header";
import {
  BackgroundImage,
  ContainerSection,
} from "../../pages/HomePageElements";
import TopBar from "../TopBar";
import DesktopTopBar from "../TopBar/desktop";
import EventSection from "./EventSection.js";

const EventComponent = ( { match } ) => {
  return (
    <>
      <ContainerSection>
        <BackgroundImage background={eventbg}>
          <div className="event-page-margin">
            <TopBar />

            <Header />
            <div className="price--box">
              <DesktopTopBar homepage={true} />
            </div>
            <p className=" pt-md-5 mt-md-4 m-0 pb-md-4 text-center font-size-42 text-white font-weight-800">
              Events
            </p>
          </div>

          <div
            style={{
              maxWidth: "1460px",
              marginLeft: "auto",
              marginRight: "auto",
            }}
          >
            <EventSection match={match} />
          </div>
        </BackgroundImage>
      </ContainerSection>
    </>
  );
};

export default EventComponent;
