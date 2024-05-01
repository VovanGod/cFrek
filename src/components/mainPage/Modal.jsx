import React, { useState } from 'react';

const Modal = ({isOpen, isClose, handleClick}) => {
    const [mod, setMod] = useState(true);
    const del = () => {
        setMod(false);
        handleClick();
        isClose();
    }
    return (
        <>
            {isOpen ? 
                <div className={mod ? "overlay overlay-open" : "overlay"}>
                    <div className='modal'>
                        <div className="modal-txt">
                            Вы уверены, что хотите отменить запись?
                        </div>
                        <div className="modal-btns">
                            <button onClick={del} className='modal-btn border'>Да</button>
                            <button onClick={isClose} className='modal-btn'>Нет</button>
                        </div>
                    </div>
                </div>
            : ""
            }
        </>
    );
};

export default Modal;