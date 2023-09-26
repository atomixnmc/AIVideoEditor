import { Box } from '@chakra-ui/react';
import LandingLayout from '../components/layout/LandingLayout';
import PricingSection from '../components/landing/PricingSection';

export default function LandingPage({ user }) {
  return (
    <LandingLayout>
      <PricingSection />
    </LandingLayout>
  );
}
