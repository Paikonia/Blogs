/* eslint-disable react/no-unescaped-entities */
import Container from "./Container";
import Image from 'next/image'
const Hero = () => {
  const ProfileImage = 'https://media.licdn.com/media/AAYQAQSOAAgAAQAAAAAAAB-zrMZEDXI2T62PSuT6kpB6qg.png';
  return (
    <Container narrow={true}>
      <section className="hero-section__section">
        <div className="hero-section__text">
          <h1 className="hero-section__heading">Welcome to Patrick's notes</h1>
          <p className="hero-section__sub_heading">
            A blog site documenting the journey in my life.
          </p>
        </div>
        <div className="hero-section__image">
          <Image width={300} height={400} src={ProfileImage} alt="Patrick" id="home-hero-image" />
        </div>
      </section>
    </Container>
  );
};

export default Hero;
