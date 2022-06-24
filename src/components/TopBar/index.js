import React, { useEffect, useRef, useState } from "react";
import Swiper from "react-id-swiper";
import { Navigation, Pagination } from "swiper/js/swiper.esm";
import { coinGecko } from "../../consts/apiLinks";
import {
  TopBarContainer,
  DataItem,
  DataLabel,
  DataValue,
} from "./TopBarElements";
import CoinGecko from "coingecko-api";
import BigNumber from "bignumber.js";


let params = {
  modules: [Pagination, Navigation],
  slidesPerView: 1,
  noSwiping: true,
  spaceBetween: 30,
  loop: true,
  autoplay: { delay: 2500, disableOnInteraction: false },
  breakpoints: {
    930: {
      slidesPerView: 3,
    },
    630: {
      slidesPerView: 2,
    },
  },
};

const TopBar = () => {
  const swiperRef = useRef( null );

  const [dataMap, setDataMap] = useState( {
    market_cap: 0,
    current_price: 0,
    usd_24h_vol: 0,
    usd_24h_change: 0,
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
        current_price: result.data?.market_data?.current_price?.usd,
        usd_24h_vol: convertToInternationalCurrencySystem( result.data?.market_data?.total_volume?.usd ),
        usd_24h_change: result.data?.market_data?.price_change_percentage_24h
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
    <>
      {dataMap ? (
        <div className="pt-md-0 pt-2">
          <TopBarContainer className="mobile-topbar">
            <Swiper ref={swiperRef} {...params}>
              <div className='mobile-topbar-div'>
                <DataItem className="mobile-topbar-gap">
                  <DataLabel>Price:</DataLabel>
                  <DataValue className="color-bluecolor">
                    ${parseFloat( dataMap.current_price ).toLocaleString( undefined, { maximumFractionDigits: 2 } )}
                  </DataValue>
                </DataItem>
                {/* </div>
            <div> */}
                <DataItem className="mobile-topbar-gap">
                  <DataLabel>Market Capital:</DataLabel>
                  <DataValue className="color-bluecolor">
                    ${dataMap.market_cap}
                  </DataValue>
                </DataItem>
              </div>
              <div className='mobile-topbar-div'>
                <DataItem className="mobile-topbar-gap">
                  <DataLabel>Trading Volume:</DataLabel>
                  <DataValue className="color-bluecolor">
                    ${dataMap.usd_24h_vol}
                  </DataValue>
                </DataItem>
                {/* </div>
            <div> */}
                <DataItem className="mobile-topbar-gap">
                  <DataLabel>Price Change 24h:</DataLabel>
                  <DataValue className="color-bluecolor">
                    {parseFloat( dataMap.usd_24h_change ).toFixed( 2 )}%
                  </DataValue>
                </DataItem>
              </div>
            </Swiper>
          </TopBarContainer>
        </div>
      ) : (
        ""
      )}
    </>
  );
};

export default TopBar;