import React, { useState } from 'react';
import PersonRating from '../mainPage/PersonRating';
import StudentRating from './StudentRating';
import {students} from '../../jsons/students'
import RatingInput from './RatingInput';

const ContentRating = () => {
    const [stud, setStud] = useState(true);
    const transformClick = () => {
        setStud(!stud);
    }
    const gr = 'ЦЭ2201';
    return (
        <div className='ratingPage'>
            <div className="container">
                <PersonRating/>
                <RatingInput transformClick={transformClick}/>
            </div>
            <div className="ratingPage-wrapper">
                {!stud ? 
                students.sort((a,b) => b.points - a.points).map((students) => <StudentRating {...students} key={students.name}/>)
                : students.sort((a,b) => b.points - a.points).map((students) => (students.group == gr) ? <StudentRating {...students} key={students.name}/> : "")}
            </div>
        </div>
    );
};

export default ContentRating;