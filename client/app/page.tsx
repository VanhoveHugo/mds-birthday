import { useEffect } from 'react';
import RandomIcon from './icon';
import React from 'react';

export default function Home() {
  const colors = ['#DF80AC', '#579FF4', '#FCB325', '#098E27'];
  const randomColor: string = colors[Math.floor(Math.random() * colors.length)];

  return (
    <>
      <header>
        <h1>Citation et anniversaires</h1>
        <p>date</p>
      </header>
      <main style={{ backgroundColor: randomColor }}>
        <div className="name">
        </div>
        <div className="text">
          <RandomIcon color={randomColor} />
        </div>
      </main>
    </>
  )
}
