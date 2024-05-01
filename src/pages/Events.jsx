import React from 'react';
import { motion } from 'framer-motion';

const Events = () => {
    return (
        <motion.div className='events'
            initial={{opacity: 0}}
            animate={{opacity: 1}}
            exit={{opacity: 0}}
        >
            dlknjgopikljngoi
        </motion.div>
    );
};

export default Events;