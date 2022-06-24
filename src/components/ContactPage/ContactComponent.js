import React from 'react';
import { Link } from 'react-router-dom'
import Header from '../../layout/Header'
import DesktopTopBar from '../TopBar/desktop'
import TopBar from "../TopBar";
import { BackgroundImage, ContainerSection } from '../../pages/HomePageElements'
import contactbg from '../../assets/images/faq-bg.jpg'
import ContactSection from './ContactSection'

const ContactComponent = () => {

  return (
    <>
      <ContainerSection>
        <BackgroundImage background={contactbg} >

          <div className="event-page-margin">
            <TopBar />
            <Header />
            <div className="price--box">
              <DesktopTopBar homepage={false} />
            </div>
          </div>

          <div >
            <ContactSection />
          </div>

        </BackgroundImage>
      </ContainerSection>

    </>
  );
}

export default ContactComponent;