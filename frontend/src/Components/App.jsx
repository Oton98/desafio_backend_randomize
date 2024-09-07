import './app.scss';

import React from 'react';
import { RouletteContainer } from './RouletteContainer/RouletteContainer';
import { Footer } from './Footer/Footer';
import { Navbar } from './Navbar/Navbar';

export const App = () => {
  return (
    <div>
      <Navbar></Navbar>
      <div className='container'>
            <RouletteContainer/>
        </div>
      <Footer></Footer>
    </div>
  );
}

