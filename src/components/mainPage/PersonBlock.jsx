import React from 'react';

const PersonBlock = ({title, number, subtitle, bcolor}) => {
    return (
        <div className={`person-rating ${bcolor}`}>
            <div className="person-rating-title">{title}</div>
            <div className="person-rating-number">{number}</div>
            <div className="person-rating-subtitle">{subtitle}</div>
        </div>
    );
};

export default PersonBlock;