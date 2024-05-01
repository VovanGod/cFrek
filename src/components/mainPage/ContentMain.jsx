import React from 'react';
import TodayTimeTable from './TodayTimeTable';
import Ads from './Ads';
import { ads } from '../../jsons/adsList';
import PersonRating from './PersonRating';

const ContentMain = () => {
    return (
        <div className='main'>
            <div className="container">
                <div className="main-wrapper">
                    <TodayTimeTable pairs={"4 Пары"} times={"к 9:45"}/>
                    {ads.map((ads) => <Ads {...ads}/>)}
                    <PersonRating/>
                </div>
            </div>
        </div>
    );
};

export default ContentMain;