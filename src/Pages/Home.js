import Header from "../Components/HomePage/Header";
import Restaurant from "../Components/HomePage/Restaurant";

import {motion} from "framer-motion"

function Home() {
    
    return (
        <motion.div key="home" initial={{y:1000}} exit={{opacity: 0}} animate={{y:0}} transition={{duration:.25, type:"spring", stiffness:100}}>
            <Header/>
            <Restaurant/>
        </motion.div>
    );
}

export default Home;
