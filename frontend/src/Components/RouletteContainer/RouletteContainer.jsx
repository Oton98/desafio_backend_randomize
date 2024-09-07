import React, { useState } from 'react';
import { callNumber } from '../../services/buttonRandom.js';
import { Roulette } from '../Roulette/Roulette.jsx'

export const RouletteContainer = () => {
    const [number, setNumber] = useState('');
    const [rotationAngle, setRotationAngle] = useState(0)

    const rollRoulette = (number) => {
        const numberAngle = (number * 3.6 * -1) + 3.6 + 1080; // le tengo que sumar un 3.6 porque la ruleta comienza en 1, no en 0
        setRotationAngle(numberAngle);
    };;

    const handleClick = async () => {
        const number = await callNumber();
        rollRoulette(number);
        setNumber(number);
    };

    return (
        <div className='container'>
            <Roulette rotationAngle={rotationAngle}></Roulette>
            <div className='container-buttons'>
                <button className='spin-button' onClick={handleClick}>
                    ¡Gire la ruleta!
                </button>
                <input type="text" className='random-number-text' value={number} readOnly />
            </div>
        </div>
    );
};
