import React from 'react';
import { motion } from 'framer-motion';

const Timetable = () => {
    return (
        <motion.div className='timetable'
            initial={{opacity: 0}}
            animate={{opacity: 1}}
            exit={{opacity: 0}}
        >
            vjoigvkljoij
        </motion.div>
    );
};

export default Timetable;