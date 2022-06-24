import loadable from "@loadable/component";
import cns from "classnames";
import formatDate from "date-fns/format";
import isAfter from "date-fns/isAfter";
import isBefore from "date-fns/isBefore";
import isSameDay from "date-fns/isSameDay";
import { enGB } from "date-fns/locale";
import parseISO from "date-fns/parseISO";
import gql from "graphql-tag";
import filter from "lodash/fp/filter";
import flow from "lodash/fp/flow";
import map from "lodash/fp/map";
import reverse from "lodash/fp/reverse";

import slice from "lodash/fp/slice";
import { RichText } from "prismic-reactjs";
import Dropdown from "rc-dropdown";
import "rc-dropdown/assets/index.css";
import Menu, { Item as MenuItem } from "rc-menu";
import React, { useContext, useEffect, useState } from "react";

import CalendarIcon from "../../assets/svgs/calendar-icon.svg";
import ShareIconBlack from "../../assets/svgs/share-icon-black.svg";
import ShareIconWhite from "../../assets/svgs/share-icon-white.svg";
import { GlobalContext } from "../../context/reducers/provider";
import { client } from "../../utils/prismicHelpers";
import UpdateData from "../../utils/UpdateData";
import apidata from "./data.json";
import EventCardComponent from "./EventCard";
import {
  getFbUrl,
  getLinkedinUrl,
  getRedditUrl,
  getTwitterUrl,
} from "./share-urls";
// import showEvent from "./../../context/reducers/showEvent";

import cn from "./styles.module.scss"; // Sass style module
import "./styles.scss";

console.log("JSON ", apidata);

const data = apidata.data;

// console.log("JSON Dataaaa ", data);

const Calendar = loadable(() => import("./Calendar"));

const isToday = (date) => isSameDay(new Date(), date);

const getUpcomingEvents = flow(
  filter(({ node }) => isAfter(parseISO(node.start_time), new Date())),
  reverse,
  slice(0, 7)
);

const getPastEvents = flow(
  filter(({ node }) => isBefore(parseISO(node.start_time), new Date())),
  slice(0, 7)
);

const getCalendarEvents = map(({ node }) => ({
  start: parseISO(node.start_time),
  allDay: false,
  doc: node,
  title: RichText.asText(node.square_title),
}));

