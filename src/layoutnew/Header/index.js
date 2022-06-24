import React, { useState } from "react";
import { ButtonStyled } from "../../components/Button";
import Logo from "../../components/Logo";
import Nav from "../../components/Nav";
import {
  HeaderGroup,
  NavMenu,
  ButtonContainer,
  ButtonCollapse,
} from "./HeaderElements";
import {ReactComponent as Hamburger} from "../../assets/svgs/Hamburger.svg";
import TransparentLogo from "../../assets/svgs/TransparentLogo";
import { Button, Modal } from "react-bootstrap";

const Header = () => {
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  return (
    <>
      <HeaderGroup>
        <Logo />
        <NavMenu>
          <Nav />
          <ButtonContainer>
            <ButtonStyled>Contact us</ButtonStyled>
            <ButtonStyled active={true}>Invest now</ButtonStyled>
          </ButtonContainer>
        </NavMenu>
        <ButtonCollapse onClick={() => setShow(true)}>
          <Hamburger />
        </ButtonCollapse>
      </HeaderGroup>
      <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>
            <TransparentLogo />
          </Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <NavMenu>
            <Nav primary={true} collapse={true} />
            <ButtonContainer style={{ display: "flex" }}>
              <Button
                style={{
                  boxShadow: "none",
                  color: "white",
                  fontFamily: "Zuume",
                  fontStyle: "italic",
                  fontSize: "2rem",
                  fontWeight: "700",
                }}
                variant={"white"}
              >
                Contact us
              </Button>
              <ButtonStyled primary={true} active={true}>
                Invest now
              </ButtonStyled>
            </ButtonContainer>
          </NavMenu>
        </Modal.Body>
      </Modal>
    </>
  );
};

export default Header;
