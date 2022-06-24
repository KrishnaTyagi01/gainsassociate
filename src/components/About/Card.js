import React from "react";
import { Col } from "react-bootstrap";
import { CardImg } from "../../theme/GlobaleStyles";

import deal_lottie from "../../assets/gifs/deals.json"
import insight_lottie from "../../assets/gifs/insights.json"
import news_lottie from "../../assets/gifs/news.json"
import event_lottie from "../../assets/gifs/events.json"
import LottieAnimation from '../Lottie'

export default function Card({ title, animation, description, height, width, mobile }) {
  return (
    <Col sm={12} md={6} xl={3} className="card-custom py-5">
      <div className="deals-header font-italic font-weight-bolder font-size-30">
        {title}
      </div>
      <div className="deals-img my-md-5">

      {(() => {
          
          switch (animation) {
            case 'deals':
                return (
                  <div className='img-fluid'>
                      <LottieAnimation lotti={deal_lottie} height={height} width={width} />
                  </div>
                )
            case 'insights':
                return (
                  <div className='img-fluid'>
                      <LottieAnimation lotti={insight_lottie} height={height} width={width} />
                  </div>
                )
            case 'news':
              return (
                <div className='img-fluid'>
                    <LottieAnimation lotti={news_lottie} height={height} width={width} />
                </div>
              )
            case 'events':
              return (
                <div className='img-fluid'>
                    <LottieAnimation lotti={event_lottie} height={height} width={width} />
                </div>
              )
          }

          }) () }  
          {/*   Here Switch is used inside a function & function has been called too    */}

        { mobile ? <CardImg src={animation} className="img-fluid" alt="" /> : <> </> }

      </div>
      <div className="deals-info font-weight-400 text-center font-size-14 font-family-inter color-lightcolor">
        {description}
      </div>
    </Col>
  );
}
