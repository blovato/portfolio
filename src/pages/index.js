import React from "react";
import {
  AboutSection,
  ContactSection,
  HeroSection,
  InterestsSection,
  Page,
  ProjectsSection,
  Seo,
} from "gatsby-theme-portfolio-minimal";

export default function IndexPage() {
  return (
    <>
      <Seo title="Brenten Lovato" />
      <Page>
        <HeroSection sectionId="hero" />
        <AboutSection sectionId="about" heading="About Me" />
        <InterestsSection sectionId="services" heading="Services" />
        <ProjectsSection sectionId="projects" heading="Past Work" />
        <ContactSection sectionId="contact" heading="Let's Connect 🤝" />
      </Page>
    </>
  );
}
