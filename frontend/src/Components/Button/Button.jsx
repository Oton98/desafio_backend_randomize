import React from 'react';

export const Button = ({handleClick}) => {

    return (
        <button className='primary-button' id='rouletteButton' onClick={handleClick}>
            ¡Gire la ruleta!
        </button>
    );
}

