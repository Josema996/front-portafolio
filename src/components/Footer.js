import { Container, Row, Col } from "react-bootstrap";
import logo from "../assets/img/Logo.png";
import navIcon1 from "../assets/img/nav-icon1.svg";
import navIcon2 from "../assets/img/nav-icon2.svg";
import navIcon3 from "../assets/img/nav-icon3.svg";
import navIcon4 from "../assets/img/nav-icon4.svg";

export const Footer = () => {
  return (
    <footer className="footer">
      <Container>
        <Row className="align-items-center">
          <Col size={12} sm={6}>
            <img src={logo} alt="Logo" />
          </Col>
          <Col size={12} sm={6} className="text-center text-sm-end">
            <div className="social-icon">
            <a href="https://www.linkedin.com/in/jos%C3%A9-mar%C3%ADa-almendro-14394b181/" target="_blank"><img src={navIcon1} alt="" /></a>
              <a href="https://www.facebook.com/profile.php?id=100080977579518" target="_blank"><img src={navIcon2} alt="" /></a>
              <a href="https://www.instagram.com/almendrojose/" target="_blank"><img src={navIcon3} alt="" /></a>
              <a href="https://github.com/Josema996" target="_blank"><img src={navIcon4} alt="" /></a>
            </div>
            <p>Copyright 2023. All Rights Reserved</p>
          </Col>
        </Row>
      </Container>
    </footer>
  )
}