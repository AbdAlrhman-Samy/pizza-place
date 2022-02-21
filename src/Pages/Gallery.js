import {motion} from "framer-motion"
function Gallery() {
  return (
    <motion.div key="gallery" initial={{y:1000}} exit={{opacity: 0}} animate={{y:0}} transition={{duration:.25, type:"spring", stiffness:100}}
    className="py-52">
        <h1 className="text-7xl text-center text-primary">Nothing Here Yet</h1>
    </motion.div>
  )
}

export default Gallery