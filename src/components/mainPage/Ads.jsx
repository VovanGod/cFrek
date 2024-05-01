import React, { useRef, useState } from 'react';
import Modal from './Modal';

const Ads = ({title, txt, data, cabinet, time, heshtag}) => {
    const [open, setOpen] = useState(false);
    const Record = () => {
        setOpen(open => !open);
    }
    const [show, setShow] = useState(false);
    const showModal = () => {
        setShow(!show);
    }
    const modalClose = () => {
        setShow(false);
        setOpen(false);
    }
    const [close, setClose] = useState(true);
    const handleClick = () => {
        setClose(false);
    }
    return (
        <>
            <div className={close ? 'ads' : 'ads ads-no'}>
                <div className={open != true ? "ads-content" : "ads-content ads-content-open"}>
                    <div className="ads-title">{title}</div>
                    <button onClick={Record} className='ads-btn-delete'><img src="./img/bin.svg" alt="delete" /></button>
                    <div className="ads-txt">{txt}</div>
                    <div className="ads-wrap">
                        <div className="ads-inf">
                            {data} в {time} | {cabinet}
                        </div>
                        <div className="ads-heshtag">
                            {heshtag}
                        </div>
                    </div>
                </div>

                <div className="ads-delete">
                    <div className="ads-delete-wrapper">
                        <div className="ads-delete-title">Отменить запись?</div>
                        <button onClick={showModal} className="ads-btn yes">ДА</button>
                        <button onClick={Record} className="ads-btn no">НЕТ</button>
                    </div>
                </div>
            </div>

            <Modal isOpen={show} isClose={modalClose} handleClick={handleClick}/>
        </>
    );
};

export default Ads;