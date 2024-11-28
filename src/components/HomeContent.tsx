"use client";

import React from 'react';
import AOS from 'aos';
import { useEffect } from 'react';
import 'aos/dist/aos.css';

const HomeContent = () => {
  useEffect(() => {
    AOS.init({
      duration: 1000, 
      once: true,     
    });
  }, []);
  return (
    <section className="hero h-screen flex items-center bg-cover bg-center" style={{ backgroundImage: "url('/pic 6.jpg')" }}>
      <div className="pl-0 md:pl-16 text-lime-300 text-center">
        <h1 className="text-6xl font-bold drop-shadow-md" data-aos="fade-up">Welcome to Car World</h1>
        <p className="text-2xl mt-4">Your one-stop shop for the best cars</p>
        <button className="mt-6 px-6 py-3 bg-blue-500 hover:bg-blue-700 rounded-md font-bold">Shop Now</button>
      </div>
    </section>
  );
};

export default HomeContent;