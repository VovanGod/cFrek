import React from 'react';
import Header from '../components/Header';
import { motion } from 'framer-motion';
import NoticeCardWrapper from '../components/notice/NoticeCardWrapper';

const Notifications = () => {
    return (
        <motion.div className='notification'
            initial={{opacity: 0}}
            animate={{opacity: 1}}
            exit={{opacity: 0}}
        >
            <Header title={"Уведомления"}/>
            <NoticeCardWrapper/>
        </motion.div>
    );
};

export default Notifications;