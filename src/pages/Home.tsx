import React from 'react';
import Hero from '../components/home/Hero';
import ServicesSection from '../components/home/ServicesSection';
import HowItWorks from '../components/home/HowItWorks';
import Testimonials from '../components/home/Testimonials';

const Home: React.FC = () => {
  return (
    <div className="min-h-screen">
      <Hero />
      <HowItWorks />
      <ServicesSection />
      <Testimonials />
    </div>
  );
};

export default Home;