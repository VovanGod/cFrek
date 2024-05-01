import React from 'react';

const TodayTimeTable = ({pairs, times}) => {
    return (
        <div className='today'>
            <div className="today-block today-block-green">
                Сегодня
                <div className="inf">{pairs}</div>
            </div>
            <div className="today-block">
                Завтра
                <div className="inf">{times}</div>
            </div>
        </div>
    );
};

export default TodayTimeTable;