import React from 'react';
import { Html } from '@react-three/drei';
import { FaHourglassHalf } from 'react-icons/fa';

const Loader = () => {
  return (
    <Html>
      <div className="flex justify-center items-center">
        <FaHourglassHalf className="w-10 h-10 animate-spin text-blue-500" />
      </div>
    </Html>
  );
};

export default Loader;