import React from "react";
import { TweetLink, TwitterCard } from "./TweetCardElements";
import { ReactComponent as Twitter } from "../../assets/svgs/twitter.svg";

export default function TweetCard ( { data } ) {
  // console.log("data", data);
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
      month[8] = "Sep";
      month[9] = "Oct";
      month[10] = "Nov";
      month[11] = "Dec";

      let day = date.getDate();

      if ( day < 10 ) {
        day = "0" + day;
      }

      return (
        month[date.getMonth()] +
        " " +
        date.getDate()
      );
    }
  }

  return (
    <TwitterCard>
      <div className="twitter" style={{ textAlign: "end" }}>
        <Twitter />
      </div>
      <div className="d-flex flex-column justify-content-between">
        {data?.text ? (
          <TweetLink
            href={`https://twitter.com/GainsAssociates/status/${data.id}`}
            rel="noreferrer"
            target="_blank"
          >
            <div
              className="para"
              style={{ minHeight: "150px", color: "#ffffff" }}
            >
              {data.text.length > 180
                ? data.text.substring( 0, 177 ) + "..."
                : data.text}
            </div>
          </TweetLink>
        ) : (
          <div className="para" style={{ height: "180px", color: "#939395" }}>
            <div className="d-flex justify-content-center align-items-center font-family-inter font-weight-700 font-size-22">
              <p>No Recent Tweets Found.</p>
            </div>
          </div>
        )}
        <div className="date color-bluecolor">
          {data?.created_at ? formatDate( data.created_at.substring( 0, 10 ) ) : ""}
        </div>
      </div>
    </TwitterCard>
  );
}
