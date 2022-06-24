import React, { useEffect, useState } from "react";
import { BlueContainer, InputField, Ul } from "./NewsStyle";
import { ReactComponent as SearchIcon } from "../../assets/svgs/search.svg";

function Posts ( props ) {
  // eslint-disable-next-line
  const [backup, setBackup] = useState( [] );
  const [data, setData] = useState( [] );
  const [value, setValue] = useState( "" );
  const [searched, setSearched] = useState( false );

  useEffect( () => {
    // console.log("posts", props.data)
    // let items = await fetch("https://api.rss2json.com/v1/api.json?rss_url=https%3A%2F%2Fmedium.com%2Ffeed%2Fgains-associates")
    //   .then(res => res.json())
    //   .then(feed => feed.items)
    //   .catch(err => console.log(err.message))
    setData( [...props.data] );
    setBackup( [...props.data] );
  }, [] );

  const searchFunc = ( e ) => {
    // For Enter key
    if ( e.key === "Enter" && value !== "" ) {
      setData(
        backup.filter( ( cur, index ) =>
          cur.title.toLowerCase().includes( value.toLowerCase() )
        )
      );
      setValue( "" );
      setSearched( true );
    } else if ( e.key === "Enter" && value === "" ) {
      setData( backup );
      setSearched( false );
    }

    // For click on search Icon
    if ( e.type === "click" && value !== "" ) {
      setData(
        backup.filter( ( cur, index ) =>
          cur.title.toLowerCase().includes( value.toLowerCase() )
        )
      );
      setValue( "" );
      setSearched( true );
    } else if ( e.type === "click" && value === "" ) {
      setData( backup );
      setSearched( false );
    }
  };

  return (
    <>
      <div className="mt-0 mt-md-5 latest-news-min-height">
        <div className="d-flex flex-column justify-content-between align-items-center">
          <BlueContainer className="d-none d-md-flex align-items-center p-2 mb-2">
            <p className="font-family-inter font-weight-700 font-size-12">
              Search
            </p>
            <div className="position-relative w-100">
              <InputField
                value={value}
                onChange={( e ) => setValue( e.target.value )}
                onKeyPress={searchFunc}
                className="mx-2"
                type="text"
              />
              <SearchIcon
                onClick={searchFunc}
                className="position-absolute cursor-pointer"
                style={{ zIndex: "10000", top: "8px", right: "16px" }}
              />
            </div>
          </BlueContainer>
          <BlueContainer recentPosts={true} className="p-2">
            <p className="py-2 font-family-inter font-weight-700 font-size-12 font-size-md-16">
              {searched ? "Search Results" : "Recent Posts"}
            </p>
            <Ul>
              {data?.length === 0 && (
                <p className="py-2 mx-4 font-family-inter font-weight-400 font-size-14">
                  No such recent posts!
                </p>
              )}
              {data &&
                data.map( ( card, index ) => {
                  if ( index < 5 ) {
                    return (
                      <a
                        key={index}
                        href={card.link}
                        rel="noreferrer"
                        target="_blank"
                      >
                        <li className="py-2 mx-4 font-family-inter font-weight-400 font-size-14">
                          {card.title?.length > 25
                            ? card.title?.substring( 0, 25 ) + "..."
                            : card.title}
                        </li>
                      </a>
                    );
                  }
                } )}
            </Ul>
          </BlueContainer>
        </div>
      </div>
    </>
  );
}

export default Posts;
