import React from "react";
import airbnb from './airbnb.png'
import './fireworks.css'

const WinResult = ({s, setActive, active}) => (
    <div className={s.results_wrapper}>
        <div className={active ? s.results_active : s.results}>
            <div className="pyro">
                <div className="before"/>
                <div className="after"/>
            </div>
            <div className={s.text}>Вы выиграли страстную ночь с самой красивой женщиной...</div>
            <img className={s.win_result_img} src={airbnb} alt=""/>
            <div className={s.text}>Вы первый обладатель данного приза. Это самый крупный выигрыш за всю историю нашей
                лотереи.
            </div>
            <button onClick={()=> setActive(false)} className={s.congratulation}>Поздравляем!</button>
        </div>
    </div>
);

export default WinResult;