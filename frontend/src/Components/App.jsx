import './app.scss';

import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { Footer } from './Footer/Footer';
import { Navbar } from './Navbar/Navbar';
import { Body } from './Body/Body';

export const App = () => {
  return (
    <div>
      <Navbar></Navbar>
      <Body></Body>
      <Footer></Footer>
    </div>
  );
}

