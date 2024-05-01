import React from 'react';
import NoticeCard from './NoticeCard';
import { news } from '../../jsons/news';
import Ads from '../mainPage/Ads';

const NoticeCardWrapper = () => {
    return (
        <div className='notice'>
            <div className="container">
                <div className="notice-wrapper">
                    {[...news].sort((a,b) => a.id < b.id ? 1 : -1).map((news) => <NoticeCard {...news} key={news.id}/>)}
                </div>
            </div>
        </div>
    );
};

export default NoticeCardWrapper;