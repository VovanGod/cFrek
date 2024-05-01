import React from 'react';
import BtnMenu from './BtnMenu.jsx';

const Menu = () => {
    return (
        <nav className="menu">
            <div className="container">
                <ul>
                    <BtnMenu link={"Home"} title={"Главная"} href={""} focus={1}/>
                    <BtnMenu link={"Timetable"} title={"Расписание"} href={"timetable"}/>
                    <BtnMenu link={"Events"} title={"Мероприятия"} href={"events"} />
                    <BtnMenu link={"Rating"} title={"Рейтинг"} href={"rating"}/>
                    <BtnMenu link={"Teachers"} title={"Преподы"} href={"teachers"}/>
                </ul>
            </div>
        </nav>  
    );
};

export default Menu;