import React, { useState, useEffect } from 'react';
import { BoxText } from '../BoxText/BoxText';
import { Button } from '../Button/Button';
import { callNumber } from '../../utils/buttonRandom.js';
export const Interaction = () => {
    const [number, setNumber] = useState('');

    const handleClick = async () => {
        const number = await callNumber();
        setNumber(number);
    };

    return (
        <div className='container-interaction'>
            <Button onClick={handleClick} />
            <BoxText number={number} />
        </div>
    );
};
