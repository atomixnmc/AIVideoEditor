import { Box } from '@chakra-ui/react';
import FocusLayout from '../components/layout/FocusLayout';
import PricingSection from '../components/landing/PricingSection';

export default function LandingPage({ user }) {
  return (
    <FocusLayout>
      <PricingSection />
    </FocusLayout>
  );
}
