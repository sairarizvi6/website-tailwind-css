import React from 'react';

const About = () => {
  return (
    <section className="about h-screen flex items-center justify-start bg-cover bg-center text-white px-10" style={{ backgroundImage: "url('/about-us-bg.png')" }}>
      <div className="bg-rose-950 bg-opacity-60 p-8 rounded-md max-w-lg">
        <h2 className="text-4xl font-bold mb-4" data-aos="fade-up">About Us</h2>
        <p>Welcome to Car World, where we believe a Car is more than just an item it is a statement of style, precision, and craftsmanship. Our mission is to bring you a diverse selection of premium unique body from around the globe, each chosen for its quality and unique design. Whether you are a connoisseur or simply appreciate the beauty of a well-made car, we are here to help you find the perfect piece to complement your personality and elevate your look.</p>
      </div>
    </section>
  );
};

export default About;