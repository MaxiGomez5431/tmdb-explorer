import { useState, useEffect } from 'react';

export default function Genres({ score, ...props }) {
  const [roundedScore, setRoundedScore] = useState(() => roundScore(score));

  function roundScore(score) {
    let half = score / 2;
    let result = Math.ceil(half);
    return result;
  }

  useEffect(() => {
    setRoundedScore(roundScore(score));
  }, [score]);

  
  const stars = [];
  for (let i = 0; i < 5; i++) {
    if (i < roundedScore) {
      stars.push(<i key={i} className="fa-solid fa-star"/>);
    } else {
      stars.push(<i key={i} className="fa-regular fa-star"/>);
    }
  }

  return (
    <div {...props}>
      <div>{stars}</div> {/* Mostrar las estrellas */}
    </div>
  );
}