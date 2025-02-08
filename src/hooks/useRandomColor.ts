import { useState, useEffect } from 'react';

function generateRandomColor(): string {
  const colors = [
    'from-purple-600 to-blue-500',
    'from-blue-500 to-teal-400',
    'from-teal-400 to-green-500',
    'from-green-500 to-yellow-400',
    'from-red-500 to-pink-500',
    'from-pink-500 to-purple-500',
  ];
  return colors[Math.floor(Math.random() * colors.length)];
}

export function useRandomColor(interval = 3000) {
  const [color, setColor] = useState(generateRandomColor());

  useEffect(() => {
    const timer = setInterval(() => {
      setColor(generateRandomColor());
    }, interval);

    return () => clearInterval(timer);
  }, [interval]);

  return color;
}
