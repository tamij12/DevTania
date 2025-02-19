import Card from "react-bootstrap/Card";
import { Container, Row, Col } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";

import vitaliapp from "../assets/img/vapp.png";
import spanglish from "../assets/img/spanglish.png";
import weatherapp from "../assets/img/weather.png";
import { Button } from "react-bootstrap";
import { Github } from "react-bootstrap-icons";

const projects = [
  {
    id: 1,
    title: "Vitaliapp",
    description:
      "VitaliApp es una plataforma web fullstack para la gestión de la salud, desarrollada con React y Next.js en el frontend. Utiliza NextAuth para la autenticación, mientras que el backend está construido con Node.js y Express, y MongoDB como base de datos. Su arquitectura prioriza la seguridad, eficiencia y escalabilidad.",
    image: vitaliapp,
    linkProject: "https://vitaliapp-front.vercel.app/"
  },
  {
    id: 2,
    title: "FluentInSpanglish",
    description:
      "Es un sitio web desarrollado con React y Next.js, diseñado para ofrecer una experiencia optimizada y escalable. El proyecto consistió en la migración desde WordPress a una solución personalizada en Next.js, basada en un diseño previamente establecido. Se implementó una estructura siguiendo los principios de Clean Architecture, garantizando un código modular y mantenible para facilitar la continuidad y evolución de la aplicación.",
    image: spanglish,
    linkProject: "https://fluentinspanglish.vercel.app/"
  },
  {
    id: 3,
    title: "WeatherApp",
    description:
      "Es una aplicación web desarrollada con React y Material-UI, que consume la API gratuita de OpenWeather para proporcionar información meteorológica en tiempo real. Implementa una interfaz intuitiva que permite buscar el clima de cualquier ciudad y visualizar tanto las condiciones actuales como un pronóstico de los próximos 5 días. La integración con la API se realiza mediante llamadas asincrónicas, asegurando una experiencia fluida y optimizada.",
    image: weatherapp,
    linkProject: "https://weather-app-topaz-eight-37.vercel.app/"
  },
  // {
  //   id: 4,
  //   title: "E-commerce",
  //   description: "Tienda en línea con React y Node.",
  //   image: "https://via.placeholder.com/300",
  // },
  // {
  //   id: 5,
  //   title: "Blog Personal",
  //   description: "Blog con Next.js y Markdown.",
  //   image: "https://via.placeholder.com/300",
  // },
  // {
  //   id: 6,
  //   title: "Dashboard Analytics",
  //   description: "Visualización de datos con gráficos interactivos.",
  //   image: "https://via.placeholder.com/300",
  // },
  // {
  //   id: 7,
  //   title: "Social Media App",
  //   description: "Red social con autenticación y chat en tiempo real.",
  //   image: "https://via.placeholder.com/300",
  // },
  // {
  //   id: 8,
  //   title: "Task Manager",
  //   description: "Gestor de tareas con Kanban y notificaciones.",
  //   image: "https://via.placeholder.com/300",
  // },
  // {
  //   id: 9,
  //   title: "Portfolio Web",
  //   description: "Sitio web personal para mostrar proyectos.",
  //   image: "https://via.placeholder.com/300",
  // },
];

export const Projects = () => {
  return (
    <section className="project-titlefirts" id="projects">
      <Container className="py-5">
        <h2 className="title-aboutme ">My Projects</h2>
        <p className="project-style">
          En cada uno de mis proyectos, aplico una combinación de habilidades en
          front-end y back-end para crear aplicaciones web completas y
          funcionales. Desde el diseño de interfaces intuitivas y responsivas
          utilizando React y Tailwind CSS, hasta la implementación de soluciones
          robustas en el back-end con NodeJs y Express. Estos proyectos
          demuestran mi capacidad para manejar tanto la parte visual como la
          lógica detrás de la aplicación, asegurando una experiencia de usuario
          fluida y un rendimiento eficiente.
        </p>
        <Row>
          {projects.map((project) => (
            <Col key={project.id} md={4} className="mb-4">
              <Card className="project-cardstyle border-0">
                <Card.Img
                  variant="top"
                  src={project.image}
                  alt={project.title}
                />
                <Card.Body>
                  <Card.Title>{project.title}</Card.Title>
                  <Card.Text className="project-textcard">
                    {project.description}
                  </Card.Text>
                  <a
                        href={project.linkProject}
                        target="_blank"
                        rel="noopener noreferrer"
                        style={{
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
            </Col>
          ))}
        </Row>
        <a
                href="https://github.com/tamij12?tab=repositories"
                style={{ textDecoration: "none" }}
              >
                <Button variant="outline-light">GitHub Projects <Github size={25}/> </Button>
              </a>
      </Container>
    </section>
  );
};
