import React from 'react';
import AboutSection from '../components/AboutSection';
import ContactBanner from '../components/ContactBanner';
import HeroSection from '../components/HeroSection';
import ProjectsSection from '../components/ProjectsSection';
import SocialMediaSection from '../components/SocialMediaSection';

export default function Home() {
  return (
    <div>
      <HeroSection />
      <AboutSection />
      <SocialMediaSection />
      <ProjectsSection />
      <ContactBanner />
    </div>
  );
}
