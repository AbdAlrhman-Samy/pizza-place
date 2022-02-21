import {motion} from "framer-motion"
function Gallery() {
  return (
    <motion.div initial={{x:1000}} exit={{x:-1000}} animate={{x:0}}>
        Gallery
    </motion.div>
  )
}

export default Gallery