import Header from "../Components/HomePage/Header";
import Restaurant from "../Components/HomePage/Restaurant";

import {motion} from "framer-motion"

function Home() {
    
    return (
        <motion.div initial={{x:1000}} exit={{x:-1000}} animate={{x:0}}>
            <Header/>
            <Restaurant/>
        </motion.div>
    );
}

export default Home;
