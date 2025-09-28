import { Hero } from '@/components/sections/Hero';
import { About } from '@/components/sections/About';
import { Paths } from '@/components/sections/Paths';
import { HowItWorks } from '@/components/sections/HowItWorks';
import { Features } from '@/components/sections/Features';
import { Testimonials } from '@/components/sections/Testimonials';
import { Privacy } from '@/components/sections/Privacy';
import { CTA } from '@/components/sections/CTA';
import { RootLayout } from '@/components/layout/RootLayout';

export default function Home() {
  return (
    <RootLayout dir="rtl">
      <Hero />
      <About />
      <Paths />
      <HowItWorks />
      <Features />
      <Testimonials />
      <Privacy />
      <CTA />
    </RootLayout>
  );
}