function EventCard({
  title,
  start_time,
  image,
  company_name,
  company_logo,
  onClickMethod,
  _meta,
}) {
  const eventTime = parseISO(start_time);
  const eventTitle = RichText.asText(title);
  const [companyName, companyEventTitle] = eventTitle.split(" — "); //  Object destructuring
  const shareUrlOptions = {
    text: eventTitle,
    url: `/events/${_meta.uid}`,
  };
  console.log("EventCard Title: ", eventTitle);

  const menu = (
    <Menu>
      <div className="position-relative text-dark pt-2 pb-1 ps-1">
        <img
          src={ShareIconBlack}
          className="pe-2 ps-1"
          style={{ background: "transparent" }}
        />
        Share via:
      </div>
      <MenuItem key="1">
        <a
          href={getLinkedinUrl(shareUrlOptions)}
          target="_blank"
          rel="noopener noreferrer"
        >
          Linkedin
        </a>
      </MenuItem>
      <MenuItem key="2">
        <a
          href={getTwitterUrl(shareUrlOptions)}
          target="_blank"
          rel="noopener noreferrer"
        >
          Twitter
        </a>
      </MenuItem>
      <MenuItem key="3">
        <a
          href={getFbUrl(shareUrlOptions)}
          target="_blank"
          rel="noopener noreferrer"
        >
          Facebook
        </a>
      </MenuItem>
      <MenuItem key="4">
        <a
          href={getRedditUrl(shareUrlOptions)}
          target="_blank"
          rel="noreferrer noopener"
        >
          Reddit
        </a>
      </MenuItem>
    </Menu>
  );

  // Return of EventCard component
  return (
    <div className={cns(cn.eventCard, "px-2 py-4")}>
      <div className="position-relative">
        <Dropdown
          trigger={["click"]}
          overlay={menu}
          overlayClassName={cn.dropdownOverlay}
        >
          <div className={cns("px-4 py-2 testing1", cn.shareIcon)}>
            <img src={ShareIconWhite} style={{ background: "transparent" }} />
          </div>
        </Dropdown>
        <div
          className="d-block"
          onClick={onClickMethod}
          style={{ cursor: "pointer" }}
        >
          <div className="row">
            <div className="col-3 d-flex flex-column align-items-center mt-4">
              <span className={cn.eventDay}>
                {formatDate(eventTime, "EEE", { locale: enGB })}
              </span>
              <span className={cn.eventDate}>
                {formatDate(eventTime, "d", { locale: enGB })}
              </span>
              {isToday(eventTime) ? (
                <div
                  className={cns("mt-2 px-2 font-weight-medium", cn.eventBadge)}
                >
                  {/* {intl.formatMessage({ id: "event.today" })} */}
                  Today
                </div>
              ) : null}
            </div>
            <div className="col-9 pl-1">
              <img src={company_logo.url} className={cn.companyLogo} />

              <span className={cn.eventCompany}>{companyName}</span>
              <span className={cn.eventTitle}>{companyEventTitle}</span>

              <div className="mt-1 mb-3">
                <img
                  src={CalendarIcon}
                  height="12px"
                  style={{ background: "transparent" }}
                />
                &nbsp;
                <span className={cn.eventTime}>
                  {formatDate(eventTime, "E do. MMM, h:mm a", { locale: enGB })}
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

// Above Code is for Left side Card
export default function EventSection({ match }) {
  // const { data } = props;
  //   const intl = useIntl();

  if (match?.params?.eventId) {
    var eventId = match?.params?.eventId;
    console.log("EventId", match?.params?.eventId);
  }

  const [eventsData, setEventsData] = useState([]);
  const state = useContext(GlobalContext);
  console.log("Event State: ", state["eventState"]);
  console.log("Show Event State: ", state["showEventState"]);

  const showEvent = state["showEventState"].showEvent;

  console.log("ShowEvent: ", showEvent);
  const querry = gql`
    query EventsQuery {
      allEvents(sortBy: start_time_DESC) {
        edges {
          node {
            title
            square_title
            details
            start_time
            end_time
            _meta {
              uid
            }
            image
            company_name
            company_logo {
              ... on _ImageLink {
                url
              }
            }
          }
        }
      }
    }
  `;

  useEffect(() => {
    client
      .query({
        query: querry,
      })
      .then((response) => {
        console.log("Query Response: ", response);
        setEventsData(response);
      })
      .catch((error) => {
        console.error(error);
      });
  }, []);

  console.log("Events Data: ", eventsData);

  const [currrentTab, setCurrentTab] = useState(0);
  // const [showEvent, setShowEvent] = useState(false);
  const upcomingEvents = getUpcomingEvents(eventsData?.data?.allEvents?.edges); // Data
  const pastEvents = getPastEvents(eventsData?.data?.allEvents?.edges); // Data
  const allEvents = currrentTab === 0 ? upcomingEvents : pastEvents;
  const noEventsPlaceholder =
    currrentTab === 0 ? "No upcoming events" : "No past events";
  const calendarEvents = getCalendarEvents(eventsData?.data?.allEvents?.edges);
  let allUids = [];

  console.log("upcomingEvents", upcomingEvents);
  console.log("PastEvents", pastEvents);
  console.log("calendarEvents", calendarEvents);

  function handleCalendarEventClick(data) {
    console.log("Data on calender click: ", data);
    const node = data.event.extendedProps.doc;

    UpdateData(state["eventDispatch"], "UPDATE_EVENT_DATA", node);
    UpdateData(state["showEventDispatch"], "UPDATE_SHOW_EVENT", true);
    // setShowEvent(true);
    // history.push(`/events/${data.event.extendedProps.doc._meta.uid}`);
  }

  if (match?.params?.eventId) {
    console.log("reached here");
    console.log(
      "reached here len: ",
      eventsData?.data?.allEvents?.edges?.length
    );
  }

  for (let j = 0; j < eventsData?.data?.allEvents?.edges?.length; j++) {
    let uid = eventsData?.data?.allEvents?.edges[j]?.node?._meta.uid;
    let map = {
      uid: uid,
      node: eventsData?.data?.allEvents?.edges[j]?.node,
    };
    allUids.push(map);
  }

  console.log("All Uids: ", allUids);
  const getTheNode = () => {
    for (let i = 0; i < allUids.length; i++) {
      console.log("Looping");
      if (allUids[i].uid == match?.params?.eventId) {
        var matchedUid = i;
        console.log("Event Id matched");
        // UpdateData(state["eventDispatch"], "UPDATE_EVENT_DATA", allUids[i].node);
        // setStartMatch(true);
        return allUids[i].node;
      }
    }

    return null;
  };
  var foundNode;
  const changeTheState = () => {
    foundNode = getTheNode();
    console.log("Found Node", foundNode);
    if (foundNode) {
      UpdateData(state["eventDispatch"], "UPDATE_EVENT_DATA", foundNode);
      UpdateData(state["showEventDispatch"], "UPDATE_SHOW_EVENT", true);
      // setShowEvent(true);
    }
  };
  // let foundNode = allUids.find((o) => o.uid == eventId);
  useEffect(() => {
    changeTheState();
  }, [eventsData, foundNode]);
  return (
    <>
      <div className="py-md-4">
        <div className="row mx-0 mb-md-5">
          <div
            className={cns("col-12 col-lg-3 pr-lg-0 d-lg-block", {
              "d-none": showEvent,
            })}
          >
            <div className="bg-transparent d-flex h-100">
              <div className="w-100 ">
                <nav
                  className={cns(
                    "nav nav-pills d-flex align-items-center justify-space-between",
                    cn.tabs
                  )}
                >
                  <button
                    className={cns(
                      "nav-item event-page-button btn btn-link flex-grow-1 text-center",
                      { active: currrentTab === 0 }
                    )}
                    type="button"
                    onClick={() => setCurrentTab(0)}
                  >
                    {/* {intl.formatMessage({ id: "event.upcoming" })} */}
                    Upcoming
                  </button>
                  <button
                    className={cns(
                      "nav-item event-page-button btn btn-link flex-grow-1 text-center",
                      { active: currrentTab === 1 }
                    )}
                    type="button"
                    onClick={() => setCurrentTab(1)}
                  >
                    {/* {intl.formatMessage({ id: "event.past" })} */}
                    Past
                  </button>
                </nav>
                <div
                  className={cns({
                    "d-lg-block": true,
                  })}
                >
                  {allEvents?.length ? (
                    // allEvents?.edges?.map(({ node }) => (
                    allEvents?.map(({ node }) => {
                      console.log("Single Node: ", node);
                      return (
                        <EventCard
                          key={node._meta.uid}
                          {...node}
                          onClickMethod={() => {
                            UpdateData(
                              state["eventDispatch"],
                              "UPDATE_EVENT_DATA",
                              node
                            );
                            UpdateData(
                              state["showEventDispatch"],
                              "UPDATE_SHOW_EVENT",
                              true
                            );
                            // setShowEvent(true);
                            window.scrollTo({
                              top: 0,
                              behavior: "smooth",
                            });
                          }}
                        />
                      );
                    })
                  ) : (
                    <div>
                      <h4 className="text-gray p-5 text-uppercase text-center">
                        {noEventsPlaceholder}
                      </h4>
                    </div>
                  )}
                </div>
              </div>
            </div>
          </div>
          <div
            className={cns(
              "col-12 col-lg-9 pl-lg-0 pr-lg-0 mt-2 mt-lg-0 left-border-calendar",
              cn.calendarWrapper,
              { "d-lg-block": true },
              { "d-none": !showEvent }
            )}
          >
            <div className="p-md-4 bg-transparent">
              {showEvent ? (
                <EventCardComponent />
              ) : (
                <Calendar
                  events={calendarEvents}
                  eventTimeFormat={{
                    hour: "numeric",
                    minute: "2-digit",
                    hour12: true,
                  }}
                  eventClick={handleCalendarEventClick}
                  displayEventTime
                  fixedWeekCount={false}
                />
              )}
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
