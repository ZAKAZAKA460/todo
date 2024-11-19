import { useState } from "react";
import Switcher from "../Switcher/switch";
import style from "./style.module.css"

const SideBar = () =>{

    const [number, setNumber] = useState(0)

    const plus = () => {
        setNumber(number+1)
    }
    const minus = () => {
        setNumber(number-1)
    }

    return (<div className={style.wrapper}>
        <h1>{number}</h1>
        <button onClick={plus}>+</button>
        <button onClick={minus}>-</button>
        <Switcher/>
    </div>
    );
};

export default SideBar;