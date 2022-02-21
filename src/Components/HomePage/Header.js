import {motion} from "framer-motion"
import pizza from "../../Static/pizza-header.webp"

function Header() {
  return (
    <header className='min-h-[80vh] bg-headerbg bg-cover bg-center mx-auto bg-dark flex lg:flex-row gap-5 justify-center items-center flex-col pt-10'>

        <motion.div animate={{opacity:[0, 1]}} transition={{duration:1}} className='text-light px-3 lg:text-left text-center'>
            <h1 className='md:text-7xl text-5xl font-extrabold leading-tight md:mb-5'>KrustyKrab's Pizza</h1>
            <h3 className='md:text-xl text-lg font-extralight text-light/80'>It's <em className="text-primary">The Pizza</em> for you & me.</h3>
        </motion.div>

        <img src={pizza} alt="pizza" className='w-auto md:max-h-72 max-h-96'/>

    </header>
  )
}

export default Header