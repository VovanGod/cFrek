import React from 'react';
import { motion } from 'framer-motion';
import Header from '../components/Header';
import ContentRating from '../components/ratingPage/ContentRating';

const Rating = () => {
    return (
        <motion.div className=''
            initial={{opacity: 0}}
            animate={{opacity: 1}}
            exit={{opacity: 0}}
        >
            <Header title={"Рейтинг"}/>
            <ContentRating/>
        </motion.div>
    );
};

export default Rating;