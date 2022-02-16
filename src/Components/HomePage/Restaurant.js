import {motion} from "framer-motion"

function Restaurant() {

  const imageVariants = {
    whileHover: {
      scale:1.05,
      rotate:2
    },
    whileTap: {
      scale:1.05
    }
  }

  return (
    <section 
    className='bg-primary grid md:gap-4 gap-3 md:grid-cols-3 md:grid-rows-3 grid-cols-2 grid-rows-3 md:p-10 p-1 h-screen items-center text-secondary'>

        <div className='font-bold text-center text-7xl order-1'>So... 👀</div>

        <motion.div variants={imageVariants} whileHover="whileHover" whileTap="whileTap" className='hover:shadow-xl hover:shadow-dark bg-p1 bg-cover bg-center h-full rounded-lg shadow-md shadow-dark order-2'></motion.div>
        <motion.div variants={imageVariants} whileHover="whileHover" whileTap="whileTap" className='hover:shadow-xl hover:shadow-dark bg-p2 bg-cover bg-center h-full rounded-lg shadow-md shadow-dark order-3'></motion.div>
        <motion.div variants={imageVariants} whileHover="whileHover" whileTap="whileTap" className='hover:shadow-xl hover:shadow-dark bg-p3 bg-cover bg-center h-full rounded-lg shadow-md shadow-dark order-4'></motion.div>

        <div className='text-center md:order-5 order-3'>
            <h3 className='font-bold text-center md:text-5xl text-4xl'>We heard you like Pizza 😉</h3>
        </div>

        <motion.div variants={imageVariants} whileHover="whileHover" whileTap="whileTap" className='hover:shadow-xl hover:shadow-dark bg-p4 bg-cover bg-center h-full rounded-lg shadow-md shadow-dark order-6'></motion.div>
        <motion.div variants={imageVariants} whileHover="whileHover" whileTap="whileTap" className='hover:shadow-xl hover:shadow-dark bg-p5 bg-cover bg-center h-full rounded-lg shadow-md shadow-dark order-7'></motion.div>
        <motion.div variants={imageVariants} whileHover="whileHover" whileTap="whileTap" className='hover:shadow-xl hover:shadow-dark bg-p6 bg-cover bg-center h-full rounded-lg shadow-md shadow-dark order-8'></motion.div>

        <div className='font-bold text-center text-xl md:order-9 order-3'>
            <motion.button animate={{rotate: [0, 3, -3, 0]}} transition={{repeat: Infinity, repeatDelay:2}} 
            className=' border-primary border-2 shadow-lg shadow-dark p-2 rounded-xl font-semibold bg-secondary text-light'>Check out the Menu</motion.button>
        </div>

    </section>
  )
}

export default Restaurant