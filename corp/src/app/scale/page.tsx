import Hero from '@/components/hero';
import scaleImg from '/public/scale.jpg';
import React from 'react';

const ScalePage: React.FC = () => {
  return (
    <Hero imgData={scaleImg} imgAlt='steel factory' title='Scale your app to infinity' />
  );
}

export default ScalePage;