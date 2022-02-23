import { useContext } from 'react'
import { ContentfulContext } from '../Context/ContentfulContext'

import { motion } from 'framer-motion'

function Categories() {

    const [data, category, setCategory] = useContext(ContentfulContext)

    const catVariants={
        hover: {
            scale: 1.25
        },
        tap: {
            scale: .9
        }
    }

    return (
        <div className='bg-primary mb-8 max-w-4xl rounded-full mx-auto flex flex-row justify-evenly py-3 ring-2 ring-white ring-offset-2 ring-offset-dark'>
            <motion.button onClick={()=>setCategory("drinks")} variants={catVariants} whileHover="hover" whileTap="tap" className={`${category==="drinks"? "text-4xl font-bold text-light opacity-100" : "text-2xl text-dark opacity-90 font-semibold"}`}>Drinks</motion.button>
            <motion.button onClick={()=>setCategory("pizzas")} variants={catVariants} whileHover="hover" whileTap="tap" className={`${category==="pizzas"? "text-4xl font-bold text-light opacity-100" : "text-2xl text-dark opacity-90 font-semibold"}`}>Pizza</motion.button>
            <motion.button onClick={()=>setCategory("extras")} variants={catVariants} whileHover="hover" whileTap="tap" className={`${category==="extras"? "text-4xl font-bold text-light opacity-100" : "text-2xl text-dark opacity-90 font-semibold"}`}>Extras</motion.button>
        </div>
    )
}

export default Categories