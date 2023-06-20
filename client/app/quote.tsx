'use client';
import React from 'react';

export default function RandomQuote({color}: {color: string}) {
  const quotes = [
    'La vie est un mystère qu\'il faut vivre, et non un problème à résoudre.',
    'Le plus grand risque est de ne prendre aucun risque.',
    'Le succès c\'est d\'aller d\'échec en échec sans perdre son enthousiasme.',
    'Le meilleur moyen de prédire l\'avenir, c\'est de le créer.',
    'Le succès c\'est tomber sept fois, se relever huit.',
    'Le succès c\'est d\'aller d\'échec en échec sans perdre son enthousiasme.',
    'Le succès c\'est d\'aller d\'échec en échec sans perdre son enthousiasme.',
  ];

  React.useEffect(() => {
    const timer = setInterval(() => {
      setQuote(getRandomQuote());
    }, 60000);
    return function cleanup() {
      clearInterval(timer);
    }
  });
  
  const getRandomQuote = () => {
    const randomIndex = Math.floor(Math.random() * quotes.length);
    return quotes[randomIndex];
  };

  const [quote, setQuote] = React.useState(getRandomQuote());


  return (
    <div id="quote">
      <div className="image-container card">
        <div className="card-before" style={{ backgroundColor: color }}></div>
        <p>{quote}</p>
      </div>
    </div>
  )
}