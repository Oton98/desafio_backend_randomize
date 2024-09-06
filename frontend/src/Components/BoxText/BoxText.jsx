import React from 'react';

export const BoxText = ({number}) => {
    return (
        <>
            <input type="text" className='container-input-text' value={number} readOnly/>
        </>
    );
}

