import React, { useState } from 'react';
import { motion } from 'framer-motion';
import Header from './layouts/Header';
import Footer from './layouts/Footer';
import { Route, Routes } from 'react-router-dom';
import Home from './pages/Home';

export default function App() {

  const [flipped, setFlipped] = useState(false);

  const handleClick = () => {
    setFlipped(!flipped);
  };

  return (

    <>
      <Header />

      <Routes>

        <Route path='/' element={<Home />} />

      </Routes>

      <Footer />
    </>

  )
}