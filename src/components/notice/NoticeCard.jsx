import React, { useState } from 'react';

const NoticeCard = ({title, icon, txt, time, importance = 0, id}) => {
    const [ok, setOk] = useState(importance);

    const handleClick = () => {
        setOk(0);
    }

    return (
        <div className={ok == 1 || ok == 2 ? ok == 2 ? "notice-card card-urgent" : "notice-card card-alert" : "notice-card"}>
            <div>
                <div className="notice-title">
                    {title}
                    
                    <div className="img-wrap">
                        <img src={ok == 0 ? importance == 2 || importance == 1 ? `img/${icon}-bl.svg` : `img/news.svg` : `img/${icon}.svg`} alt="icon" className='notice-card-img'/>
                    </div>
                </div>
                <div className="notice-txt">{txt}</div>
            </div>
            <div className="notice-card-wrap">
                <div className="time">{time}</div>
                {ok != 0 ?
                <button onClick={handleClick} className="card-btn">ок</button> :
                ""}
            </div>
        </div>
    );
};

export default NoticeCard;