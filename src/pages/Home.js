import React from 'react';
import AboutSection from '../components/AboutSection';
import HeroSection from '../components/HeroSection';
import SocialMediaSection from '../components/SocialMediaSection';

export default function Home() {
  return (
    <div>
      <HeroSection />
      <AboutSection />
      <SocialMediaSection />
    </div>
  );
}
