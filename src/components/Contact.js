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
  const [showToast, setShowToast] = useState(false);

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
      firstName && lastName && email && phone && message && validateEmail(email);

    setFormValid(isValid);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setButtonText("Sending...");

    const API_URL = process.env.REACT_APP_API_URL || "https://server-portafolio-mu.vercel.app";

    if (!validateEmail(formDetails.email)) {
      setShowToast(true);
      setTimeout(() => setShowToast(false), 3000);
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
                          style={{
                            border:
                              formDetails.email &&
                              !validateEmail(formDetails.email)
                                ? '2px solid red'
                                : undefined
                          }}
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
                        <button type="submit">{buttonText}</button>
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

      {/* ✅ Toast de error por email inválido */}
      {showToast && (
        <div style={toastStyle}>
          ❌ Ingresá un email válido de <strong>Gmail, Hotmail o Yahoo</strong>
        </div>
      )}
    </section>
  );
};

// ✅ Estilo para el toast
const toastStyle = {
  position: 'fixed',
  bottom: '20px',
  right: '20px',
  backgroundColor: '#ff4d4f',
  color: 'white',
  padding: '12px 16px',
  borderRadius: '8px',
  boxShadow: '0 2px 10px rgba(0,0,0,0.2)',
  zIndex: 9999,
  fontWeight: 'bold',
  animation: 'fadeInUp 0.3s ease-in-out',
};
