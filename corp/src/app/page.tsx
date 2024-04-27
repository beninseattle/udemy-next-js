import Hero from '@/components/hero';
import homeImg from '/public/home.jpg';
import React from 'react';

const HomePage: React.FC = () => {
  return (
    <Hero imgData={homeImg} imgAlt='car factory' title='Professional Cloud Hosting' />
  );
}

export default HomePage;