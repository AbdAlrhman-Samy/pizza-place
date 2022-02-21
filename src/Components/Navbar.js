import { useState } from 'react'
import { Link, useLocation } from 'react-router-dom';

import { motion, AnimatePresence } from 'framer-motion';

import { AiOutlineMenu, AiOutlineClose } from "react-icons/ai";
import { IoPizzaOutline } from "react-icons/io5";

function Navbar() {

    const [open, setOpen] = useState(false)

    const location = useLocation()
    
    const navVariants = {
        whileTap: {
            scale:0.9,
            transition:{duration: 0.35}
        }
    }

  return (
    <nav className='absolute w-full text-light md:bg-dark
    md:px-20 py-1 flex md:flex-row flex-col md:justify-between justify-center items-center z-50'>

        <div className='md:w-max md:block w-full flex justify-between px-7 py-3'>
            <Link to="/" className='text-2xl font-extrabold '> <IoPizzaOutline className='inline text-primary text-4xl'/>KrustyKrab</Link>

            <motion.button whileTap={{scale: 0.9, rotate: 45}} whileHover={{scale:1.1}} onClick={()=>setOpen(!open)} aria-label="navigation menu button"
            className='p-2 ring-2 ring-primary md:hidden w-fit ml-auto mr-0'>{open? <AiOutlineClose/> : <AiOutlineMenu/>}</motion.button>
        </div>

        
        <div className='hidden w-80 flex-row justify-evenly gap-6 text-center md:flex font-bold'>
            <Link to="/"><motion.button variants={navVariants} whileTap="whileTap" className={`${location.pathname==="/"? "font-bold text-primary" : "hover:text-primary"}`} aria-label="navigation home page button" >Home</motion.button></Link>
            <Link to="/menu"><motion.button variants={navVariants} whileTap="whileTap" className={`${location.pathname==="/menu"? "font-bold text-primary" : "hover:text-primary"}`} aria-label="navigation menu page button" >Menu</motion.button></Link>
            <Link to="/gallery"><motion.button variants={navVariants} whileTap="whileTap" className={`${location.pathname==="/gallery"? "font-bold text-primary" : "hover:text-primary"}`} aria-label="navigation gallery page button" >Gallery</motion.button></Link>            
        </div>

        
        <AnimatePresence>
            {open && 
            <motion.div 
            key="menu"
            exit={{x: -1000}}
            initial={{x: -1000}}
            animate={{x: [-1000, 0]}}
            transition={{duration:0.25}}
            className='flex flex-col justify-center text-center bg-dark text-light gap-10 md:hidden text-5xl h-full py-12 w-full px-10 border-b-2 border-primary'>

                <Link to="/"><motion.button onClick={()=>setOpen(false)} variants={navVariants} whileTap="whileTap" className={`${location.pathname==="/"? "font-bold text-primary" : "hover:text-primary"}`} aria-label="navigation home page button" >Home</motion.button></Link>
                <Link to="/menu"><motion.button onClick={()=>setOpen(false)} variants={navVariants} whileTap="whileTap" className={`${location.pathname==="/menu"? "font-bold text-primary" : "hover:text-primary"}`} aria-label="navigation menu page button">Menu</motion.button></Link>
                <Link to="/gallery"><motion.button onClick={()=>setOpen(false)} variants={navVariants} whileTap="whileTap" className={`${location.pathname==="/gallery"? "font-bold text-primary" : "hover:text-primary"}`} aria-label="navigation gallery page button">Gallery</motion.button></Link>

            </motion.div>
            }
        </AnimatePresence>


    </nav>
  )
}

export default Navbar