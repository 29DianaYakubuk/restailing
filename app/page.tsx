import HeroSection from '@/components/home/HeroSection';
import AboutSection from '@/components/home/AboutSection';
import ReviewsSlider from '@/components/home/ReviewsSlider';
import ServiceAreaMap from '@/components/home/ServiceAreaMap';
import GetEstimateSection from '@/components/home/GetEstimateSection';

export default function HomePage() {
  return (
    <>
      <HeroSection />
      <AboutSection />
      <ReviewsSlider />
      <ServiceAreaMap />
      <GetEstimateSection />
    </>
  );
}
