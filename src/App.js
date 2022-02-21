import React from 'react';
import Navbar from './Components/Navbar';
import Footer from './Components/Footer';
import { useState } from 'react';

import { Routes, Route } from "react-router-dom";

import { AnimatePresence } from 'framer-motion';


const Home = React.lazy(() => import("./Pages/Home"));
const Menu = React.lazy(() => import("./Pages/Menu"));
const Gallery = React.lazy(() => import("./Pages/Gallery"));


function App() {

  return (
    <div className="App bg-dark min-h-screen overflow-x-hidden overflow-y-hidden">

      <Navbar/>

      <AnimatePresence exitBeforeEnter="true">
        <Routes>
          <Route path='/' element={<React.Suspense fallback={<h1 className='text-7xl text-primary text-center py-52'>Loading Content</h1>}><Home /></React.Suspense>}/>
          <Route path='/menu' element={<React.Suspense fallback={<h1 className='text-7xl text-primary text-center py-52'>Loading Content</h1>}><Menu /></React.Suspense>}/>
          <Route path='/gallery' element={<React.Suspense fallback={<h1 className='text-7xl text-primary text-center py-52'>Loading Content</h1>}><Gallery /></React.Suspense>}/>
        </Routes>
      </AnimatePresence>
      
      <Footer/>

    </div>

  );
}

export default App;
