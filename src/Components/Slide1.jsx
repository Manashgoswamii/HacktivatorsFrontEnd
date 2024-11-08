import React from 'react';
import Button from './Button';

function Slide1() {
  return (
    <div className="flex justify-center items-center min-h-screen w-full bg-gray-100">
      <div className="text-center p-4">
        <h1 className="text-6xl text-customBlue font-semibold">TechWise Kids</h1>
        <p className="text-2xl text-black font-semibold mt-4">
          Nurturing Healthy Digital Habits: Focus
        </p>
        <p className="text-2xl text-black font-semibold">
          Balance, and Real-World Connections for Kids
        </p>
        <Button/>
      </div>
     
    </div>
  );
}

export default Slide1;
