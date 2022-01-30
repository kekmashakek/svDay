import React from "react";
import wheel from './KH_B8.png'

const LotteryWheel = ({s, active, setActive}) => (
    <div className={active && s.wheel_active}>

        <img className={s.wheel_img} src={wheel} alt="" onClick={() => setActive(true)}/>
    </div>
);

export default LotteryWheel;