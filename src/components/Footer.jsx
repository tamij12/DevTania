import { Container, Row, Col } from "react-bootstrap";
import navIcon1 from "../assets/img/nav-icon1.svg";
import navIcon2 from "../assets/img/nav-icon2.svg";
import navIcon3 from "../assets/img/nav-icon3.svg";
import logodev from "../assets/img/logo-dev.png";

export const Footer = () => {
  return (
    <footer className="footer">
      <Container>
        <Row className="align-items-center mt-48">
          <Col size={12} sm={6}>
            <img
              className="logo"
              src={logodev}
              alt="Logo"
              style={{ width: "70px", height: "60px" }}
            />
          </Col>
          <Col size={12} sm={6} className="text-center text-sm-end">
            <div className="social-icon">
              <a href="https://www.linkedin.com/in/tania-mijangos-1215ba255">
                <img src={navIcon1} alt="Icon" />
              </a>
              <a href="https://www.facebook.com/profile.php?id=100087331783566">
                <img src={navIcon2} alt="Icon" />
              </a>
              <a href="https://www.instagram.com/tamij12_dev/">
                <img src={navIcon3} alt="Icon" />
              </a>
            </div>
            <p>Copyright 2025. All Rights Reserved</p>
          </Col>
        </Row>
      </Container>
    </footer>
  );
};
