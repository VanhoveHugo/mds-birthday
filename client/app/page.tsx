
'use client'

import { useEffect, useState } from 'react';
import { DateTime } from 'luxon';
import RandomIcon from './icon';

export default function Home() {
  const colors = ['#DF80AC', '#579FF4', '#FCB325', '#098E27'];
  let randomColor = colors[Math.floor(Math.random() * colors.length)];

  const options = { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric' };
  const [date, setDate] = useState(DateTime.now());

  useEffect(() => {
    const timer = setInterval(() => {
      setDate(DateTime.now());
    }, 60000);
    return function cleanup() {
      clearInterval(timer);
    }
  }
  );

  return (
    <>
      <header>
        <h1>Citation et anniversaires</h1>
        <p>{date.setLocale('fr').toFormat("cccc LL LLLL y T")}</p>
      </header>
      <main style={{ backgroundColor: randomColor }}>
        <div className="name">
          <div className="birth-picture">
            <img src="/images/circle.svg" alt="Image Description" />
          </div>
          <div className="stars-container">
            <img className="star" src="/images/star.svg" alt="Star" />
            <img className="star2" src="/images/star.svg" alt="Star" />
            <img className="star3" src="/images/star.svg" alt="Star" />
          </div>
        </div>
        <div className="text">
          <RandomIcon color={randomColor} />
        </div>
      </main>
    </>
  )
}
