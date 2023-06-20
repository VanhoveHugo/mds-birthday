'use client';
import React from 'react';

export default function RandomIcon({color}: {color: string}) {
  const images = [
    'image1.svg',
    'image2.svg',
    'image3.svg',
    'image4.svg',
  ];

  const getRandomImage = () => {
    const randomIndex = Math.floor(Math.random() * images.length);
    return images[randomIndex];
  };

  const image = getRandomImage(); 
  
  return (
    <div id="icon">
      <div className="image-container card">
        <div className="card-before" style={{ backgroundColor: color }}></div>
        <img src={"/images/" + image} alt="image aléatoire" />
      </div>
    </div>
  )
}
