import Header from "../Components/HomePage/Header";
import Restaurant from "../Components/HomePage/Restaurant";

import {motion} from "framer-motion"

function Home() {
    
    return (
        <motion.div key="home" initial={{x:1000}} exit={{opacity: 0}} animate={{x:0}} transition={{duration:.35, type:"spring", }}>
            <Header/>
            <Restaurant/>
        </motion.div>
    );
}

export default Home;
