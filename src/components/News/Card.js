import React from "react";
import { Col } from "react-bootstrap";
import { CardImg } from "../../theme/GlobaleStyles";

function formatDate ( d ) {
  var date = new Date( d );

  if ( isNaN( date.getTime() ) ) {
    return d;
  } else {
    var month = [];
    month[0] = "Jan";
    month[1] = "Feb";
    month[2] = "Mar";
    month[3] = "Apr";
    month[4] = "May";
    month[5] = "Jun";
    month[6] = "Jul";
    month[7] = "Aug";
    month[8] = "Sept";
    month[9] = "Oct";
    month[10] = "Nov";
    month[11] = "Dec";

    let day = date.getDate();

    if ( day < 10 ) {
      day = "0" + day;
    }

    return day + " " + month[date.getMonth()] + " " + date.getFullYear();
  }
}

export default function Card ( {
  animation,
  newsName,
  newsdesc,
  newsDate,
  articleLink,
  tag,
  mobile,
} ) {
  return (
    <Col
      className={`card-custom my-3 my-md-5 ${mobile ? "py-3 pb-5 mb-0 rounded-3 bg-dark-blue" : ""
        } d-flex flex-column justify-content-evenly`}
    >
      <div>
        <div className="deals-img position-relative d-flex justify-content-center align-items-center">
          {/* <div
            className="position-absolute"
            style={{ bottom: "5px", right: "5px" }}
          >
            <a
              style={{ border: "1px solid transparent", padding: "5px 10px" }}
              className="rounded-3 mb-3 text-capitalize backgroundcolor-bluecolor"
            >
              {tag}
            </a>
          </div> */}
          <a
            href={articleLink}
            rel="noreferrer"
            target="_blank"
            className="h-100"
          >
            {animation ? (
              <div className="position-relative img-effact h-100">
                <CardImg src={animation} className="img-fluid h-100" alt="" />
                <div
                  style={{
                    border: "1px solid transparent",
                    padding: "5px 10px",
                    right: "5px",
                    bottom: "-5px",
                  }}
                  className="rounded-3 mb-4 mb-md-3 me-2 me-md-3 text-capitalize backgroundcolor-bluecolor position-absolute"
                >
                  {tag}
                </div>
              </div>
            ) : (
              <p
                className={`font-size-30 d-flex h-100 align-items-center justify-content-center border rounded-3 ${mobile && "mx-2"
                  }`}
              >
                Content not available
              </p>
            )}
          </a>
        </div>
        <a
          className="font-family-inter text-start font-size-14"
          href={articleLink}
          rel="noreferrer"
          target="_blank"
        >
          <div
            style={{
              textOverflow: "ellipsis",
              whiteSpace: "nowrap",
              overflow: "hidden",
              // height: "55px",
            }}
            className={`ader  font-family-inter text-start font-weight-400 font-size-14 pt-3 pb-2 color-lightcolor px-2 ${mobile && "px-1 px-md-5"
              }`}
          >
            {newsdesc ? newsdesc : "Data not available."}
          </div>
        </a>
      </div>
      <div>
        <div
          className={`deals-info twitter font-weight-800 text-start font-italic font-size-18 font-family-inter px-2   ${mobile && "px-1 px-md-5"
            }`}
        >
          {newsName ? "by " + newsName : ""}
        </div>
        <div
          className={`deals-header font-weight-400 text-start font-size-12 color-darkgrayish px-2 ${mobile && "px-1 px-md-5"
            }`}
        >
          {newsDate && formatDate( newsDate.substring( 0, 10 ) )}
        </div>
      </div>
    </Col>
  );
}
