import React, {useState} from "react";
import LotteryWheel from "./LotteryWheel";
import WinResult from "./WinResult";
import s from './style.module.css'

const App = () => {
    const [active, setActive] = useState(false)
    return (
        <div className={s.container}>
            <h1 className={s.title}>one winning lottery</h1>
            <LotteryWheel s={s} setActive={setActive} active={active}/>
            <WinResult s={s} setActive={setActive} active={active}/>
        </div>
    )
};

export default App;