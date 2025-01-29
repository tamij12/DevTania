import { Container, Row, Col, Tab, Nav } from "react-bootstrap";

import colorSharp2 from "../assets/img/color-sharp2.png";
import TrackVisibility from "react-on-screen";

import js from "../assets/img/js.png";
import react from "../assets/img/react.svg";
import html from "../assets/img/html-5.png";
import css from "../assets/img/css-3.png";
import sass from "../assets/img/sass.png";
import btrap from "../assets/img/btrap.png";
import next from "../assets/img/next-js.svg";
import tail from "../assets/img/tailwind-css-2.svg";
import vite from "../assets/img/vitejs.svg";
import nodejs from "../assets/img/nodejs-1.svg";
import express from "../assets/img/express-109.svg";
import mongo from "../assets/img/mongodb-icon-2.svg";
import mongoose from "../assets/img/mongoose-1.svg";
import jwt from "../assets/img/jwtio-json-web-token.svg";
import postman from "../assets/img/postman.svg";
import npm from "../assets/img/npm.svg";
import git from "../assets/img/git-icon.svg";
import github from "../assets/img/github-icon-1.svg";
import gcp from "../assets/img/google-cloud-2.svg";
import aws from "../assets/img/aws-2.svg";
import scrum from "../assets/img/scrumstudy-1.svg";
import materialui from "../assets/img/material-ui-1.svg";
import vs from "../assets/img/visual-studio-code-1.svg";

import "animate.css";

export const Skills = () => {
  return (
    <section className="project" id="skills">
      <Container>
        <Row>
          <Col size={12}>
            <TrackVisibility>
              {({ isVisible }) => (
                <div
                  className={
                    isVisible ? "animate__animated animate__fadeIn" : ""
                  }
                >
                  <h2 className="skill-title">Skills</h2>
                  <div className="softskills">
                    <p>
                      He adquirido habilidades para desarrollar aplicaciones
                      modernas, enfocándome en crear interfaces intuitivas y
                      soluciones funcionales. Siempre utilizo herramientas
                      actuales y busco mejorar continuamente para garantizar
                      funcionalidad y diseño en cada proyecto.
                    </p>
                  </div>

                  <Tab.Container id="projects-tabs" defaultActiveKey="first">
                    <Nav
                      variant="pills"
                      className="nav-pills mb-5 justify-content-center align-items-center"
                      id="pills-tab"
                    >
                      <Nav.Item>
                        <Nav.Link eventKey="first">Frontend</Nav.Link>
                      </Nav.Item>
                      <Nav.Item>
                        <Nav.Link eventKey="second">Backend</Nav.Link>
                      </Nav.Item>
                      <Nav.Item>
                        <Nav.Link eventKey="third">Tools</Nav.Link>
                      </Nav.Item>
                    </Nav>
                    <Tab.Content
                      id="slideInUp"
                      className={
                        isVisible ? "animate__animated animate__slideInUp" : ""
                      }
                    >
                      <Tab.Pane eventKey="first">
                        <div className="skill-card">
                          <img className="skill-cardimg logo" src={html} />
                          <img className="skill-cardimg logo" src={css} />
                          <img className="skill-cardimg logo" src={js} />
                          <img className="skill-cardimg logo" src={sass} />
                          <img className="skill-cardimg logo" src={materialui} />
                          <img className="skill-cardimg logo" src={btrap} />
                          <img className="skill-cardimg logo" src={tail} />
                          <img className="skill-cardimg logo" src={react} />
                          <img
                            className="skill-cardimg skill-cardbg logo"
                            src={next}
                          />
                          <img className="skill-cardimg logo" src={vite} />
                        </div>
                      </Tab.Pane>
                      <Tab.Pane eventKey="second">
                        <div className="skill-card">
                          <img
                            className="skill-cardimg skill-cardbgback logo"
                            src={nodejs}
                          />
                          <img
                            className="skill-cardimg skill-cardbgback logo"
                            src={express}
                          />
                          <img className="skill-cardimg logo" src={mongo} />
                          <img className="skill-cardimg logo" src={mongoose} />
                          <img className="skill-cardimgjwt logo" src={jwt} />
                          <img className="skill-cardimgnpm logo" src={npm} />
                        </div>
                      </Tab.Pane>
                      <Tab.Pane eventKey="third">
                        <div className="skill-card logo">
                          <img className="skill-cardimg logo" src={vs} />
                          <img className="skill-cardimg logo" src={git} />
                          <img
                            className="skill-cardimg skill-cardbg logo"
                            src={github}
                          />
                          <img className="skill-cardimg logo" src={postman} />
                          <img className="skill-cardimg logo" src={gcp} />
                          <img
                            className="skill-cardimg skill-cardbgback logo"
                            src={aws}
                          />
                          <img
                            className="skill-cardimg skill-cardbgback logo"
                            src={scrum}
                          />
                        </div>
                      </Tab.Pane>
                    </Tab.Content>
                  </Tab.Container>
                  <div className="softskills">
                    <p>
                      Además de mis habilidades técnicas, destaco por mis
                      habilidades blandas, como el trabajo en equipo, la
                      comunicación efectiva y el liderazgo. Soy capaz de
                      resolver problemas con creatividad e innovación,
                      manteniendo atención al detalle incluso bajo presión. Mi
                      adaptabilidad y disposición para colaborar me permiten
                      contribuir de manera positiva y eficiente en cualquier
                      entorno profesional.
                    </p>
                  </div>
                </div>
              )}
            </TrackVisibility>
          </Col>
        </Row>
      </Container>
      <img className="background-image-right" src={colorSharp2}></img>
    </section>
  );
};
