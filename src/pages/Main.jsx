import React from 'react';
import Header from '../components/Header';
import { motion } from 'framer-motion';
import ContentMain from '../components/mainPage/ContentMain';

const Main = () => {
    return (
        <motion.div
            initial={{opacity: 0}}
            animate={{opacity: 1}}
            exit={{opacity: 0}} 
        >
            <Header title={null}/>
            <ContentMain/>
            <div className="overlay"></div>
        </motion.div>
    );
};

export default Main;
