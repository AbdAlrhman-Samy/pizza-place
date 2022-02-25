import {motion} from "framer-motion"
import GalleryProvider from "../Context/GalleryContext"

import ImageList from "../Components/GalleryPage/ImageList"

function Gallery() {

  return (
    <motion.div key="gallery" initial={{x:1000}} exit={{opacity: 0}} animate={{x:0}} transition={{duration:.35, type:"spring"}} className="min-h-screen">

      <GalleryProvider>

        <ImageList/>

      </GalleryProvider>

    </motion.div>
  )
}

export default Gallery