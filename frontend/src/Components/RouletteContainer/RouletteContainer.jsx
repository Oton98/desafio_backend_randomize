import React, { useState, useEffect } from 'react';
import { callNumber } from '../../services/buttonRandom.js';
import { Roulette } from '../Roulette/Roulette.jsx'

export const RouletteContainer = () => {
    const [number, setNumber] = useState('');

    const handleClick = async () => {
        const number = await callNumber();
        setNumber(number);
    };

    return (
        <div className='container'>
            <Roulette></Roulette>
            <div className='container-buttons'>
                <button className='spin-button' onClick={handleClick}>
                    ¡Gire la ruleta!
                </button>
                <input type="text" className='random-number-text' value={number} readOnly />
            </div>
        </div>
    );
};
