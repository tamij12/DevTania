import Card from "react-bootstrap/Card";

import vitaliapp from "../assets/img/vapp.png";
import spanglish from "../assets/img/spanglish.png";
import weatherapp from "../assets/img/weather.png";
import { Button } from "react-bootstrap";
import { Github } from "react-bootstrap-icons";

export const Projects = () => {
  return (
    <section className="project project-title" id="projects">
      <div className="container">
        <div className="row">
          <div className="col-12">
            <div className="skill-bx wow zoomIn">
              <h2 className="title-aboutme">Projects</h2>
              <p>
                En cada uno de mis proyectos, aplico una combinación de
                habilidades en front-end y back-end para crear aplicaciones web
                completas y funcionales. Desde el diseño de interfaces
                intuitivas y responsivas utilizando React y Tailwind CSS, hasta
                la implementación de soluciones robustas en el back-end con
                Node.js y MongoDB. Estos proyectos demuestran mi capacidad para
                manejar tanto la parte visual como la lógica detrás de la
                aplicación, asegurando una experiencia de usuario fluida y un
                rendimiento eficiente.
              </p>

              <div className="projects-cards">
                <div className="project-cardstyle">
                  <Card style={{ width: "350px" }}>
                    <Card.Body>
                      <Card.Img variant="top" src={vitaliapp} />
                      {/* <p className="">
                        App diseñada para mejorar la gestión de la salud
                        personal. Registrar, Administrar, Organizar.
                      </p> */}
                      {/* <div>
                      <span>
                      App diseñada para mejorar la gestión de la salud
                      personal.
                      </span>
                      </div> */}
                      <a
                        href="https://vitaliapp-front.vercel.app/"
                        target="_blank"
                        rel="noopener noreferrer"
                        style={{
                          // marginBottom: "20px",
                          fontSize: "15px",
                          color: "#5a2d89",
                          textDecoration: "underline",
                          marginTop: "10px",
                          display: "inline-block",
                          transition:
                            "color 0.3s ease, text-decoration 0.3s ease",
                        }}
                      >
                        Ver proyecto
                      </a>
                    </Card.Body>
                  </Card>
                </div>

                <div className="project-cardstyle">
                  <Card style={{ width: "350px" }}>
                    <Card.Body>
                      {/* <Card.Title>Card Title</Card.Title>
                      <Card.Text>
                        Some quick example text to build on the card title and
                        make up the bulk of the card content.
                      </Card.Text> */}
                      <Card.Img variant="top" src={spanglish} />
                      <a
                        href="https://fluentispanglish.vercel.app/"
                        target="_blank"
                        rel="noopener noreferrer"
                        style={{
                          fontSize: "15px",
                          color: "#FF6F61",
                          textDecoration: "underline",
                          marginTop: "10px",
                          display: "inline-block",
                          transition:
                            "color 0.3s ease, text-decoration 0.3s ease",
                        }}
                      >
                        Ver proyecto
                      </a>
                    </Card.Body>
                  </Card>
                </div>
                <div className="project-cardstyle">
                  <Card style={{ width: "350px" }}>
                    <Card.Body>
                      {/* <Card.Title>Card Title</Card.Title>
                      <Card.Text>
                        Some quick example text to build on the card title and
                        make up the bulk of the card content.
                      </Card.Text> */}
                      <Card.Img variant="top" src={weatherapp} />
                      <a
                        href="https://fluentispanglish.vercel.app/"
                        target="_blank"
                        rel="noopener noreferrer"
                        style={{
                          fontSize: "15px",
                          color: "#FF6F61",
                          textDecoration: "underline",
                          marginTop: "10px",
                          display: "inline-block",
                          transition:
                            "color 0.3s ease, text-decoration 0.3s ease",
                        }}
                      >
                        Ver proyecto
                      </a>
                    </Card.Body>
                  </Card>
                </div>

              </div>

              
              

              

              <a
                href="https://github.com/tamij12?tab=repositories"
                style={{ textDecoration: "none" }}
              >
                <Button variant="outline-light">GitHub Projects <Github size={25}/> </Button>
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
