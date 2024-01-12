import Container from "@/components/Container";
import SkillsCard, { SkillCardProps } from "@/components/SkillsCard";
import TextSection from "@/components/TextSection";
import Image from "next/image";
import React from "react";

const About = () => {
  
  return (
    <Container narrow={true}>
      <div className="hero-section__section">
        <div slot=".hero-section__text ">
          <h1>Patrick Aiko</h1>
          <p>
            I am a self taught developer from Uganda. Currently doing work
            related to computing at chrysalis secondary school
          </p>
        </div>
        <div className="hero-section__image">
          <Image
            src="/images/profile.jpg"
            width={400}
            height={300}
            alt="Patrick Aiko"
          />
        </div>
      </div>
      <TextSection>
        <div></div>
      </TextSection>
    </Container>
  );
};

export default About;
