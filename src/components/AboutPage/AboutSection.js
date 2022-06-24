import React, { useState } from 'react';
import { Link } from 'react-router-dom'
import Modal from 'react-bootstrap/Modal'
import data from './leadersData.json'
import Swiper from "react-id-swiper";
import LottieAnimation from '../Lottie'
import ourvalues1 from '../../assets/images/ourvalues-1.png'
import ourvalues2 from '../../assets/images/ourvalues-2.png'
import ourvalues3 from '../../assets/images/ourvalues-3.png'
import twitterLink from '../../assets/svgs/about-twitter.svg'
import linkedinLink from '../../assets/svgs/about-linkedin.svg'
import ourteam1 from "../../assets/gifs/ourteam1.json"
import ourteam2 from "../../assets/gifs/ourteam2.json"
import ourteam3 from "../../assets/gifs/ourteam3.json"



function LeaderModal ( props ) {
  return (
    props.renderData ?
      <Modal
        {...props}
        className="leaders-modal"
        size="xl"
        aria-labelledby="contained-modal-title-vcenter"
        centered
      >
        <Modal.Header>
          <Modal.Title id="contained-modal-title-vcenter">
            <img src={props.renderData.image} className="img-fluid" />
            <p className="leader-name d-none d-md-block"> {props.renderData.name} </p>
            <p className="leader-des d-none d-md-block"> {props.renderData.title} </p>
          </Modal.Title>
        </Modal.Header>
        <button className="btn-close" onClick={props.onHide} aria-label="close"></button>
        <Modal.Body className="px-md-5">

          <p className="leader-name d-block d-md-none text-center"> {props.renderData.name} </p>
          <p className="leader-des d-block d-md-none text-center pb-3"> {props.renderData.title} </p>

          <p> Cras mattis consectetur purus sit amet fermentum. Cras justo odio,
            dapibus ac facilisis in, egestas eget quam. Morbi leo risus, porta ac
            consectetur ac, vestibulum at eros. </p>
          &nbsp;
          <p>
            Cras mattis consectetur purus sit amet fermentum. Cras justo odio,
            dapibus ac facilisis in, egestas eget quam. Morbi leo risus, porta ac
            consectetur ac, vestibulum at eros.
            Cras mattis consectetur purus sit amet fermentum. Cras justo odio,
            dapibus ac facilisis in, egestas eget quam. Morbi leo risus, porta ac
            consectetur ac, vestibulum at eros.
          </p>

        </Modal.Body>
      </Modal> : null
  );
}

console.log( data );

const params = {
  slidesPerView: 1,
  spaceBetween: 30,
  centeredSlides: true,
  grabCursor: true,
  loop: true,
  autoplay: {
    delay: 3000,
    disableOnInteraction: false
  },
  pagination: {
    el: ".swiper-pagination",
    clickable: true,
  },
  breakpoints: {
    850: {
      noSwiping: true
    },
  },
};

const RenderList = ( { renderData } ) => {

  const [modalShow, setModalShow] = useState( false );
  const [modalData, setModalData] = useState( [] );

  let rows = [];

  let size = renderData.length;

  for ( let i = 0; i < size; i++ ) {
    rows.push(
      <div key={i} className="col-12 col-lg-3 pb-5">
        <img src={renderData[i].image} className="img-fluid" />
        <p className="about-team-name pt-4"> {renderData[i].name} </p>
        <p className="about-team-title mb-2"> {renderData[i].title} </p>
        <a href={renderData[i].linkedin} target="_blank"> <img src={linkedinLink} alt="LinkedIn Profile" /></a>
        &nbsp;
        <a href={renderData[i].twitter} target="_blank"> <img src={twitterLink} alt="Twitter Profile" /> </a> <br />
        <button className="btn btn-primary rounded-pill my-4" onClick={() => { setModalShow( true ); setModalData( renderData[i] ); }}> View Bio </button>
      </div>
    );
  }

  return (
    <>
      {rows}
      <LeaderModal show={modalShow} onHide={() => setModalShow( false )} renderData={modalData} leader={false} />
    </>
  )
}

