import React from 'react';
import PersonBlock from './PersonBlock';

const PersonRating = () => {
    return (
        <div className='person-inf'>
            <PersonBlock title={"Рейтинг"} number={"82"} subtitle={"Балла"} />
            <PersonBlock title={"В группе"} number={"6"} subtitle={"Место"} bcolor={"light-green"} />
            <PersonBlock title={"На курсе"} number={"24"} subtitle={"Место"} bcolor={"light"} />
        </div>
    );
};

export default PersonRating;