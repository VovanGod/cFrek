import React from 'react';
import {students} from '../../jsons/students'
import BirthCard from './BirthCard';

const StudentsBirth = () => {
    let count = 0;
    let now = new Date();
    console.log(students[0].data[5].toString() + students[0].data[6].toString())
    console.log(now.getMonth()+1)

    return (
        <div className='students-birth'>
            <div className="students-birth-title">Ближайшие дни рождения:</div>
            <div className="students-birth-wrapper">
                {students.sort((a,b) => a.data.split('/').reverse().join().localeCompare(b.data.split('/').reverse().join())).map((students) => (now.getMonth() < students.data[5].toString() + students.data[6].toString() ? (count < 5 ? (count++, <BirthCard title={students.name} date={students.birthday} />) : "") : ""))}
            </div>
        </div>
    );
};

export default StudentsBirth;