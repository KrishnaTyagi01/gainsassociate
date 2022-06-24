import React, { useState, useRef } from "react";
import { useForm } from "react-hook-form";
import { ErrorMessage } from "@hookform/error-message";
import ReCAPTCHA from "react-google-recaptcha";
import { Link } from "react-router-dom";
import { ContainerSection } from "../../pages/HomePageElements";

const ContactSection = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({ criteriaMode: "all" });

  const [captchaValue, setCaptchaValue] = useState("");

  const [name, setName] = useState("");
  const [message, setMessage] = useState("");
  const [email, setEmail] = useState("");
  const [hideSubmit, setHideSubmit] = useState(true);
  const [showErrorName, setShowErrorName] = useState(false);
  const [showErrorMessage, setShowErrorMessage] = useState(false);
  const [showErrorEmail, setShowErrorEmail] = useState(false);
  console.log("Message: ", message);
  console.log("Name: ", name);

  const recaptchaRef = React.useRef();

  const onSubmit = async () => {
    // if (!captchaValue) {
    //   alert("Fill Recaptcha first !!!");
    // }
    // // else
    // alert("cant submit it");
    console.log("After Submiting");
  };
  console.log(errors);

  // if (name.length >= 3) {
  //   setShowErrorName(false);
  // }

  // if (message.length >= 3) {
  //   setShowErrorMessage(false);
  // }

  function onCaptchaChange(value) {
    console.log("Captcha value:", value);
    recaptchaRef.current = value;
    setCaptchaValue(value);
  }

  var re = /\S+@\S+\.\S+/;
  return (
    <>
      <ContainerSection>
        <div className="d-flex justify-content-center contact-section row text-center contact--page">
          <div className="col-12 mt-5">
            <p className="text-white font-family-inter font-weight-800 font-size-48 page--heading contact">
              {" "}
              Contact Us
            </p>
          </div>

          <div className="col-12 pt-3">
            <p className="below-contact-text">
              Tell us about your projects, we are excited to hear from you
            </p>
          </div>

          <div className="col-12">
            <form
              className="contact-form"
              // onSubmit={onSubmit}
              name="contact"
              method="POST"
              netlify-honeypot="bot-field"
              data-netlify="true"
            >
              <input type="hidden" name="form-name" value="contact" />
              <div class="form-group">
                <input
                  className="form-control"
                  type="text"
                  name="fullname"
                  onChange={(e) => {
                    setName(e.target.value);
                    setShowErrorName(true);
                    if (e.target.value.length >= 1) {
                      setShowErrorName(false);
                    } else {
                      setShowErrorName(true);
                    }
                  }}
                  placeholder="Full name"
                  required
                  minlength="3"
                />

                {showErrorName ? (
                  name.length < 1 ? (
                    <span
                      style={{
                        color: "red",
                      }}
                    >
                      Name should not be empty
                    </span>
                  ) : null
                ) : null}
              </div>

              <div class="form-group">
                <input
                  className="form-control"
                  type="email"
                  name="email"
                  placeholder="Email address"
                  required
                  onChange={(e) => {
                    setEmail(e.target.value);
                    setShowErrorEmail(true);

                    if (re.test(e.target.value)) {
                      setShowErrorEmail(false);
                    } else {
                      setShowErrorEmail(true);
                    }
                  }}
                />
                {showErrorEmail ? (
                  // !re.test(email) ? (
                  <span
                    style={{
                      color: "red",
                    }}
                  >
                    This is not a valid email
                  </span>
                ) : null}
              </div>

              <div class="form-group">
                <textarea
                  className="form-control"
                  name="message"
                  placeholder="Your message"
                  onChange={(e) => {
                    setMessage(e.target.value);

                    if (e.target.value.length >= 1) {
                      setShowErrorMessage(false);
                    } else {
                      setShowErrorMessage(true);
                    }
                  }}
                  cols={30}
                  rows={7}
                  required
                  minlength="3"
                />

                {showErrorMessage ? (
                  message.length < 1 ? (
                    <span
                      style={{
                        color: "red",
                      }}
                    >
                      {" "}
                      Message should not be empty
                    </span>
                  ) : null
                ) : null}
              </div>
              <div className="form-group">
                <ReCAPTCHA
                  required
                  sitekey="6LfJZ94cAAAAAC16RD9gIQXI2C8Wj4aMHdrp1wtD"
                  className="d-flex justify-content-center"
                  onChange={(val) => {
                    setCaptchaValue(val);
                  }}
                  theme={"dark"}
                  ref={recaptchaRef}
                />
              </div>
              <div class="form-group">
                <input
                  className="form-control"
                  type="submit"
                  value="Send Message"
                  disabled={
                    name.length < 3 ||
                    email.length < 3 ||
                    message.length < 3 ||
                    !captchaValue
                      ? true
                      : false
                  }
                />
              </div>
            </form>
          </div>

          <div className="col-12">
            <p className="below-sendmessage-text">
              You can also reach us at
              <a href="mailto:contact@gains-associates.com">
                {" "}
                contact@gains-associates.com
              </a>
            </p>
          </div>
        </div>
      </ContainerSection>
    </>
  );
};

export default ContactSection;
