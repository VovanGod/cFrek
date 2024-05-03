import React from 'react';

const StudentRating = ({name, group, points, me = false}) => {
    return (
        <div className={me ? "student-rating student-rating-active" : "student-rating"}>
            <div className="name">
                <button className='avatar'>ВА</button>
                {name}
            </div>
            <div className="group">
                {group}
                <div className="points">
                    {points}
                </div>
            </div>
        </div>
    );
};

export default StudentRating;