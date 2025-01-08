import React, { useEffect, useState } from 'react';
import heroBanner from "../assets/ship.jpg";
import Logistics from '../components/Logistics';
import Support from '../components/Support';
import Steps from '../components/Steps';
import Testimonial from '../components/Essentials/Testimonial';
import DailyStats from '../components/Essentials/DailyStats';
import PerService from '../components/Essentials/PerService';
import Partners from '../components/Partners';
import Hero from '../components/Hero'

const Home = () => {
 
  return (
    <div className="bg-gray-100 overflow-x-hidden">
        <Hero />
        <Logistics />
        <Support />
        <Steps />
        <Testimonial />
        <DailyStats />
        <PerService />
        <Partners />
      
    </div>
  );
};

export default Home;
