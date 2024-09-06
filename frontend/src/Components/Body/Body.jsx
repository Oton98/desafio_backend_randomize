import React from 'react';

import { Roulette } from '../Roulette/Roulette';
import { Interaction } from '../Interactions/Interaction';

export const Body = () => {
    return (
        <div className='container'>
            <Roulette/>
            <Interaction/>
        </div>
    );
}


