import {useState} from 'react'

import Categories from "../Components/MenuPage/Categories"
import MenuList from "../Components/MenuPage/MenuList"

import {motion} from "framer-motion"

function Menu() {

    const [category, setCategory] = useState("pizza")


    return (
        <motion.div key="menu" initial={{y:1000}} exit={{opacity: 0}} animate={{y:0}} transition={{duration:.15, type:"spring", stiffness:100}}
        className="min-h-screen text-light relative py-32 px-5">
            <Categories setCategory={setCategory} category={category} />
            <MenuList category={category}/>
            
        </motion.div>
    )
}

export default Menu