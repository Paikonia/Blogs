import FeaturedCard from "@/components/FeaturedCard";
import Hero from "@/components/Hero";


const Profile = 'https://media.licdn.com/media/AAYQAQSOAAgAAQAAAAAAAB-zrMZEDXI2T62PSuT6kpB6qg.png'


export default function Home() {
  
  return (
    <main className="flex min-h-screen flex-col items-center justify-start p-24">
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
    </main>
  );
}
