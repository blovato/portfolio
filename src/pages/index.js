import React from "react";
import {
  AboutSection,
  ContactSection,
  HeroSection,
  InterestsSection,
  Page,
  Seo,
} from "gatsby-theme-portfolio-minimal";
import CustomProjectsSection from "../components/CustomProjectsSection";

export default function IndexPage() {
  return (
    <>
      <Seo title="Brenten Lovato" />
      <Page>
        <HeroSection sectionId="hero" />
        <AboutSection sectionId="about" heading="About Me" />
        <InterestsSection sectionId="services" heading="Services" />
        <CustomProjectsSection sectionId="projects" heading="Past Work" />
        <ContactSection sectionId="contact" heading="Let's Connect 🤝" />
      </Page>
    </>
  );
}
