import { google, ics } from "calendar-link";
import React, { useContext } from "react";
import AlarmIcon from "../../assets/svgs/alarm-icon.svg";
import CalendarIcon from "../../assets/svgs/calendar-icon.svg";
import { ReactComponent as Facebook } from "../../assets/svgs/facebook.svg";
import { ReactComponent as Linkedin } from "../../assets/svgs/linkedin.svg";
import LocationIcon from "../../assets/svgs/location-icon.svg";
import MedalIcon from "../../assets/svgs/medal-icon.svg";
import { ReactComponent as Reddit } from "../../assets/svgs/reddit.svg";
import { ReactComponent as Twitter } from "../../assets/svgs/twitter-white.svg";
import { GlobalContext } from "../../context/reducers/provider";
import {
  getFbUrl,
  getLinkedinUrl,
  getRedditUrl,
  getTwitterUrl,
} from "./share-urls";
const EventButton = ({ Icon, color, text, link }) => {
  return (
    <a href={link} target="_blank">
      <button
        className="event-social-icon btn me-2 me-md-3 py-2"
        style={{ background: color }}
      >
        <Icon /> {text}
      </button>
    </a>
  );
};

const EventCard = ({ match }) => {
  const state = useContext(GlobalContext);
  const curEventData = state["eventState"].eventInfo;

  const startTime = curEventData.start_time;
  const endTime = curEventData.end_time;
  const companyName = curEventData.company_name[0].text;

  const projectTeaseData = [];
  const eventTitle = curEventData.title[0].text;

  const shareUrlOptions = {
    text: eventTitle,
    url: `/events/${curEventData._meta.uid}`,
  };
  const event = {
    title: eventTitle,
    start: startTime,
    end: endTime,
    // duration: [3, "hour"],
  };

  let prizesPara;
  var countdownlink;
  for (let i = 0; i < curEventData.details.length; i++) {
    if (curEventData.details[i].text.includes("Project tease:")) {
      for (let j = i + 1; j < curEventData.details.length; j++) {
        if (curEventData.details[j].text.length === 0) {
          break;
        }
        projectTeaseData.push(curEventData.details[j].text);
      }
      break;
    }
  }
  for (let i = 0; i < curEventData.details.length; i++) {
    if (curEventData.details[i].text.includes("prizes")) {
      prizesPara = curEventData.details[i].text.split(" ");
      break;
    }
  }

  for (let i = 0; i < curEventData.details.length; i++) {
    if (curEventData.details[i].text.includes("Countdown")) {
      countdownlink = curEventData.details[i].spans[1].data.url;
    }
  }

  const projectTeaseTwo =
    curEventData.details[curEventData.details.length - 1].text.split("|");

  let allSocialLinks = [];

  for (
    let i = 0;
    i < curEventData.details[curEventData.details.length - 1].spans.length;
    i++
  ) {
    let singleSpan =
      curEventData.details[curEventData.details.length - 1].spans[i];
    if (singleSpan.data) {
      allSocialLinks.push(singleSpan.data.url);
    }
  }

  return (
    <div className="EventCard">
      <div className="row">
        <div className="col-12 col-lg-8">
          <img
            className="img-fluid rounded-3 eventCardImage"
            src={curEventData.image.url}
          />
        </div>
        <div className="col-12 col-lg-4 pt-2">
          <p className="font-size-20 font-weight-600 color-light-grey pt-md-0 pt-4">
            {" "}
            {curEventData.details[0].text}{" "}
          </p>
          <br />
          <p className="pt-1 font-weight-600">
            <img
              src={CalendarIcon}
              height="18px"
              style={{ background: "transparent" }}
            />
            &nbsp; Date:{" "}
            <span className="color-light-grey fw-normal">
              {curEventData.details[2].text.replace("Date:", "")}
            </span>
          </p>
          <p className="pt-2 font-weight-600">
            <img
              src={LocationIcon}
              height="20px"
              style={{ background: "transparent" }}
            />
            &nbsp; Place:{" "}
            <span className="color-light-grey fw-normal">
              {curEventData.details[3].text.replace("Place:", "")}
            </span>
          </p>

          <p className="pt-2 font-weight-600" style={{ paddingLeft: "1.4rem" }}>
            Equivalent times:{" "}
            <span className="color-light-grey fw-normal">
              {curEventData.details[4].text.replace("Equivalent times:", "")}
            </span>
          </p>

          <div className="py-4 my-2 event-buttons">
            <a href={google(event)} target="_blank">
              <button className="px-3 py-2 me-3 btn rounded-pill event-button-color fst-italic">
                Google Calendar
              </button>
            </a>
            <a href={ics(event)} download={`${companyName}`} target="_blank">
              <button className="px-3 py-2 btn rounded-pill event-button-color fst-italic">
                iCal Export
              </button>
            </a>
          </div>

          <p className="ps-2 countdown-color">
            <img
              src={AlarmIcon}
              height="18px"
              style={{ background: "transparent" }}
            />
            &nbsp;
            <a
              href={countdownlink}
              target="_blank"
              style={{ cursor: "pointer" }}
            >
              {" "}
              Countdown
            </a>
          </p>
        </div>
      </div>

      <div className="d-md-none d-block py-3 my-3">
        <hr />
      </div>

      <div className="row">
        <div className="col-12">
          <p className="pb-4 pt-md-4 mt-md-3  font-size-22 font-weight-600">
            {" "}
            Project tease:{" "}
          </p>

          <div className="ps-4">
            <ul className="projectTease color-light-grey">
              {projectTeaseData.map((data, index) => (
                <li key={index} className="pt-1">
                  {" "}
                  {data.replace("—", "")}
                </li>
              ))}
            </ul>
          </div>

          {prizesPara !== undefined ? (
            <p className="pt-4 color-light-grey">
              <img
                src={MedalIcon}
                height="22px"
                style={{ background: "transparent" }}
              />
              &ensp;
              <span className="font-weight-700">
                {prizesPara[1]} of prizes
              </span>{" "}
              split between{" "}
              <span className="font-weight-700">
                {prizesPara[6]} winners: {prizesPara[8]}
              </span>{" "}
              on Twitter and{" "}
              <span className="font-weight-700">{prizesPara[12]}</span> on
              Telegram!
            </p>
          ) : null}

          <p className="color-light-grey pb-5 py-5">
            <span className="text-white font-weight-600">Hint: </span>
            Read their Medium articles and visit their Website to learn more
          </p>

          <hr />

          <p className="font-weight-600 pt-4 pt-md-5 font-size-22">
            {" "}
            Share this event via:{" "}
          </p>

          <div className="ps-md-3 pt-3 pb-4 pb-md-5">
            <EventButton
              Icon={Linkedin}
              color="#0e76a8"
              text="Linkedin"
              link={getLinkedinUrl(shareUrlOptions)}
            />
            <EventButton
              Icon={Twitter}
              color="#1DA1F2"
              text="Twitter"
              link={getTwitterUrl(shareUrlOptions)}
            />
            <EventButton
              Icon={Facebook}
              color="#3b5998"
              text="Facebook"
              link={getFbUrl(shareUrlOptions)}
            />
            <EventButton
              Icon={Reddit}
              color="#ff4500"
              text="Reddit"
              link={getRedditUrl(shareUrlOptions)}
            />
          </div>

          <hr />

          <p className="pt-4 pb-3 font-size-22 font-weight-600">
            {" "}
            Project tease:{" "}
          </p>

          <div className="ps-4">
            <ul className="projectTease color-light-grey pb-5 mb-4">
              {projectTeaseTwo.map((data, index) => (
                <a key={index} href={allSocialLinks[index]} target="_blank">
                  <li className="pt-1 font-size-17">{data}</li>
                </a>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

export default EventCard;
