'use client'

import HeroSection from "../components/about/HeroSection";
import MissionSection from "../components/about/MissionSection";
import ValuesSection from "../components/about/ValuesSection";
import TeamSection from "../components/about/TeamSection";
import WideImage from "../components/about/WideImageSection";

export default function About() {
  return (
    <div className="bg-white dark:bg-gray-900">
      <HeroSection />
      <MissionSection />
      <WideImage/>
      <ValuesSection />
      <TeamSection />
    </div>
  );
}
