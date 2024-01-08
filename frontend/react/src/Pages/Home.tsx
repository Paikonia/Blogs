import FeaturedCard from "@/components/FeaturedCard";
import Hero from "@/components/Hero";
import Profile from "../assets/profile.jpg";
const Home = () => {
  return (
    <div>
      <Hero />
      <div className="feature-card__section">
        <h2 className="hero-section__heading">My skills</h2>
        <div className="feature-card__grid">
          <FeaturedCard imgSrc={Profile} href="/" title="Blog 1" />
          <FeaturedCard imgSrc={Profile} href="/" title="Blog 1" />
        </div>
      </div>
    </div>
  );
};

export default Home;
