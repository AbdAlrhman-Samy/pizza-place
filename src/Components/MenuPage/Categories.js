import { useContext } from 'react'
import { ContentfulContext } from '../../Context/ContentfulContext'

import { motion } from 'framer-motion'

function Categories() {

    const [data, content, setContent] = useContext(ContentfulContext)
    const categories = ['drinks', 'pizzas', 'extras']

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
            {categories.map(cat=>{
                return (
                    <motion.button key={cat} onClick={()=>setContent(cat)} variants={catVariants} whileHover="hover" whileTap="tap" className={`${content===cat? "text-3xl font-bold text-light opacity-100" : "text-xl text-dark opacity-90 font-semibold"}`}>{cat.toUpperCase()}</motion.button>
                )
            })}
           
        </div>
    )
}

export default Categories