import Hero from '@/components/hero';
import reliabilityImg from '/public/reliability.jpg';
import React from 'react';

const ReliabilityPage: React.FC = () => {
  return (
    <Hero imgData={reliabilityImg} imgAlt='welding' title='Super high reliability hosting' />
  );
}

export default ReliabilityPage;