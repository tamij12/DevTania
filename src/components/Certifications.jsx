import scrumcertify from "../assets/img/SCRUM-certify.png";
import kodemia from "../assets/img/kodemia.png";
import gce from "../assets/img/gce.png";

const certifications = [
  {
    title: "Desarrollo Web Full-Stack Jr",
    provider: "Kodemia",
    year: "2023",
    src: kodemia,
  },
  {
    title: "Scrum Fundamentals Certified",
    provider: "ScrumStudy",
    year: "2023",
    src: scrumcertify,
  },
  {
    title: "Google Cloud Essentials",
    provider: "Google Cloud",
    year: "2023",
    src: gce,
  },
];

const Certifications = () => {
  return (
    <section className="certifications">
      <h2 className="title-aboutme"> Certifications</h2>
      <div className="certification-list">
        {certifications.map((cert, index) => (
          <div key={index} className="cert-card">
            <h3>{cert.title}</h3>
            <p>{cert.provider}</p>
            <span>{cert.year}</span>
            <img src={cert.src}  className="cert-img"/>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Certifications;
