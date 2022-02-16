import React from 'react'
import { motion } from 'framer-motion'

function Categories() {

    const catVariants={
        hover: {
            scale: 1.5
        }
    }

    return (
        <div className='bg-primary max-w-4xl rounded-full mx-auto flex flex-row justify-evenly py-3 ring-2 ring-white ring-offset-2 ring-offset-dark'>
            <motion.button variants={catVariants} whileHover="hover" className='text-2xl opacity-90 text-secondary font-semibold'>Drinks</motion.button>
            <motion.button variants={catVariants} whileHover="hover" className='text-4xl opacity-90 text-secondary font-bold '>Pizza</motion.button>
            <motion.button variants={catVariants} whileHover="hover" className='text-2xl opacity-90 text-secondary font-semibold'>Extras</motion.button>
        </div>
    )
}

export default Categories