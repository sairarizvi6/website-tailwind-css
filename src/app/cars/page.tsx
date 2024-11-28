import React from 'react';

const Cars = () => {
  const carData = [
    { id: 1, name: 'McLaren', price: 12000, description: 'Luxury car', image: '/pic7.png' },
    { id: 2, name: 'Aston Martin', price: 8000, description: 'Sporty design', image: '/pic 2.png' },
    { id: 3, name: 'Lamborghini', price: 7000, description: 'Bold and rugged', image: '/pic 3.png' },
    { id: 4, name: 'Koenigsegg', price: 25000, description: 'Elegant stylis piece', image: '/pic 4.jpg' },
    { id: 5, name: 'Cadillac', price: 5000, description: 'Sporty and stylish', image: '/pic 5.png' },
    { id: 6, name: 'Rolls-Royce ', price: 1000, description: 'Affordable and reliable', image: '/pic7.png' },
  ];

  return (
    <div className="cars grid grid-cols-1 md:grid-cols-3 gap-10 px-10 my-10">
      {carData.map(car => (
        <div key={car.id} className="car-card bg-green-300 p-5 rounded-md shadow-md text-center">
          <img src={car.image} alt={car.name} className="w-full rounded-md transition-transform duration-300 transform hover:scale-110" />
          <h3 className="mt-4 text-2xl font-bold">{car.name}</h3>
          <p className="text-fuchsia-600 font-bold">{car.description}</p>
          <div className="price text-orange-500 text-xl font-semibold mt-2">${car.price}</div>
          <button className="mt-4 px-4 py-2 bg-blue-500 text-white rounded-md">Add to Cart</button>
        </div>
      ))}
    </div>
  );
};

export default Cars;