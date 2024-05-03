import React, { useState } from 'react';

const RatingInput = ({transformClick}) => {
    const [active, setActive] = useState(false);
    const handleClick = () => {
        setActive(!active);
    }
    const [text, setText] = useState(true);
    const textTransform = () => {
        setText(!text);
    }
    const clickBtn = () => {
        handleClick();
        transformClick();
        setText(!text);
    }
    return (
        <div className="ratingInput">
            <button onClick={handleClick} className="ratingInput-btn">
                {text ? "Мой курс" : "Все курсы"}
                <img src="img/arrow-input.svg" className={active ? "drop drop-active" : "drop"} alt="dropdown" />
            </button>
            <button onClick={clickBtn} className={!active ? "dropdown" : "dropdown dropdown-active"}>{!text ? "Мой курс" : "Все курсы"}</button>
        </div>
    )
}

export default RatingInput;