import Hero from '@/components/hero';
import performanceImg from '/public/performance.jpg';
import React from 'react';

const PerformancePage: React.FC = () => {
  return (
    <Hero imgData={performanceImg} imgAlt='welding sparks' title='We serve high performance application' />
  );
}

export default PerformancePage;