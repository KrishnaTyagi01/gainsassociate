import React, { useState } from "react";
import { Link } from "react-router-dom";
import { ButtonStyled } from "../../components/Button";
import Logo from "../../components/Logo";
import Nav from "../../components/Nav";
import language_png from "../../assets/images/language.png";
import {
  HeaderGroup,
  NavMenu,
  ButtonContainer,
  ButtonCollapse,
  Img
} from "./HeaderElements";
import { ReactComponent as Hamburger } from "../../assets/svgs/Hamburger.svg";
import { Modal } from "react-bootstrap";

import mobileLogo from "../../assets/images/mobilelogo2.png"

const Header = () => {
  const [show, setShow] = useState( false );

  const handleClose = () => setShow( false );
  return (
    <>
      <HeaderGroup>
        <Link to='/home'>
          <Logo />
        </Link>
        <NavMenu>
          <Nav />
          <ButtonContainer>
            <ButtonStyled active={true}>Invest now</ButtonStyled>
          </ButtonContainer>
          <ButtonContainer>
            <Img src={language_png} />
          </ButtonContainer>
        </NavMenu>
        <ButtonCollapse onClick={() => setShow( true )}>
          <Hamburger />
        </ButtonCollapse>
      </HeaderGroup>

      <Modal show={show} onHide={handleClose} className="mobile-nav-height navbar-modal">
        <Modal.Header closeButton>
          <Modal.Title>
            {/* <TransparentLogo /> */}
            <img src={mobileLogo} style={{ width: 70 }} alt="" />
          </Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <NavMenu>
            <Nav primary={true} collapse={true} />
            <ButtonContainer style={{ display: "flex" }} className="pb-2" >
              <ButtonStyled primary={true} active={true}>
                Invest now
              </ButtonStyled>
            </ButtonContainer>
            <ButtonContainer style={{ display: "flex" }}>
              <Img src={language_png} />
            </ButtonContainer>
          </NavMenu>
        </Modal.Body>
      </Modal>
    </>
  );
};

export default Header;
