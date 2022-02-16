import Navbar from './Components/Navbar';
import Footer from './Components/Footer';

import Home from './Pages/Home';
import Menu from './Pages/Menu';

import { useState } from 'react';

import { Routes, Route } from "react-router-dom";

function App() {

  const [loaded, setLoaded] = useState(false)

  window.addEventListener("load", ()=>{
    setLoaded(true)
  })



  return (
    loaded?
    <div className="App bg-dark min-h-screen">

      <Navbar/>
      
      <Routes>
        <Route path='/' element={<Home/>}/>
        <Route path='/menu' element={<Menu/>}/>
      </Routes>

      <Footer/>

    </div>

    :
    
    <div className='min-h-screen bg-dark text-center pt-72'>
      <h1 className='text-6xl text-light animate-pulse'>Loading Page</h1>
    </div>
  );
}

export default App;
