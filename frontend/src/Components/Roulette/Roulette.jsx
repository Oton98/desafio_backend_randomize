import React from 'react';

export const Roulette = () => {

    const numbers = Array.from({ length: 100 }, (_, i) => i + 1);

    return (
        <div className="roulette">
          {numbers.map((number, i) => (
            <div
              key={i}
              className="circle-item"
              style={{
                transform: `rotate(${(i / numbers.length) * 360}deg) translateY(-50%)`,
                backgroundColor: number % 2 === 0 ? 'red' : 'black',
              }}
            >
              {number}
            </div>
          ))}
          <div className="center-circle"></div>
        </div>
      );
}


