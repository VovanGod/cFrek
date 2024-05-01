import React from 'react';
import { motion } from 'framer-motion';

const Teachers = () => {
    return (
        <motion.div className='teachers'
            initial={{opacity: 0}}
            animate={{opacity: 1}}
            exit={{opacity: 0}}
        >
            jj87478hgn5678
        </motion.div>
    );
};

export default Teachers;