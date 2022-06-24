import React, { useEffect, useState } from "react";
import { coinGecko } from "../../consts/apiLinks";
import { Row, Col } from "react-bootstrap";
import { DesktopContainer } from "./TopBarElements";
import CoinGecko from "coingecko-api";
import BigNumber from "bignumber.js";

const TopBar = ( { homepage } ) => {
  const [dataMap, setDataMap] = useState( {
    market_cap: 0,
    current_price: new BigNumber( 0 ),
    usd_24h_vol: 0,
    usd_24h_change: new BigNumber( 0 ),
  } );

  useEffect( () => {

    const fetchPrice = async ( crypto ) => {
      const CoinGeckoClient = new CoinGecko();
      const result = await CoinGeckoClient.coins.fetch(
        crypto.toLocaleLowerCase(),
        {}
      );
      setDataMap( {
        market_cap: convertToInternationalCurrencySystem( result.data?.market_data?.market_cap?.usd ),
        current_price: new BigNumber( result.data?.market_data?.current_price?.usd ),
        usd_24h_vol: convertToInternationalCurrencySystem( result.data?.market_data?.total_volume?.usd ),
        usd_24h_change: new BigNumber( result.data?.market_data?.price_change_percentage_24h )
      } );

    };
    fetchPrice( "gains" );

  }, [] );


  function convertToInternationalCurrencySystem ( labelValue ) {

    // Nine Zeroes for Billions
    return Math.abs( Number( labelValue ) ) >= 1.0e+9

      ? ( Math.abs( Number( labelValue ) ) / 1.0e+9 ).toFixed( 2 ) + "B"
      // Six Zeroes for Millions 
      : Math.abs( Number( labelValue ) ) >= 1.0e+6

        ? ( Math.abs( Number( labelValue ) ) / 1.0e+6 ).toFixed( 2 ) + "M"
        // Three Zeroes for Thousands
        : Math.abs( Number( labelValue ) ) >= 1.0e+3

          ? ( Math.abs( Number( labelValue ) ) / 1.0e+3 ).toFixed( 2 ) + "K"

          : Math.abs( Number( labelValue ) );
  }

  return (
    <DesktopContainer>
      {dataMap ? (
        <div
          style={{
            justifyContent: homepage ? "" : "center",
            display: homepage ? "" : "flex",
            paddingTop: homepage ? "3rem" : "1rem",
          }}
        >
          <Row
            style={{
              flexWrap: "nowrap",
              background: homepage ? "" : "rgba(72, 60, 151, 0.6)",
              padding: homepage ? "" : "2px 35px",
              borderRadius: homepage ? "" : "50rem",
            }}
          >
            <Col
              md="auto"
              className="pe-1 d-flex "
              style={{ paddingLeft: "4px" }}
            >
              <div className="px-2">
                Price:{" "}
                <span
                  style={{ backdropFilter: "drop-shadow(2px 4px 6px black)" }}
                  className="color-bluecolor"
                >
                  $
                  {parseFloat( dataMap.current_price ).toLocaleString( undefined, {
                    maximumFractionDigits: 2,
                  } )}
                </span>
              </div>
            </Col>
            │
            <Col md="auto" className="px-1 d-flex">
              <div className="px-2">
                Market Cap.{" "}
                <span className="color-bluecolor">
                  ${dataMap.market_cap}
                </span>
              </div>
            </Col>
            │
            <Col md="auto" className="px-1 d-flex">
              <div className="px-2">
                Trading Volume:{" "}
                <span className="color-bluecolor">
                  ${dataMap.usd_24h_vol}
                </span>
              </div>
            </Col>
            │
            <Col md="auto" className="ps-1 d-flex">
              <div className="px-2">
                Price Change 24h:{" "}
                <span className="color-bluecolor">
                  {dataMap.usd_24h_change.toFixed( 2 )} %
                </span>
              </div>
            </Col>
          </Row>
        </div>
      ) : (
        ""
      )}
    </DesktopContainer>
  );
};

export default TopBar;