const RenderListLeader = ( { renderData } ) => {

  const [modalShow, setModalShow] = useState( false );
  const [modalData, setModalData] = useState( [] );

  let rows = [];

  console.log( renderData[0].name )

  let size = renderData.length;

  for ( let i = 0; i < size; i++ ) {
    rows.push(
      <div className="col-12 col-lg-4">
        <img src={renderData[i].image} className="img-fluid" />
        <p className="font-size-36 font-weight-700"> {renderData[i].name} </p>
        <p className="leader-team-title pb-2"> {renderData[i].title} </p>
        <a href={renderData[i].linkedin} target="_blank"> <img src={linkedinLink} alt="LinkedIn Profile" /></a>
        &nbsp;
        <a href={renderData[i].twitter} target="_blank"> <img src={twitterLink} alt="Twitter Profile" /> </a> <br />
        <button className="btn btn-primary rounded-pill my-4" onClick={() => { setModalShow( true ); setModalData( renderData[i] ); }}> View Bio </button>
      </div>
    );
  }

  return (
    <>
      {rows}
      <LeaderModal show={modalShow} onHide={() => setModalShow( false )} renderData={modalData} leader={true} />
    </>
  )
}


const AboutSection = () => {

  const [modalShow, setModalShow] = useState( false );
  const [modalData, setModalData] = useState( [] );

  return (
    <div className="about-page-margin">
      <div className="row text-center mt-md-5 pt-md-4">
        <div className="col-12 col-md-6 pe-md-5">

          <p className="font-size-48 font-weight-800"> Our Story </p>
          <div>
            <p className="below-our-story font-weight-700 pt-md-5 mt-2"> We are a group of friends who are passionate about new technologies </p>

          </div>
          <div className="pt-4 below-our-story-text">
            <p> If you've tried your hand at investment, you will have found it's not as easy as it looks. We take the hassle, uncertainty and risk out of the equation.  </p>
            &nbsp;
            <p> We took an early interest in Bitcoin and started investing in ICOs in late 2017. At the time, the ICO market was in a frenzy. Public sales were often oversubscribed and people were competing for small investing spots. Therefore, pools emerged. They were groups of retail investors grouping their contributions to be able to negotiate better terms. However, it was very risky because most pool admins were anonymous which meant they could easily disappear with people’s hard earned money. </p>
            &nbsp;
            <p className="d-none d-md-block"> This is why we decided to create our own community. To be fully transparent, we shared our social media profiles and showed our faces on video. Nowadays, we are humbled to have a vibrant community of supporters, and that is just the beginning!</p>
          </div>

        </div>
        <div className="col-12 col-md-6  ps-md-5">

          <p className="font-size-48 font-weight-800"> Our Vision </p>
          <p className="below-our-story font-weight-700 pt-md-5 mt-2"> The world's elite community to make the right trade at the right time </p>
          <div className="pt-4 below-our-story-text">
            <p> When crypto is your business, the world is at your fingertips. In the history of how we exchange value, we have only had 3 major changes: barter, money and finally digital cash. We see crypto as a revolution of the same magnitude. It appears as the best bet to become the foundation for a new financial paradigm that promotes fairness and trust.</p>
            &nbsp;
            <p> Blockchain and crypto will bring more transparency, traceability, security, and offer seamless, free and instant transactions. However, it can be hard to navigate this new ecosystem alone. Thus, finding help and guidance in a great community is crucial.</p>
            &nbsp;
            <p className="d-none d-md-block"> We want people to find a reliable and exciting place where they can actively learn, have fun and benefit from the best opportunities. This is why we created GAINS and this is what we are fighting for everyday.</p>
          </div>

        </div>

      </div>

      <div className="row text-center mt-md-5">

        <p className="font-size-48 my-md-5 mt-5 pt-3 font-weight-800"> Our Values </p>

        <div className="col-12 col-md-4 pe-lg-4">
          <p className="our-values-title"> Skin in the game </p>
          <img src={ourvalues1} className="img-fluid d-lg-none d-block py-4 w-100" alt="skin in the game" />
          <div className='img-fluid py-4 d-none d-lg-block'>
            <LottieAnimation className="w-100" lotti={ourteam1} height={'300px'} width={'350px'} />
          </div>
          <p className="below-our-story-text px-md-2"> We invest in all the deals we offer. We perform extensive research by studying materials and gathering inputs from our community and network of very well connected people. We directly talk to the executive team of the project and figure out what they are made of. We creates growth technologies and funding frameworks for startups, while  reducing risks for investors. </p>
        </div>

        <div className="col-12 col-md-4 px-lg-4 mt-5 mt-md-0">
          <p className="our-values-title"> Long term vision </p>
          <img src={ourvalues2} className="img-fluid d-lg-none d-block py-4 w-100" alt="long term vision" />
          <div className='img-fluid py-4 d-none d-lg-block'>
            <LottieAnimation className="w-100" lotti={ourteam2} height={'300px'} width={'350px'} />
          </div>
          <p className="below-our-story-text px-md-2"> Most people dream of getting rich fast. Contrarily, we are patient and have a long-term vision. We constantly improve by learning while staying independent and open-minded. Our team is constantly monitoring the market for opportunities to help and advise anyone.
            <br /> <br />
            <strong>"Successful investing is getting others to agree with you… later." </strong>James Grant  </p>
        </div>

        <div className="col-12 col-md-4 ps-lg-4 mt-5 mt-md-0">
          <p className="our-values-title"> Done for you </p>
          <img src={ourvalues3} className="img-fluid d-lg-none d-block py-4 w-100" alt="Done for you" />
          <div className='img-fluid py-4 d-none d-lg-block'>
            <LottieAnimation className="w-100" lotti={ourteam3} height={'300px'} width={'350px'} />
          </div>
          <p className="below-our-story-text px-md-2"> Connecting with people is at the heart of human nature and is necessary for one’s well being. We share knowledge, discuss ideas and challenge opinions to grow together.
            <br /> <br />
            Nothing of significance was ever achieved by an individual acting alone. Follow along daily on YouTube and Twitter to learn how we're achieving these returns. </p>
        </div>

      </div>

      <div className="row text-center mt-md-5 justify-content-center">

        <p className="font-size-48 mt-5 pt-5 font-weight-800"> Our Leaders </p>

        <div className="row text-center">

          <RenderListLeader renderData={data.data.ourleaders} />

        </div>

      </div>

      <div className="row text-center mt-5 justify-content-center">

        <p className="font-size-48 my-5 pt-10 font-weight-800"> Our Team </p>


        <div className="d-none d-lg-block">
          <div className="row text-center d-flex justify-content-center">
            <RenderList renderData={data.data.ourteam} />
          </div>
        </div>

        <div className="d-block d-lg-none">
          <div className="row text-center mb-5 pb-5 d-flex justify-content-center">
            <Swiper {...params}>
              {data.data.ourteam.map( ( renderData, index ) => (
                <div key={index} className="col-12 col-lg-3 pb-5">
                  <img src={renderData.image} className="img-fluid" />
                  <p className="about-team-name pt-4"> {renderData.name} </p>
                  <p className="about-team-title mb-2"> {renderData.title} </p>
                  <a href={renderData.linkedin} target="_blank"> <img src={linkedinLink} alt="LinkedIn Profile" /></a>
                  &nbsp;
                  <a href={renderData.twitter} target="_blank"> <img src={twitterLink} alt="Twitter Profile" /> </a> <br />
                  <button className="btn btn-primary rounded-pill my-4" onClick={() => { setModalShow( true ); setModalData( renderData ); }}> View Bio </button>
                </div>
              ) )
              }
            </Swiper>
          </div>
        </div>

      </div>

      <div className="row text-center mt-md-5 justify-content-center">

        <p className="font-size-46 my-5 pt-3 font-weight-800"> Advisory Team </p>

        <div className="d-none d-lg-inline">
          <div className="row text-center mb-5 pb-5 d-flex justify-content-center">
            <RenderList renderData={data.data.advisoryteam} />
          </div>
        </div>

        <div className="d-block d-lg-none">
          <div className="row text-center mb-5 pb-5 d-flex justify-content-center">
            <Swiper {...params}>
              {data.data.advisoryteam.map( ( renderData, index ) => (
                <div key={index} className="col-12 col-lg-3 pb-5">
                  <img src={renderData.image} className="img-fluid" />
                  <p className="about-team-name pt-4"> {renderData.name} </p>
                  <p className="about-team-title mb-2"> {renderData.title} </p>
                  <a href={renderData.linkedin} target="_blank"> <img src={linkedinLink} alt="LinkedIn Profile" /></a>
                  &nbsp;
                  <a href={renderData.twitter} target="_blank"> <img src={twitterLink} alt="Twitter Profile" /> </a> <br />
                  <button className="btn btn-primary rounded-pill my-4" onClick={() => { setModalShow( true ); setModalData( renderData ); }}> View Bio </button>
                </div>
              ) )
              }
            </Swiper>
          </div>
        </div>

      </div>
      {/* This component is used to Show modal */}
      <LeaderModal show={modalShow} onHide={() => setModalShow( false )} renderData={modalData} leader={false} />
    </div>
  );
}

export default AboutSection;