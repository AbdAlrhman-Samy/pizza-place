import MenuItem from "./MenuItem"
import { motion, AnimatePresence } from "framer-motion"

function MenuList({category}) {

    const pizzas = ['Cheesy', 'Chicken BBQ', 'Veggie', 'Pepperoni', 'Margherita', 'Hawaiian']
    const drinks = ['CocaCola', 'Pepsi', 'Miranda', 'Fayrouz', 'Tea', 'Cofee', 'Water']
    const extras = ['Cheescake', 'also Cheesake', 'yup, Cheescake', 'guess what, Cheescake', 'help']

    return(
        <AnimatePresence>
            <motion.div
            className="grid grid-cols-2 gap-3 md:grid-cols-4 lg:grid-cols-5">
                {category==="pizza" && pizzas.map(pizza=> <MenuItem title={pizza} category={category} key={pizza} />)}
                {category==="drinks" && drinks.map(drink=> <MenuItem title={drink} category={category} key={drink} />)}
                {category==="extras" && extras.map(extra=> <MenuItem title={extra} category={category} key={extra} />)}
            </motion.div>
        </AnimatePresence>
        
    )
    
 
}

export default MenuList