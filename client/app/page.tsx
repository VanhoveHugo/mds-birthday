'use client'

import { useEffect, useState } from 'react';
import { DateTime } from 'luxon';
import RandomIcon from './icon';
import RandomQuote from './quote';

export default function Home() {
  const colors = ['#DF80AC', '#579FF4', '#FCB325', '#098E27'];
  let randomColor = colors[Math.floor(Math.random() * colors.length)];

  const [date, setDate] = useState(DateTime.now().setLocale('fr').toFormat("cccc LL LLLL y T"));

  const [data, setData] = useState([ 
    { name: 'Jean' },
    { name: 'Pierre' } 
  ]);
  
  let [iterator, setIterator] = useState(0);

  useEffect(() => {
    if(iterator == data.length) setIterator(0);
  }, [iterator]);

  useEffect(() => {
    const timer = setInterval(() => {
      setDate(DateTime.now().setLocale('fr').toFormat("cccc LL LLLL y T"));
      if(data.length != 0) setIterator(iterator => iterator + 1);
    }, 60000);
    return function cleanup() {
      clearInterval(timer);
    }
  });

  return (
    <>
      <header>
        <h1>Citation et anniversaires</h1>
        <p>{date}</p>
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
          <div className='list'>
            {data.map((item, index) => (
              <div key={index} className={iterator == index ? "active" : ""}>
                <p>{item.name}</p>
              </div>
            ))}
          </div>
        </div>
        <div className="text">
          <RandomQuote color={randomColor} />
          <RandomIcon color={randomColor} />
          <div className="progress-bar">
            <p className='prev'>{iterator + 1}</p>
            <div className="progress-bar-background"></div>
            <div className="progress" style={{ backgroundColor: randomColor }}></div>
            <p className='next'>
              {iterator + 2 > data.length ? 1 : iterator + 2}
            </p>
          </div>
        </div>
      </main>
    </>
  )
}
