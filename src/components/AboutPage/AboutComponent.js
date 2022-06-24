import React from 'react';
import { Link } from 'react-router-dom'
import Header from '../../layout/Header'
import DesktopTopBar from '../TopBar/desktop'
import TopBar from "../TopBar";
import { BackgroundImage, ContainerSection } from '../../pages/HomePageElements'
import aboutbg from '../../assets/images/aboutus-bg.jpg'
import AboutSection from './AboutSection'

const AboutComponent = () => {

  return (
    <>
      <ContainerSection>
        <BackgroundImage background={aboutbg} >

          <div className="event-page-margin">
            <TopBar />
            <Header />
            <div className="price--box">
              <DesktopTopBar homepage={false} />
            </div>
          </div>

          <div >
            <AboutSection />
          </div>

        </BackgroundImage>
      </ContainerSection>

    </>
  );
}

export default AboutComponent;