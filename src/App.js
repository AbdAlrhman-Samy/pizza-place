import Navbar from './Components/Navbar';
import Header from './Components/Header';
import Restaurant from './Components/Restaurant';
import Footer from './Components/Footer';
import { useState } from 'react';

function App() {

  const [loaded, setLoaded] = useState(false)

  window.addEventListener("load", ()=>{
    setLoaded(true)
  })



  return (
    loaded?
    <div className="App bg-dark min-h-screen">
      <Navbar/>
      <Header/>
      <Restaurant/>
      <Footer/>
    </div>

    :
    
    <div className='min-h-screen bg-dark text-center pt-72'>
      <h1 className='text-6xl text-light animate-pulse'>Loading Page</h1>
    </div>
  );
}

export default App;
