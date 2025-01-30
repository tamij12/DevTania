import myprofile from "../assets/img/photo-profile.jpg";
const AboutMe = () => {
  return (
    <section id="aboutme" className="about-me">
      <div className="about-content">
        <div className="image-container">
          <img src={myprofile} alt="profile-photo" className="profile-image" />
        </div>
        <div className="text-container">
          <h2 className="title-aboutme">About me</h2>
          <p className="p-aboutme">
            Mi nombre es Tania Mijangos Ramírez, soy de México y tengo 19 años.
            Mi pasión por la programación comenzó a los 16 años, cuando mi
            hermano, un senior developer, me mostró este fascinante mundo. Desde
            entonces, me he formado de manera autodidacta a través de
            plataformas en línea y videos educativos en YouTube. Además,
            completé un bootcamp de desarrollo web para reforzar y ampliar mis
            habilidades.
            <br /> Estoy convencida de que en este campo es fundamental ser
            proactivo y tener la capacidad de aprender por cuenta propia, ya que
            el conocimiento y la práctica valen más que un título.
            <br /> Fuera del código, me apasionan los gatitos y el baloncesto,
            dos cosas que, al igual que la programación, requieren paciencia,
            estrategia y dedicación. 🚀🐱🏀
          </p>
        </div>
      </div>
    </section>
  );
};

export default AboutMe;
