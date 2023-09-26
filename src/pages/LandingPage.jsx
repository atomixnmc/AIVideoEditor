import { Box } from '@chakra-ui/react';
import LandingLayout from '../components/layout/LandingLayout';
import HeroSection from '../components/landing/HeroSection';
import HeroSection1 from '../components/landing/HeroSection1';
import FeaturesCards from '../components/landing/FeaturesCards';
import Testimonials from '../components/landing/Testimonials';

export default function LandingPage({ user }) {
  return (
    <LandingLayout>
      <HeroSection />
      <HeroSection1 />
      <FeaturesCards />
      <Testimonials />
      <Testimonials />
    </LandingLayout>
  );
}
