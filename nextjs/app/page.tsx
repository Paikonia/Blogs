import { TechnicalSkills, languages } from "@/assets/Briefs";
import Container from "@/components/Container";
import FeaturedCard from "@/components/FeaturedCard";
import Hero from "@/components/Hero";
import SkillsCard, { SkillCardProps } from "@/components/SkillsCard";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import { getMostRecents } from "@/lib/functions";

const Profile =
  "https://media.licdn.com/media/AAYQAQSOAAgAAQAAAAAAAB-zrMZEDXI2T62PSuT6kpB6qg.png";

export default function Home() {
  const mostRecent = getMostRecents();
  return (
    <main className="flex min-h-screen flex-col items-center justify-start p-24">
      <Container narrow={true}>
        <Hero />
        <div className="feature-card__section">
          <h3 className="hero-section__heading">Recent Posts</h3>
          <div className="feature-card__grid">
            {mostRecent.map((post) => (
              <FeaturedCard
                key={post.id}
                title={post.title}
                href={post.href}
                imgSrc={post.featuredImage}
              />
            ))}
          </div>
        </div>
        <div className="feature-card__section">
          <h4>Languages</h4>
          <Carousel className="w-full p-2">
            <CarouselContent className="w-full p-4">
              {languages.map((skill) => (
                <CarouselItem className="basis-1/2" key={skill.title}>
                  <SkillsCard
                    title={skill.title}
                    description={skill.description}
                    Proficiency={skill.Proficiency}
                  />
                </CarouselItem>
              ))}
            </CarouselContent>
            <CarouselPrevious />
            <CarouselNext />
          </Carousel>
        </div>
        <div className="feature-card__section">
          <h4>Technical skills</h4>
          <Carousel className="w-full p-2">
            <CarouselContent className="w-full p-4">
              {TechnicalSkills.map((skill) => (
                <CarouselItem className="basis-1/2" key={skill.title}>
                  <SkillsCard
                    title={skill.title}
                    description={skill.description}
                    Proficiency={skill.Proficiency}
                  />
                </CarouselItem>
              ))}
            </CarouselContent>
            <CarouselPrevious />
            <CarouselNext />
          </Carousel>
        </div>
      </Container>
    </main>
  );
}
