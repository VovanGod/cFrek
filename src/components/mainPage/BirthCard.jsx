import React from 'react';

const BirthCard = ({title, date}) => {
    return (
        <div className='birth-card'>
            <button className='avatar'>ВА</button>
            {title} | {date}
        </div>
    );
};

export default BirthCard;