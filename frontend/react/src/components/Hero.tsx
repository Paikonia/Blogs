import Container from "./Container";
import "../App.css";
import ProfileImage from '../assets/profile2.jpg' 
const Hero = () => {
  return (
    <Container narrow={true}>
      <section className="hero-section__section">
        <div className="hero-section__text">
          <h1 className="hero-section__heading">Welcome to Patrick's notes</h1>
          <p className="hero-section__sub_heading">A blog site documenting the journey in my life.</p>
        </div>
        <div className="hero-section__image">
          <img
            src={ProfileImage}
            alt="Patrick"
            id="home-hero-image"
          />
        </div>
      </section>
    </Container>
  );
};

export default Hero;
