import FeaturedCard from "@/components/FeaturedCard";
import Hero from "@/components/Hero";
import { getMostRecents } from "@/lib/functions";

const Profile =
  "https://media.licdn.com/media/AAYQAQSOAAgAAQAAAAAAAB-zrMZEDXI2T62PSuT6kpB6qg.png";

export default function Home() {
  const mostRecent = getMostRecents();
  return (
    <main className="flex min-h-screen flex-col items-center justify-start p-24">
      <div>
        <Hero />
        <div className="feature-card__section">
          <h2 className="hero-section__heading">Recent Posts</h2>
          <div className="feature-card__grid">
            {
              mostRecent.map((post) => (
                <FeaturedCard
                  key={post.id}
                  title={post.title}
                  href={post.href} 
                  imgSrc={post.featuredImage}
                  />))
              }
          </div>
        </div>
      </div>
    </main>
  );
}
