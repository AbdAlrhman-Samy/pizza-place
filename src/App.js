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

  const [loaded, setLoaded] = useState(false)

  window.addEventListener("load", ()=>{
    setLoaded(true)
  })



  return (
    loaded?
    <div className="App bg-dark min-h-screen">

      <Navbar/>

      <AnimatePresence exitBeforeEnter>
        <Routes>
          <Route path='/' element={<React.Suspense fallback={<>...</>}><Home /></React.Suspense>}/>
          <Route path='/menu' element={<React.Suspense fallback={<>...</>}><Menu /></React.Suspense>}/>
          <Route path='/gallery' element={<React.Suspense fallback={<>...</>}><Gallery /></React.Suspense>}/>
        </Routes>
      </AnimatePresence>
      
      

      <Footer/>

    </div>

    :
    
    <div className='min-h-screen bg-dark text-center pt-72'>
      <h1 className='text-6xl text-light animate-pulse'>Loading Page</h1>
    </div>
  );
}

export default App;
