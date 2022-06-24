import React from 'react';
import { Link } from 'react-router-dom'
import Header from '../../layout/Header'
import DesktopTopBar from '../TopBar/desktop'
import TopBar from "../TopBar";
import { BackgroundImage, ContainerSection } from '../../pages/HomePageElements'
import faqbg from '../../assets/images/bg-faq.jpg'
import FaqSection from './FaqSection'

const FaqComponent = () => {

  return (
    <>
      <ContainerSection>
        <BackgroundImage background={faqbg} >
          <div className="event-page-margin">

            <TopBar />
            <Header />
            <div className="price--box">
              <DesktopTopBar homepage={false} />
            </div>
            <p className=" pt-md-5 mt-4 pb-md-4 text-center text-white font-weight-700 font-size-50">FAQ</p>

          </div>

          <div style={{ maxWidth: "1365px", margin: "0 auto" }}>
            <FaqSection />
          </div>

        </BackgroundImage>
      </ContainerSection>

    </>
  );
}

export default FaqComponent;