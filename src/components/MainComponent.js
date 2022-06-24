import React, { Component } from "react";
import { Redirect, Route, Switch } from "react-router-dom";
import "../App.css";
import "../assets/css/custom.css";
import Home from "../pages";
import GlobaleStyles from "../theme/GlobaleStyles";
import About from "./AboutPage/AboutComponent";
import Contact from "./ContactPage/ContactComponent";
import Events from "./EventPage/EventComponent";
import Faq from "./FaqPage/FaqComponent";
import Footer from "./Footer/Footer";
import { FooterContainer, ReservedSection } from "./Footer/FooterStyle";

class Main extends Component {
  componentDidMount() {}

  render() {
    return (
      <div>
        <GlobaleStyles />

        <Switch location={this.props.location}>
          <Route path="/home" component={() => <Home />} />
          <Route exact path="/events" component={() => <Events />} />
          <Route exact path="/faq" component={() => <Faq />} />
          <Route exact path="/contact" component={() => <Contact />} />
          <Route exact path="/about" component={() => <About />} />
          <Route exact path="/events/:eventId" component={Events} />
          <Redirect to="/home" />
        </Switch>

        <FooterContainer>
          <Footer />
          <ReservedSection
            className="text-center py-4"
            style={{ color: "#4292d5" }}
          >
            ® GAINS Associates
          </ReservedSection>
        </FooterContainer>
      </div>
    );
  }
}

export default Main;
