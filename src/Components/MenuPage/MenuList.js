import { useContext } from 'react'
import { ContentfulContext } from '../../Context/ContentfulContext'

import MenuItem from "./MenuItem"
import { motion, AnimatePresence } from "framer-motion"

function MenuList() {

    const {data, error} = useContext(ContentfulContext)

    return(
        <AnimatePresence>
            <motion.div
            className="grid grid-cols-2 gap-3 md:grid-cols-4 lg:grid-cols-5 md:px-20">

                {error && <p>{error.message}</p> }
                {data && data.map(item=> <MenuItem key={item.sys.id} data={item.fields} />) }

            </motion.div>
        </AnimatePresence>
        
    )
    
 
}

export default MenuList