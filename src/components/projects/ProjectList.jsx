import ProjectCard from "./ProjectCard";
import vitaliimg from "../../assets/img/vapp.png";
import spanglish from "../../assets/img/spanglish.png";
import weatherapp from "../../assets/img/weather.png";
import realChatTime from "../../assets/img/real-chat-time.png";
import { Container } from "react-bootstrap";

const projects = [
  {
    name: "VitaliApp",
    description: "Plataforma Web Fullstack para la gestión de la salud personal, con autenticación JWT, almacenamiento seguro del historial médico y administración de citas y medicamentos. Backend escalable con Node.js y Express, arquitectura RESTful y base de datos optimizada.",
    image: vitaliimg,
    technologies: [
      {
        name: "React",
        icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg",
      },
      { name: "Next.js", icon: "https://simpleicons.org/icons/nextdotjs.svg" },
      {
        name: "Tailwind CSS",
        icon: "https://simpleicons.org/icons/tailwindcss.svg",
      },
      {
        name: "Node.js",
        icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nodejs/nodejs-original.svg",
      },
      {
        name: "Express.js",
        icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/express/express-original.svg",
      },
      { name: "MongoDB", icon: "https://simpleicons.org/icons/mongodb.svg" },
      {
        name: "Postman",
        icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/postman/postman-original.svg",
      },
    ],
    preview: "https://vitaliapp-front.vercel.app/",
    code: "https://github.com/VitaliApp/vitaliapp-front",
  },
  {
    name: "WeatherApp",
    description: "Aplicación web que proporciona información meteorológica en tiempo real mediante la integración de la API de OpenWeather, utilizando llamadas asincrónicas, para una experiencia fluida y optimizada.",
    image: weatherapp,
    technologies: [
      {
        name: "JavaScript",
        icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg",
      },
      {
        name: "Material UI",
        icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/materialui/materialui-original.svg",
      },
      {
        name: "HTML",
        icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/html5/html5-original.svg",
      },
      {
        name: "CSS",
        icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/css3/css3-original.svg",
      },
    ],
    preview: "https://weather-app-topaz-eight-37.vercel.app/",
    code: "https://github.com/tamij12/weather-app",
  },
  {
    name: "FluentInSpanglish",
    description: "Migración de landing page del sitio en WordPress a una solución escalable en Next.js, optimizando rendimiento. Se implementa una arquitectura limpia, modular y mantenible, enfocada en escalabilidad y facilidad de integración con futuras funcionalidades. ",
    image: spanglish,
    technologies: [
      {
        name: "React",
        icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg",
      },
      { name: "Next.js", icon: "https://simpleicons.org/icons/nextdotjs.svg" },
      {
        name: "Tailwind CSS",
        icon: "https://simpleicons.org/icons/tailwindcss.svg",
      },
      {
        name: "CSS",
        icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/css3/css3-original.svg",
      },
    ],
    preview: "https://fluentinspanglish.vercel.app/",
    code: "https://github.com/tamij12/fluentinspanglish",
  },
  {
    name: "Chatme",
    description: "Chat en tiempo real con Node.js y Express, utilizando WebSockets (Socket.io) para una comunicación bidireccional eficiente.",
    image: realChatTime,
    technologies: [
      {
        name: "Node.js",
        icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nodejs/nodejs-original.svg",
      },
      {
        name: "Express.js",
        icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/express/express-original.svg",
      },
      {
        name: "Socket.io",
        icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/socketio/socketio-original.svg",
      },
      { name: "MongoDB", icon: "https://simpleicons.org/icons/mongodb.svg" },
      {
        name: "JavaScript",
        icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg",
      },
      {
        name: "HTML",
        icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/html5/html5-original.svg",
      },
      {
        name: "CSS",
        icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/css3/css3-original.svg",
      },
    ],
    preview: "https://github.com/tamij12/real-time-chat",
    code: "https://github.com/tamij12/real-time-chat",
  },
];

const ProjectList = () => {
  return (
    <>
      <Container className="project-titlefirts" id="projects">
        <h2 className="title-aboutme">My Projects</h2>
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
      </Container>
      <div className="projects-list">
        {projects.map((project, index) => (
          <ProjectCard key={index} project={project} />
        ))}
      </div>
    </>
  );
};

export default ProjectList;
