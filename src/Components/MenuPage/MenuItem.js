import pizzaImg from "../../Static/pizza.webp"
import drinkImg from "../../Static/cola.webp"
import extrasImg from "../../Static/cheesecake.webp"

import {motion} from "framer-motion"

function MenuItem({title, category}) {
  return (
    <motion.div key={title} initial={{opacity:0}} exit={{opacity: 0}} animate={{opacity: 1}} transition={{duration:0.25}}
    className='flex flex-col justify-between max-w-xs bg-black rounded-lg shadow-sm shadow-primary py-3 md:px-5 px-2 items-center text-center'>
        <img src={category==="pizza"? pizzaImg : (category === "drinks" ? drinkImg : extrasImg)} alt="pizza" className='rounded-full mb-3'/>
        <div>
            <h6 className='text-xl font-bold'>{title}</h6>
            <span className='text-base font-semibold text-primary block'>20EGP</span>
            <span className='text-sm font-light'>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Dolores, temporibus.</span>
        </div>
    </motion.div>
  )
}

export default MenuItem