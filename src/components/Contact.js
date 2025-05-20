import { useState } from "react";
import { Container, Row, Col } from "react-bootstrap";
import contactImg from "../assets/img/contact-img.svg";
import 'animate.css';
import TrackVisibility from 'react-on-screen';

export const Contact = () => {
  const formInitialDetails = {
    firstName: '',
    lastName: '',
    email: '',
    phone: '',
    message: ''
  };

  const [formDetails, setFormDetails] = useState(formInitialDetails);
  const [buttonText, setButtonText] = useState('Send');
  const [status, setStatus] = useState({});
  const [formValid, setFormValid] = useState(false);

  const validateEmail = (email) => {
    const allowedDomains = ['gmail.com', 'hotmail.com', 'yahoo.com'];
    const domain = email.split('@')[1];
    return allowedDomains.includes(domain);
  };

  const onFormUpdate = (category, value) => {
    if (category === 'message' && value.length > 150) return;

    const updatedForm = {
      ...formDetails,
      [category]: value
    };

    setFormDetails(updatedForm);

    const { firstName, lastName, email, phone, message } = updatedForm;

    const isValid =
      firstName &&
      lastName &&
      email &&
      phone &&
      message &&
      validateEmail(email);

    setFormValid(isValid);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setButtonText("Sending...");

    const API_URL = process.env.REACT_APP_API_URL || "https://server-portafolio-mu.vercel.app";

    if (!validateEmail(formDetails.email)) {
      setStatus({ success: false, message: 'El email debe ser de Gmail, Hotmail o Yahoo.' });
      setButtonText("Send");
      return;
    }

    try {
      const response = await fetch(`${API_URL}/api/contact`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formDetails),
      });

      const result = await response.json();
      setFormDetails(formInitialDetails);

      if (response.ok) {
        setStatus({ success: true, message: 'Message sent successfully' });
      } else {
        setStatus({ success: false, message: result.message || 'Something went wrong.' });
      }
    } catch (error) {
      console.error("Error sending message:", error);
      setStatus({
        success: false,
        message: 'An error occurred while sending the message.',
      });
    }

    setButtonText("Send");
  };

  return (
    <section className="contact" id="connect">
      <Container>
        <Row className="align-items-center">
          <Col size={12} md={6}>
            <TrackVisibility>
              {({ isVisible }) => (
                <img
                  className={isVisible ? "animate__animated animate__zoomIn" : ""}
                  src={contactImg}
                  alt="Contact Us"
                />
              )}
            </TrackVisibility>
          </Col>
          <Col size={12} md={6}>
            <TrackVisibility>
              {({ isVisible }) => (
                <div className={isVisible ? "animate__animated animate__fadeIn" : ""}>
                  <h2>Get In Touch</h2>
                  <form onSubmit={handleSubmit}>
                    <Row>
                      <Col size={12} sm={6} className="px-1">
                        <input
                          type="text"
                          value={formDetails.firstName}
                          placeholder="First Name"
                          onChange={(e) => onFormUpdate('firstName', e.target.value)}
                        />
                      </Col>
                      <Col size={12} sm={6} className="px-1">
                        <input
                          type="text"
                          value={formDetails.lastName}
                          placeholder="Last Name"
                          onChange={(e) => onFormUpdate('lastName', e.target.value)}
                        />
                      </Col>
                      <Col size={12} sm={6} className="px-1">
                        <input
                          type="email"
                          value={formDetails.email}
                          placeholder="Email"
                          onChange={(e) => onFormUpdate('email', e.target.value)}
                        />
                      </Col>
                      <Col size={12} sm={6} className="px-1">
                        <input
                          type="tel"
                          value={formDetails.phone}
                          placeholder="Phone"
                          onChange={(e) => onFormUpdate('phone', e.target.value)}
                        />
                      </Col>
                      <Col size={12} className="px-1">
                        <textarea
                          value={formDetails.message}
                          placeholder="Message"
                          onChange={(e) => onFormUpdate('message', e.target.value)}
                        ></textarea>
                        <small style={{ color: formDetails.message.length > 140 ? 'red' : 'gray' }}>
                          {150 - formDetails.message.length} caracteres restantes
                        </small>
                      </Col>
                      <Col size={12} className="px-1">
                        <button type="submit" disabled={!formValid}>{buttonText}</button>
                      </Col>
                    </Row>
                  </form>
                  {status.message && (
                    <p className={status.success ? "success-message" : "error-message"}>
                      {status.message}
                    </p>
                  )}
                </div>
              )}
            </TrackVisibility>
          </Col>
        </Row>
      </Container>
    </section>
  );
};
