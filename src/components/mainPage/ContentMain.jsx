import React from 'react';
import TodayTimeTable from './TodayTimeTable';
import Ads from './Ads';
import { ads } from '../../jsons/adsList';
import PersonRating from './PersonRating';
import StudentsBirth from './StudentsBirth';

const ContentMain = () => {
    return (
        <div className='main'>
            <div className="container">
                <div className="main-wrapper">
                    <TodayTimeTable pairs={"4 Пары"} times={"к 9:45"}/>
                    {ads.map((ads) => <Ads {...ads}/>)}
                    <PersonRating/>
                    <StudentsBirth/>
                </div>
            </div>
        </div>
    );
};

export default ContentMain;